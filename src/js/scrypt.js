// swiper-events

let swiperEvents = new Swiper(".events__swiper", {
  pagination: {
    el: ".events__pagination",
    clickable: true,
  },
});

// swiper-progects
let swiperProgects = new Swiper(".progects__swiper", {
  navigation: {
    prevEl: ".progects__button_prev",
    nextEl: ".progects__button_next",
  },
});

// swiper-gallery

var swiper = new Swiper(".gallery__swiper", {
  pagination: {
    el: ".gallery__pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".gallery__button-next",
    prevEl: ".gallery__button-prev",
  },
});

// contacts
// form

let selector = document.querySelector("input[type='tel']");
let im = new Inputmask("+7 (999)-999-99-99");
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
      strength: {custom: '[^_]$'},
    },
  },

  messages: {
    name: {
      required: 'Как вас зовут?',
      minLength: 'Короткое имя',
      maxLength: 'Длинное имя'
    },

    tel: 'Укажите ваш телефон',
  },
});

// map
ymaps.ready(init);
function init() {
  let myMap = new ymaps.Map("map", {
    center: [55.758468, 37.601088],
    zoom: 15,
  });

  let myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/geoObject.svg',
    iconImageSize: [20, 20],
  });

  myMap.geoObjects.add(myPlacemark);
}