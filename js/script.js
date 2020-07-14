// make varieble
const swicher = document.querySelector('#cbx'),
more = document.querySelector('.more'),
modal = document.querySelector('.modal'),
videos = document.querySelector('.videos__item'),
videosWraper = document.querySelector('.videos__wrapper');

// make nav click toggle
const bindSlideTogle = (trigger, boxBody, content, openClass)=>{
let button ={
    'element':document.querySelector(trigger),
    'active':false
}
const box =document.querySelector(boxBody),
boxContent=document.querySelector(content);
button.element.addEventListener('click', ()=>{
    if(button.active == false){
        button.active = true;
        box.style.height = boxContent.clientHeight+'px';
        box.classList.add(openClass);
    }else{
        button.active = false;
        box.style.height = 0+'px';
        box.classList.remove(openClass);

    }
})
}
bindSlideTogle('.hamburger', '[data-slide="nav"]', '.header__menu', 'slide-active')