/*global Vue VueForm axios LoadingBar*/
/*eslint no-undef: "error"*/
var timer;
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

function updateProgress(comp, val) {
  if (comp && comp.loading) {
    if (typeof val !== 'undefined' && !isNaN(val)) {
      comp.loading.progress = val;
    } else {
      if (comp.progress > 20 && comp.progress < 80) {
        comp.loading.progress += 20;
      } else {
        comp.loading.progress += 10;
      }
    }

    if (comp.loading.progress < 100) {
      timer = setTimeout(function () {
        updateProgress(comp);
      }, 20);
    }
  }
}

function stopProgress(comp) {
  if (timer) {
    clearTimeout(timer);
  }

  if (comp && comp.loading) {
    comp.loading.progress = 100;
  }
}

new Vue({
  el: '#app',
  components: {
    LoadingBar: LoadingBar
  },
  data: {
    formstate: {},
    model: model,
    loading: {
      progress: 0,
      error: false,
      direction: 'right'
    }
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
    onFileChange: function () {
      let file = model.file;
      model.code = '';
      if (!file) { // default select option
        return false;
      }
      let sourceCode = require('!!babel-loader!raw-loader!./code/' + file);
      model.code = sourceCode;
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

    onSubmit: function () {
      var body = {};

      if (this.formstate.code && this.formstate.code.$error && this.formstate.code.$error.validcode) {
        valid.code = true;

        delete this.formstate.code.$error.validcode;
        delete this.formstate.$error.code;

        this.formstate._reset();
        this.formstate.$submitted = true;

        if ('code' === model.type) {
          this.formstate = {
            $valid: true,
            $invalid: false
          };
        }
      }

      if (this.formstate.$valid) {
        if ('file' === model.type) {
          body.file = model.file;
        } else if ('code' === model.type) {
          body.code = model.code;
        }

        localStorage.setItem('es7-model', JSON.stringify(model));

        axios.post('/code', body)
          .then(res => {
            console.log(res); // eslint-disable-line no-console
            setTimeout(function () {
              stopProgress(this);
              this.formstate.$submitted = false;
            }.bind(this), 500);
          })
          .catch(e => {
            this.setLoadingError(true);

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

            model = this.model;
            if ('code' === this.model.type) {
              valid.code = false;
            }

            setTimeout(() => {
              stopProgress(this);
            }, 2000);

            console.log(e); // eslint-disable-line no-console
          });
      }
    }
  }
});
