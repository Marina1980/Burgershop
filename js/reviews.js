var reviewsList = document.querySelector('.reviews__list');
var modal = document.querySelector('.modal');

reviewsList.addEventListener('click', function(event){
event.preventDefault();
target = event.target
if(target.className = "button button2_black"){
 var modalText = document.querySelector('.modal__text');
           modalText.textContent = 

         modal.classList.add('visibly'); 
}
});