const myForm = document.querySelector('#myForm');
const sendButton = document.querySelector('#sendButton');


sendButton.addEventListener('click', function(event){
    event.preventDefault();
    if (validateForm(myForm)){
        const formData = {
            name: myForm.name.value,
            phone: myForm.phone.value,
            comment: myForm.message.value,
            to: 'my@send.ru'
          };
       
        const xhr = new XMLHttpRequest();
       xhr.responseType = 'json';
       xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
       xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
       console.log(JSON.stringify(formData));
       xhr.send(JSON.stringify(formData));
       xhr.addEventListener('load', () => {
           
           console.log(xhr.response);
           var popapText = document.querySelector('.popap__text');
           popapText.textContent = xhr.response.message; 

           var overlay = document.querySelector('.overlay');           
        //    var popapButton =document.querySelector(".popap__button"); 
        var overlayButton = document.querySelector('.popap__button');  
               
            overlay.classList.add('visibly');         
          
        });
        
        overlayButton.addEventListener('click', function(){
           overlay.classList.remove("visibly");
        });
    }
});
function validateForm(form){
      let valid = true;

      if(!validateField(form.elements.name)){
          valid = false;
      }
      if(!validateField(form.elements.phone)){
        valid = false;
    }
    if(!validateField(form.elements.message)){
        valid = false;
    }
    return valid;
}
function validateField(field){
      if(!field.checkValidity()){          
          return false;
      } else{        
        return true;  
    }
}

