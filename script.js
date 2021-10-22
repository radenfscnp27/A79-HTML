let ham = document.querySelector('.hamburger')
let menu = document.querySelector('.menu')
let navbar = document.querySelector('.nav-bar')
let sliderImg = document.querySelector('#slider-img')


ham.addEventListener('click', event => {

    menu.classList.toggle('show')
    navbar.classList.toggle('nav-height')

})
 let images = ['./img/img-1.jpg','./img/img-2.jpg','./img/img-3.jpg']
 let i = 0;
function slide(){
    sliderImg.src = images[i]

    i++;
    if(i===4){
        i=0;
    }
}
setInterval(slide,3000)
