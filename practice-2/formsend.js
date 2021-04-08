const form = {
    formEl: null,
    rules: null,

init() {
    this.formEl = document.querySelector('.my-form');
    this.formEl.addEventListener('submit', e=> this.formSubmit(e))

    this.rules = []
    {
        selector: 'input
    }
},

formSubmit(e) {
    if(!this.validate()) {
       e.preventDefault();
    }
},

validate() {

}

}

