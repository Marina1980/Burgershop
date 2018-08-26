function AccordionTeam(){
    const workers = document.querySelectorAll(".team__item");
    const teamAccord = document.querySelector(".team__list");

    teamAccord.addEventListener('click', event =>{
    const target = event.target;
    // console.log(target);

    if (target.classList.contains('team__link')){
        const worker = target.parentNode;
        const content = target.nextElementSibling;
        const contentHeight = content.lastElementChild.clientHeight;
        // console.log(worker, content, contentHeight);
        for(const iterator of workers){
            if(iterator!== worker){
                iterator.classList.remove('is_active');
                iterator.lastElementChild.style.height =0;
            }
        }
        if(worker.classList.contains('is_active')){
            worker.classList.remove('is_active');
            content.style.height = 0
        } else {

        worker.classList.add('is_active');
        content.style.height = contentHeight + 'px';
        }
    }

    });
}
AccordionTeam();
