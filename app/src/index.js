import 'babel-polyfill';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'vue2-loading-bar/src/css/loading-bar.css';

import 'codemirror/theme/base16-light.css';
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/addon/selection/active-line.js';
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/javascript-hint.js';
import 'codemirror/addon/edit/matchbrackets.js';
import 'codemirror/addon/edit/closebrackets.js';
import 'codemirror/addon/comment/comment.js';
import 'codemirror/addon/search/match-highlighter.js';

import '../assets/styles.css';
import '../assets/themes.css';


import axios from 'axios';
import Vue from 'vue';
import VueForm from 'vue-form';
import LoadingBar from 'vue2-loading-bar';
import {codemirror, CodeMirror} from 'vue-codemirror-lite';
import help from './components/help/help.vue';
import SplitPane from './components/SplitPane.vue';
import domLogger from './utils/logger';
import themes from './themes';

let timer;
let stored = localStorage.getItem('es7-model');

const defaults = {
  type: 'file',
  code: '',
  file: '',
  files: [],
  split: 50,
  consoleTheme: '',
  editorState: {},
};
const valid = {
  code: true
};

if (stored) {
  try {
    stored = JSON.parse(stored);
  } catch (ex) {
    stored = defaults;
  }
} else {
  stored = defaults;
}

const model = Object.assign({}, {
  type: stored.type,
  code: stored.code,
  file: stored.file,
  split: +stored.split,
  files: defaults.files,
  consoleTheme: stored.consoleTheme,
  editorState: stored.editorState,
});

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  },
  validators: {
    'validcode': () => {
      // return true to set input as $valid, false to set as $invalid
      return valid.code;
    }
  }
});

axios.get('/files')
  .then(res => {
    // JSON responses are automatically parsed.
    model.files = res.data;
  })
  .catch(e => {
    console.log(e); // eslint-disable-line no-console
  });

new Vue({
  el: '#app',
  components: {
    help,
    LoadingBar,
    codemirror,
    SplitPane,
  },

  data() {
    return {
      formstate: {},
      model: model,
      loading: {
        progress: 0,
        error: false,
        direction: 'right'
      },
      editorOptions: {
        mode: 'javascript',
        theme: 'base16-light',
        tabSize: 2,
        autofocus: true,
        lineNumbers: true,
        lineWrapping: true,
        styleActiveLine: true,
        matchBrackets: true,
        autoCloseBrackets: true,
        highlightSelectionMatches: true,
        extraKeys: {
          'Ctrl-Space': 'autocomplete',
        },
      },
      consoleThemeMap: {
        'fly-me-to-the-moon': 'space'
      },
    };
  },

  computed: {
    editor() {
      return this.$refs.codeEditor.editor;
    },
  },

  created() {
    // fight the FOUC
    document.querySelector('.no-fouc').classList.remove('no-fouc');

    // bind special keys separately for pc/mac
    CodeMirror.keyMap.macDefault['Cmd-Enter'] = this.onSubmit;
    CodeMirror.keyMap.pcDefault['Ctrl-Enter'] = this.onSubmit;
    CodeMirror.keyMap.macDefault['Cmd-/'] = CodeMirror.commands.toggleComment;
    CodeMirror.keyMap.pcDefault['Ctrl-/'] = CodeMirror.commands.toggleComment;

    // restore saved theme
    if (this.model.consoleTheme) {
      themes.apply(this.model.consoleTheme, '#console-box');
    }
  },

  mounted() {
    // restore code editor saved state
    const {cursor, selections, history, scroll} = this.model.editorState;
    if (cursor) {
      this.editor.setCursor(cursor);
    }
    if (selections) {
      this.editor.setSelections(selections);
    }
    if (history) {
      this.editor.setHistory(history);
    }
    if (scroll) {
      const {left: x, top: y} = scroll;
      this.editor.scrollTo(x, y);
    }
  },

  methods: {

    fieldClassName(field) {
      if (field && (field.$submitted) && field.$valid) {
        return 'has-success';
      }
      if (field && (field.$submitted) && field.$invalid) {
        return 'has-danger';
      }

      return '';
    },

    onFileSelect() {
      const file = this.model.file;

      // default select option has no file
      if (!file) {
        console.warn('file not found'); // eslint-disable-line no-console
        return false;
      }

      const snippetHeader = `/* '${file}' */\n\n`;
      const snippetBody = require(`!!babel-loader!raw-loader!./snippets/${file}`);

      this.model.code = `${snippetHeader}${snippetBody}`;

      // reset the select box to indicate to the user that snippets just serve
      // as an initial template that can be edited before running the code
      this.model.file = '';

      domLogger.clear();

      let oldConsoleTheme = this.model.consoleTheme;
      let newConsoleTheme = this.consoleThemeMap[file] || '';
      if (newConsoleTheme !== oldConsoleTheme) {
        themes.clear(oldConsoleTheme, '#console-box');
        themes.apply(newConsoleTheme, '#console-box');
        this.model.consoleTheme = newConsoleTheme;
        this.persist();
      }

      // reset the code editor state
      this.model.editorState = {};
      this.editor.setCursor(0, 0);
      this.editor.scrollTo(0, 0);
      this.editor.clearHistory(); // this also takes care of clearing current selections

      // regain editor focus
      this.editor.focus();

    },

    updateProgress(val) {
      if (this.loading) {
        if (typeof val !== 'undefined' && !isNaN(val)) {
          this.loading.progress = val;
        } else {
          if (this.loading.progress > 20 && this.loading.progress < 80) {
            this.loading.progress += 20;
          } else {
            this.loading.progress += 10;
          }
        }

        if (this.loading.progress < 100) {
          timer = setTimeout(() => {
            this.updateProgress();
          }, 20);
        }
      }
    },

    stopProgress() {
      if (timer) {
        clearTimeout(timer);
      }

      if (this.loading) {
        this.loading.progress = 100;
      }
    },

    setLoadingError(bol) {
      this.loading.error = bol;
    },

    loadingErrorDone() {
      this.loading.error = false
    },

    loadingProgressDone() {
      this.loading.progress = 0
    },

    onSubmit() {
      if (this.formstate.code && this.formstate.code.$error && this.formstate.code.$error.validcode) {
        valid.code = true;

        delete this.formstate.code.$error.validcode;
        delete this.formstate.$error.code;

        this.formstate._reset();
        this.formstate.$submitted = true;

        this.formstate = {
          $valid: true,
          $invalid: false
        };
      }

      if (this.formstate.$valid) {
        this.updateProgress(this, 0);

        this.model.editorState = {
          cursor: this.editor.getCursor(),
          selections: this.editor.listSelections(),
          history: this.editor.getHistory(),
          scroll: this.editor.getScrollInfo(),
        };

        this.persist();

        axios.post('/code', {code: this.model.code})
          .then(res => {
            console.log(res); // eslint-disable-line no-console
            setTimeout(() => {
              this.stopProgress(this);
              this.formstate.$submitted = false;
            }, 500);
          })
          .catch(e => {
            this.setLoadingError(true);

            if (stored) {
              this.persist(stored);
              this.model = Object.assign({}, this.model, stored);
            } else {
              localStorage.removeItem('es7-model');
              this.model = Object.assign({}, this.model, defaults);
            }

            valid.code = false;

            setTimeout(() => {
              this.stopProgress(this);
            }, 2000);

            console.log(e); // eslint-disable-line no-console
          });
      }
    },

    saveSplit(splitValue) {
      this.model.split = +splitValue;
      this.persist();
    },

    persist(state) {
      localStorage.setItem('es7-model', JSON.stringify(state || this.model));
    },
  }
});
