import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles.css';
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/selection/active-line.js';
import 'codemirror/theme/base16-light.css';
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/javascript-hint.js';

import {codemirror} from 'vue-codemirror-lite'
import axios from 'axios';
import Vue from 'vue';
import VueForm from 'vue-form';


var stored = localStorage.getItem('es7-model');
var defaults = {
  type: 'file',
  code: '',
  file: '',
  files: []
};
var valid = {
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

var model = Object.assign({}, {
  type: stored.type,
  code: stored.code,
  file: stored.file,
  files: defaults.files
});

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  },
  validators: {
    'validcode': function () {
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
    codemirror
  },
  data: function () {
    return {
      formstate: {},
      model: model,
      editorOptions: {
        mode: 'javascript',
        theme: 'base16-light',
        tabSize: 2,
        lineNumbers: true,
        lineWrapping: true,
        styleActiveLine: true,
        extraKeys: {
          'Ctrl-Space': 'autocomplete',
          'Ctrl-Enter': this.onSubmit,
        },
      },
    };
  },
  created() {
    // fight the FOUC
    document.querySelector('.no-fouc').classList.remove('no-fouc');
  },
  methods: {
    fieldClassName: function (field) {
      if (field && (field.$submitted) && field.$valid) {
        return 'has-success';
      }
      if (field && (field.$submitted) && field.$invalid) {
        return 'has-danger';
      }

      return '';
    },
    onFileSelect: function () {
      let file = model.file;
      // default select option has no file
      if (!file) {
        console.warn('file not found'); // eslint-disable-line no-console
        return false;
      }
      let snippetHeader = `/* '${file}' */\n\n`;
      model.code = snippetHeader + require('!!babel-loader!raw-loader!./snippets/' + file);
      // reset the select box to indicate to the user that snippets just serve
      // as an initial template that can be edited before running the code
      model.file = '';
    },
    onSubmit: function () {
      var body = {};

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
        body.code = model.code;

        localStorage.setItem('es7-model', JSON.stringify(model));

        axios.post('/code', body)
          .then(res => {
            console.log(res); // eslint-disable-line no-console
            setTimeout(function () {
              this.formstate.$submitted = false;
            }.bind(this), 500);
          })
          .catch(e => {
            if (stored) {
              localStorage.setItem('es7-model', JSON.stringify(stored));
              this.model = Object.assign({}, this.model, stored);
            } else {
              localStorage.removeItem('es7-model');
              this.model = Object.assign({}, this.model, {
                type: 'file',
                code: '',
                file: ''
              });
            }

            valid.code = false;

            console.log(e); // eslint-disable-line no-console
          });
      }
    }
  }
});
