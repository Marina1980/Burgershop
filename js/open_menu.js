element=document.querySelector(".menu__btn");
element2=document.querySelector(".img__close");
element3=document.querySelector(".intro__menu");


element.addEventListener('click', function(){
   element3.classlist.add("open__menu")
});

element2.addEventListener('click', function(){
    element3.classlist.remove("open__menu")
});