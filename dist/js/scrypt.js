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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3J5cHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8vIGhlYWRlcnNcbi8vIG5hdlxuLy8g0LDQvdC40LzQsNGG0LjRjyDQutC90L7Qv9C60Lgg0LHRg9GA0LPQtdGA0LBcbmNvbnN0IGJ1cmdlckFuaW0gPSAoKCkgPT4ge1xuICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyJyk7XG4gIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2J1cmdlci0tYWN0aXZlJyk7XG4gICAgaWYgKGJ1cmdlci5jbGFzc0xpc3QuY29udGFpbnMoJ2J1cmdlci0tYWN0aXZlJykpIHtcbiAgICAgIGdzYXAuZnJvbVRvKCcubmF2X19saXN0JywgeyB4OiAtNTAwLCBvcGFjaXR5OiAwIH0sIHsgZHVyYXRpb246IDAuNiwgeDogMCwgb3BhY2l0eTogMSB9KTtcbiAgICB9IGVsc2UgaWYgKCghYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucygnYnVyZ2VyLS1hY3RpdmUnKSkpIHtcbiAgICAgICAgZ3NhcC50bygnLm5hdl9fbGlzdCcsIHsgZHVyYXRpb246IDAuNiwgeDogLTUwMCwgb3BhY2l0eTogMCB9KTtcbiAgICAgIH1cblxuICAgIC8vIGlmIChlLmNsYXNzTGlzdC5jb250YWlucygnYnVyZ2VyLS1hY3RpdmUnKSkge1xuICAgIC8vICAgZ3NhcC5mcm9tVG8oJy5uYXZfX2xpc3QnLCB7IHg6IC01MDAsIG9wYWNpdHk6IDAgfSwgeyBkdXJhdGlvbjogMC42LCB4OiAwLCBvcGFjaXR5OiAxIH0pO1xuICAgIC8vIH1cbiAgfSk7XG59KSgpO1xuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbi8vICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1cmdlcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICB9KTtcbi8vIH0pO1xuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbi8vICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1cmdlci1jbG9zZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXJnZXItb3BlbicpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXJnZXItY2xvc2UnKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbi8vICAgICBnc2FwLnRvKCcubmF2X19saXN0JywgeyBkdXJhdGlvbjogMCwgeDogLTUwMCwgb3BhY2l0eTogMCB9KTtcbi8vICAgfSk7XG4vLyB9KTtcbi8vIC8vIHNlYXJjaFxuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4vLyAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtb3BlbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtb3BlbicpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2hfX2xhYmVsJykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4vLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1jbG9zZWQnKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbi8vICAgfSk7XG4vLyB9KTtcbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuLy8gICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLWNsb3NlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4vLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1vcGVuJykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4vLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaF9fbGFiZWwnKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbi8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19sb2dvJykuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4vLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1jbG9zZWQnKS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbi8vICAgfSk7XG4vLyB9KTtcblxuLy8gc3dpcGVyLWV2ZW50c1xuY29uc3Qgc3dpcGVyRXZlbnRzID0gbmV3IFN3aXBlcignLmV2ZW50c19fc3dpcGVyJywge1xuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6ICcuZXZlbnRzX19wYWdpbmF0aW9uJyxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gIH0sXG59KTtcblxuLy8gc3dpcGVyLXByb2dlY3RzXG5jb25zdCBzd2lwZXJQcm9nZWN0cyA9IG5ldyBTd2lwZXIoJy5wcm9nZWN0c19fc3dpcGVyJywge1xuICBuYXZpZ2F0aW9uOiB7XG4gICAgcHJldkVsOiAnLnByb2dlY3RzX19idXR0b25fcHJldicsXG4gICAgbmV4dEVsOiAnLnByb2dlY3RzX19idXR0b25fbmV4dCcsXG4gIH0sXG59KTtcbi8vIGdhbGxlcnlcbi8vIHN3aXBlci1nYWxsZXJ5XG5jb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuZ2FsbGVyeV9fc3dpcGVyJywge1xuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6ICcuZ2FsbGVyeV9fcGFnaW5hdGlvbicsXG4gICAgdHlwZTogJ2ZyYWN0aW9uJyxcbiAgfSxcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogJy5nYWxsZXJ5X19idXR0b24tbmV4dCcsXG4gICAgcHJldkVsOiAnLmdhbGxlcnlfX2J1dHRvbi1wcmV2JyxcbiAgfSxcbn0pO1xuLy8gY29udGFjdHNcbi8vIGNvbnRhY3RzIGZvcm1cbmNvbnN0IHNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGU9J3RlbCddXCIpO1xuY29uc3QgaW0gPSBuZXcgSW5wdXRtYXNrKCcrNyAoOTk5KS05OTktOTktOTknKTtcbmltLm1hc2soc2VsZWN0b3IpO1xubmV3IEp1c3RWYWxpZGF0ZSgnLmZvcm0nLCB7XG4gIHJ1bGVzOiB7XG4gICAgbmFtZToge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBtaW5MZW5ndGg6IDIsXG4gICAgICBtYXhMZW5ndGg6IDI0LFxuICAgIH0sXG5cbiAgICB0ZWw6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgc3RyZW5ndGg6IHsgY3VzdG9tOiAnW15fXSQnIH0sXG4gICAgfSxcbiAgfSxcbiAgbWVzc2FnZXM6IHtcbiAgICBuYW1lOiB7XG4gICAgICByZXF1aXJlZDogJ9Ca0LDQuiDQstCw0YEg0LfQvtCy0YPRgj8nLFxuICAgICAgbWluTGVuZ3RoOiAn0JrQvtGA0L7RgtC60L7QtSDQuNC80Y8nLFxuICAgICAgbWF4TGVuZ3RoOiAn0JTQu9C40L3QvdC+0LUg0LjQvNGPJyxcbiAgICB9LFxuICAgIHRlbDogJ9Cj0LrQsNC20LjRgtC1INCy0LDRiCDRgtC10LvQtdGE0L7QvScsXG4gIH0sXG59KTtcblxuLy8gY29udGFjdHMgbWFwXG55bWFwcy5yZWFkeShpbml0KTtcbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGNvbnN0IG15TWFwID0gbmV3IHltYXBzLk1hcCgnbWFwJywge1xuICAgIGNlbnRlcjogWzU1Ljc1ODQ2OCwgMzcuNjAxMDg4XSxcbiAgICB6b29tOiAxNSxcbiAgfSk7XG4gIGNvbnN0IG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhbNTUuNzU4NDY4LCAzNy42MDEwODhdLCB7fSwge1xuICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcbiAgICBpY29uSW1hZ2VIcmVmOiAnaW1nL2dlb09iamVjdC5zdmcnLFxuICAgIGljb25JbWFnZVNpemU6IFsyMCwgMjBdLFxuICB9KTtcbiAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xufVxuIl0sImZpbGUiOiJzY3J5cHQuanMifQ==
