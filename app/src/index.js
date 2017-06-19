/*global Vue VueForm axios*/
/*eslint no-undef: "error"*/

import '../assets/styles.css';

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
  data: {
    formstate: {},
    model: model
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
      let sourceCode = require('!!babel-loader!raw-loader!./snippets/' + file);
      model.code = sourceCode;
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
