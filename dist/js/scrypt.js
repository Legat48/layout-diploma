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



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3J5cHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbmF2XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnVyZ2VyLW9wZW4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXJnZXItb3BlbicpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXJnZXItY2xvc2UnKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICBnc2FwLmZyb21UbyhcIi5uYXZfX2JveFwiLHt4Oi01MDAsIG9wYWNpdHk6IDB9LCB7ZHVyYXRpb246IDAuNiwgeDogMCwgb3BhY2l0eTogMX0pO1xuICAgIGdzYXAuZnJvbVRvKFwiLm5hdl9fYnRuLXN2Z1wiLHtvcGFjaXR5OiAwfSwge2R1cmF0aW9uOiAwLjgsIG9wYWNpdHk6IDF9KTtcbiAgfSlcbn0pXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXJnZXItY2xvc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXJnZXItb3BlbicpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXJnZXItY2xvc2UnKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICBnc2FwLnRvKFwiLm5hdl9fYm94XCIsIHtkdXJhdGlvbjogMCwgeDogLTUwMCwgb3BhY2l0eTogMH0pO1xuICB9KVxufSlcbi8vIHNlYXJjaFxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1vcGVuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLW9wZW4nKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoX19sYWJlbCcpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtY2xvc2VkJykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gIH0pXG59KVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1jbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1vcGVuJykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9fbGFiZWwnKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19sb2dvJykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1jbG9zZWQnKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgfSlcbn0pXG5cbi8vIGxvY2F0aW9uXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9jYXRpb24tY2xvc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbicpLmNsYXNzTGlzdC50b2dnbGUoJ2RlYWN0aXZhdGUnKTtcbiAgfSlcbn0pXG4vLyBmb3JtIHZhbGlkYXRlIGFib3V0XG5cbm5ldyBKdXN0VmFsaWRhdGUoJy5hYm91dF9fZm9ybScsIHtcbiAgcnVsZXM6IHtcbiAgICBtYWlsOntcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgZW1haWw6IHRydWVcbiAgICB9LFxuICB9LFxuICBtZXNzYWdlczoge1xuICAgIG1haWw6ICfQndC10LTQvtC/0YPRgdGC0LjQvNGL0Lkg0YTQvtGA0LzQsNGCJyxcbiAgfSxcbn0pO1xuXG5cbi8vIGZvcm0gdmFsaWRhdGUgY29udGFjdHNcbm5ldyBKdXN0VmFsaWRhdGUoJy5mb3JtJywge1xuICBydWxlczoge1xuICAgIG5hbWU6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgbWluTGVuZ3RoOiAyLFxuICAgICAgbWF4TGVuZ3RoOiAyNCxcbiAgICB9LFxuICAgIG1haWw6e1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBlbWFpbDogdHJ1ZVxuICAgIH0sXG4gICAgbWVzc2FnZToge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgfVxuICB9LFxuXG4gIG1lc3NhZ2VzOiB7XG4gICAgbmFtZToge1xuICAgICAgcmVxdWlyZWQ6ICfQndC10LTQvtC/0YPRgdGC0LjQvNGL0Lkg0YTQvtGA0LzQsNGCJyxcbiAgICAgIG1pbkxlbmd0aDogJ9Cd0LXQtNC+0L/Rg9GB0YLQuNC80YvQuSDRhNC+0YDQvNCw0YInLFxuICAgICAgbWF4TGVuZ3RoOiAn0J3QtdC00L7Qv9GD0YHRgtC40LzRi9C5INGE0L7RgNC80LDRgidcbiAgICB9LFxuICAgIG1haWw6ICfQndC10LTQvtC/0YPRgdGC0LjQvNGL0Lkg0YTQvtGA0LzQsNGCJyxcbiAgICBtZXNzYWdlOiAn0J3QsNC/0LjRiNC40YLQtSDQsiDQt9Cw0Y/QstC60LUg0LTQsNGC0YMnXG4gIH0sXG59KTtcblxuLy8gbWFwXG55bWFwcy5yZWFkeShpbml0KTtcbmZ1bmN0aW9uIGluaXQoKSB7XG4gIHZhciBteU1hcCA9IG5ldyB5bWFwcy5NYXAoXCJtYXBcIiwge1xuICAgIGNlbnRlcjogWzU1Ljc3MDYyNCwgMzcuNjMyNzQyXSxcbiAgICB6b29tOiAxNixcbiAgICBjb250cm9sczogWycnXVxuICB9KTtcblxuICB2YXIgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFs1NS43NzA2MjQsIDM3LjYzMjc0Ml0sIHt9LCB7XG4gICAgaWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2UnLFxuICAgIGljb25JbWFnZUhyZWY6ICdpbWcvZ2VvT2JqZWN0LnN2ZycsXG4gICAgaWNvbkltYWdlU2l6ZTogWzEyLCAxMl0sXG4gICAgaWNvbkltYWdlT2Zmc2V0OiBbMSwgMV1cbiAgfSk7XG5cbiAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xufVxuXG5cbiJdLCJmaWxlIjoic2NyeXB0LmpzIn0=
