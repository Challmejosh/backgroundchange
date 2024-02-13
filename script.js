const switchBg = document.querySelector(".container");
const body = document.querySelector('.body');


switchBg.addEventListener('click', ()=> {
    switchBg.classList.toggle('active');
    body.classList.toggle('active');

})


