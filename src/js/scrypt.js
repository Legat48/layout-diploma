/* eslint-disable no-use-before-define */
/* eslint-disable no-new */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// headers
// nav
// анимация кнопки бургера
const burgerAnim = (() => {
  const burger = document.querySelector('.burger');
  burger.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('burger--active');
    if (burger.classList.contains('burger--active')) {
      gsap.fromTo('.nav__list', { x: -500, opacity: 0 }, { duration: 0.6, x: 0, opacity: 1 });
    } else if ((!burger.classList.contains('burger--active'))) {
        gsap.to('.nav__list', { duration: 0.6, x: -500, opacity: 0 });
      }

    // if (e.classList.contains('burger--active')) {
    //   gsap.fromTo('.nav__list', { x: -500, opacity: 0 }, { duration: 0.6, x: 0, opacity: 1 });
    // }
  });
})();

// window.addEventListener('DOMContentLoaded', () => {
//   document.querySelector('#burger').addEventListener('click', () => {
//   });
// });

// window.addEventListener('DOMContentLoaded', () => {
//   document.querySelector('#burger-close').addEventListener('click', () => {
//     document.querySelector('#burger-open').classList.toggle('active');
//     document.querySelector('#burger-close').classList.toggle('active');
//     gsap.to('.nav__list', { duration: 0, x: -500, opacity: 0 });
//   });
// });
// // search
// window.addEventListener('DOMContentLoaded', () => {
//   document.querySelector('#search-open').addEventListener('click', () => {
//     document.querySelector('#search-open').classList.toggle('active');
//     document.querySelector('.search__label').classList.toggle('active');
//     document.querySelector('#search-closed').classList.toggle('active');
//   });
// });
// window.addEventListener('DOMContentLoaded', () => {
//   document.querySelector('#search-close').addEventListener('click', () => {
//     document.querySelector('#search-open').classList.toggle('active');
//     document.querySelector('.search__label').classList.toggle('active');
//     document.querySelector('.header__logo').classList.toggle('active');
//     document.querySelector('#search-closed').classList.toggle('active');
//   });
// });

// swiper-events
const swiperEvents = new Swiper('.events__swiper', {
  pagination: {
    el: '.events__pagination',
    clickable: true,
  },
});

// swiper-progects
const swiperProgects = new Swiper('.progects__swiper', {
  navigation: {
    prevEl: '.progects__button_prev',
    nextEl: '.progects__button_next',
  },
});
// gallery
// swiper-gallery
const swiper = new Swiper('.gallery__swiper', {
  pagination: {
    el: '.gallery__pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.gallery__button-next',
    prevEl: '.gallery__button-prev',
  },
});
// contacts
// contacts form
const selector = document.querySelector("input[type='tel']");
const im = new Inputmask('+7 (999)-999-99-99');
im.mask(selector);
new JustValidate('.form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 24,
    },

    tel: {
      required: true,
      strength: { custom: '[^_]$' },
    },
  },
  messages: {
    name: {
      required: 'Как вас зовут?',
      minLength: 'Короткое имя',
      maxLength: 'Длинное имя',
    },
    tel: 'Укажите ваш телефон',
  },
});

// contacts map
ymaps.ready(init);
function init() {
  const myMap = new ymaps.Map('map', {
    center: [55.758468, 37.601088],
    zoom: 15,
  });
  const myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/geoObject.svg',
    iconImageSize: [20, 20],
  });
  myMap.geoObjects.add(myPlacemark);
}
