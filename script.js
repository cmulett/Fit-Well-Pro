
// PARA EL HEADER 

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// PARA EL SCROLL EN VENTANA

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('header').classList.remove('active');
    }

    window.onload = () =>{
        if(window.scrollY > 0){
            document.querySelector('.header').classList.add('active');
        }else{
            document.querySelector('header').classList.remove('active');
        }
    }
    
}

// SWIPPER PARA SECCION HOME 

var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
  });


// SWIPPER PARA FEATURE

var swiper = new Swiper(".feature-slider", {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

      breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView:2,
        },
        991: {
            slidesPerView:3,
        },
      },
  });


// SLIDER TESTIMONY PARA FEATURE

  (function(){

    const sliders  = [...document.querySelectorAll('.testimony_body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click', ()=> {
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.testimony_body--show').dataset.id; 
        value = Number(currentTestimony);
        value+= add;

        sliders[Number(currentTestimony)-1].classList.remove('testimony_body--show');
        if(value === sliders.length+1   ||  value ===0){
            value = value === 0 ? sliders.length    : 1;

        }

        sliders[value-1].classList.add('testimony_body--show');
    }


})();










