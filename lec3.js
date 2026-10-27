let form = document.querySelector('form');

const userManager = {

    users : [],
    init : function(){
    form.addEventListener("submit", this.submitForm);
    },
  submitForm : function(e){
   e.preventDefault();
   console.log(this);
  },
    addUsers : function(){},
    removeUsers : function(){},
};

userManager.init();