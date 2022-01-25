// swiper-events

let swiperEvents = new Swiper(".events__swiper", {
  pagination: {
    el: ".events__pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

// swiper-progects
let swiperProgects = new Swiper(".progects__swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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
  var myMap = new ymaps.Map("map", {
    center: [55.770624, 37.632742],
    zoom: 16,
    controls: ['']
  });

  var myPlacemark = new ymaps.Placemark([55.770624, 37.632742], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/geoObject.svg',
    iconImageSize: [12, 12],
    iconImageOffset: [1, 1]
  });

  myMap.geoObjects.add(myPlacemark);
}