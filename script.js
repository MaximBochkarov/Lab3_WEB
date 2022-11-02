let block = document.querySelector('.menu-btn');
let list = document.querySelector('.menu__list');
let logotext = document.querySelector('.logo__text');
block.addEventListener('click', ()=>{

    if(list.classList.contains('menu__list-active')){
        list.classList.remove('menu__list-active');
        block.classList.remove('menu-btn__active')
    }
    else{
        block.classList.add('menu-btn__active')
        list.classList.add('menu__list-active');

    }
})

