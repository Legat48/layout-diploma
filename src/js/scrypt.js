// nav
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger-open').addEventListener('click', function() {
    document.querySelector('#burger-open').classList.toggle('active');
    document.querySelector('#burger-close').classList.toggle('active');
    gsap.fromTo(".nav__box",{x:-500, opacity: 0}, {duration: 0.6, x: 0, opacity: 1});
    gsap.fromTo(".nav__btn-svg",{opacity: 0}, {duration: 0.8, opacity: 1});
  })
})

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger-close').addEventListener('click', function() {
    document.querySelector('#burger-open').classList.toggle('active');
    document.querySelector('#burger-close').classList.toggle('active');
    gsap.to(".nav__box", {duration: 0, x: -500, opacity: 0});
  })
})
// search
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#search-open').addEventListener('click', function() {
    document.querySelector('#search-open').classList.toggle('active');
    document.querySelector('.search__label').classList.toggle('active');
    document.querySelector('#search-closed').classList.toggle('active');
  })
})
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#search-close').addEventListener('click', function() {
    document.querySelector('#search-open').classList.toggle('active');
    document.querySelector('.search__label').classList.toggle('active');
    document.querySelector('.header__logo').classList.toggle('active');
    document.querySelector('#search-closed').classList.toggle('active');
  })
})

// location
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#location-close').addEventListener('click', function() {
    document.querySelector('.location').classList.toggle('deactivate');
  })
})
// form validate about

new JustValidate('.about__form', {
  rules: {
    mail:{
      required: true,
      email: true
    },
  },
  messages: {
    mail: 'Недопустимый формат',
  },
});


// form validate contacts
new JustValidate('.form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 24,
    },
    mail:{
      required: true,
      email: true
    },
    message: {
      required: true,
    }
  },

  messages: {
    name: {
      required: 'Недопустимый формат',
      minLength: 'Недопустимый формат',
      maxLength: 'Недопустимый формат'
    },
    mail: 'Недопустимый формат',
    message: 'Напишите в заявке дату'
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


