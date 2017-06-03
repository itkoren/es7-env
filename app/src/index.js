/*global Vue VueForm axios*/
/*eslint no-undef: "error"*/
var model = {
  code: '',
  file: '',
  files: []
};

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
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
      if (!field) {
        return '';
      }
      if ((field.$touched || field.$submitted) && field.$valid) {
        return 'has-success';
      }
      if ((field.$touched || field.$submitted) && field.$invalid) {
        return 'has-danger';
      }
    },
    onSubmit: function () {
      axios.post('/code', { file: model.file, code: model.code })
        .then(res => {
          // JSON responses are automatically parsed.
          console.log(res); // eslint-disable-line no-console
        })
        .catch(e => {
          console.log(e); // eslint-disable-line no-console
        });
    }
  }
});
