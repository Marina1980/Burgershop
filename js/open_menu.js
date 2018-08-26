var btnMenu=document.querySelector(".btn-menu");
var close=document.querySelector(".img__close");
var introMenu=document.querySelector(".intro__menu");


btnMenu.addEventListener('click', function(){
   introMenu.classList.add("open__menu")
console.log('1');
});

close.addEventListener('click', function(){
    introMenu.classList.remove("open__menu")
});
