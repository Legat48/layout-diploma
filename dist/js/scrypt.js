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
  });
})();

// // search
const searchAnim = (() => {
  const search = document.querySelector('#search-toggle');
  const searchSvgOpen = document.getElementById('toggle-open');
  const searchSvgClosed = document.getElementById('toggle-closed');
  search.addEventListener('click', (e) => {
    searchSvgOpen.classList.toggle('active');
    searchSvgClosed.classList.toggle('active');
    e.currentTarget.classList.toggle('active');
    if (search.classList.contains('active')) {
      gsap.fromTo('.search', { y: -100, opacity: 0 }, { duration: 0.6, y: 0, opacity: 1 });
    } else if ((!search.classList.contains('active'))) {
      gsap.to('.search', { duration: 0.6, y: -100, opacity: 0 });
    }
  });
})();

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3J5cHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8vIGhlYWRlcnNcbi8vIG5hdlxuLy8g0LDQvdC40LzQsNGG0LjRjyDQutC90L7Qv9C60Lgg0LHRg9GA0LPQtdGA0LBcbmNvbnN0IGJ1cmdlckFuaW0gPSAoKCkgPT4ge1xuICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyJyk7XG4gIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2J1cmdlci0tYWN0aXZlJyk7XG4gICAgaWYgKGJ1cmdlci5jbGFzc0xpc3QuY29udGFpbnMoJ2J1cmdlci0tYWN0aXZlJykpIHtcbiAgICAgIGdzYXAuZnJvbVRvKCcubmF2X19saXN0JywgeyB4OiAtNTAwLCBvcGFjaXR5OiAwIH0sIHsgZHVyYXRpb246IDAuNiwgeDogMCwgb3BhY2l0eTogMSB9KTtcbiAgICB9IGVsc2UgaWYgKCghYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucygnYnVyZ2VyLS1hY3RpdmUnKSkpIHtcbiAgICAgIGdzYXAudG8oJy5uYXZfX2xpc3QnLCB7IGR1cmF0aW9uOiAwLjYsIHg6IC01MDAsIG9wYWNpdHk6IDAgfSk7XG4gICAgfVxuICB9KTtcbn0pKCk7XG5cbi8vIC8vIHNlYXJjaFxuY29uc3Qgc2VhcmNoQW5pbSA9ICgoKSA9PiB7XG4gIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtdG9nZ2xlJyk7XG4gIGNvbnN0IHNlYXJjaFN2Z09wZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlLW9wZW4nKTtcbiAgY29uc3Qgc2VhcmNoU3ZnQ2xvc2VkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZS1jbG9zZWQnKTtcbiAgc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBzZWFyY2hTdmdPcGVuLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIHNlYXJjaFN2Z0Nsb3NlZC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgaWYgKHNlYXJjaC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICBnc2FwLmZyb21UbygnLnNlYXJjaCcsIHsgeTogLTEwMCwgb3BhY2l0eTogMCB9LCB7IGR1cmF0aW9uOiAwLjYsIHk6IDAsIG9wYWNpdHk6IDEgfSk7XG4gICAgfSBlbHNlIGlmICgoIXNlYXJjaC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSkge1xuICAgICAgZ3NhcC50bygnLnNlYXJjaCcsIHsgZHVyYXRpb246IDAuNiwgeTogLTEwMCwgb3BhY2l0eTogMCB9KTtcbiAgICB9XG4gIH0pO1xufSkoKTtcblxuLy8gc3dpcGVyLWV2ZW50c1xuY29uc3Qgc3dpcGVyRXZlbnRzID0gbmV3IFN3aXBlcignLmV2ZW50c19fc3dpcGVyJywge1xuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6ICcuZXZlbnRzX19wYWdpbmF0aW9uJyxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gIH0sXG59KTtcblxuLy8gc3dpcGVyLXByb2dlY3RzXG5jb25zdCBzd2lwZXJQcm9nZWN0cyA9IG5ldyBTd2lwZXIoJy5wcm9nZWN0c19fc3dpcGVyJywge1xuICBuYXZpZ2F0aW9uOiB7XG4gICAgcHJldkVsOiAnLnByb2dlY3RzX19idXR0b25fcHJldicsXG4gICAgbmV4dEVsOiAnLnByb2dlY3RzX19idXR0b25fbmV4dCcsXG4gIH0sXG59KTtcbi8vIGdhbGxlcnlcbi8vIHN3aXBlci1nYWxsZXJ5XG5jb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuZ2FsbGVyeV9fc3dpcGVyJywge1xuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6ICcuZ2FsbGVyeV9fcGFnaW5hdGlvbicsXG4gICAgdHlwZTogJ2ZyYWN0aW9uJyxcbiAgfSxcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogJy5nYWxsZXJ5X19idXR0b24tbmV4dCcsXG4gICAgcHJldkVsOiAnLmdhbGxlcnlfX2J1dHRvbi1wcmV2JyxcbiAgfSxcbn0pO1xuLy8gY29udGFjdHNcbi8vIGNvbnRhY3RzIGZvcm1cbmNvbnN0IHNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGU9J3RlbCddXCIpO1xuY29uc3QgaW0gPSBuZXcgSW5wdXRtYXNrKCcrNyAoOTk5KS05OTktOTktOTknKTtcbmltLm1hc2soc2VsZWN0b3IpO1xubmV3IEp1c3RWYWxpZGF0ZSgnLmZvcm0nLCB7XG4gIHJ1bGVzOiB7XG4gICAgbmFtZToge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBtaW5MZW5ndGg6IDIsXG4gICAgICBtYXhMZW5ndGg6IDI0LFxuICAgIH0sXG5cbiAgICB0ZWw6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgc3RyZW5ndGg6IHsgY3VzdG9tOiAnW15fXSQnIH0sXG4gICAgfSxcbiAgfSxcbiAgbWVzc2FnZXM6IHtcbiAgICBuYW1lOiB7XG4gICAgICByZXF1aXJlZDogJ9Ca0LDQuiDQstCw0YEg0LfQvtCy0YPRgj8nLFxuICAgICAgbWluTGVuZ3RoOiAn0JrQvtGA0L7RgtC60L7QtSDQuNC80Y8nLFxuICAgICAgbWF4TGVuZ3RoOiAn0JTQu9C40L3QvdC+0LUg0LjQvNGPJyxcbiAgICB9LFxuICAgIHRlbDogJ9Cj0LrQsNC20LjRgtC1INCy0LDRiCDRgtC10LvQtdGE0L7QvScsXG4gIH0sXG59KTtcblxuLy8gY29udGFjdHMgbWFwXG55bWFwcy5yZWFkeShpbml0KTtcbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGNvbnN0IG15TWFwID0gbmV3IHltYXBzLk1hcCgnbWFwJywge1xuICAgIGNlbnRlcjogWzU1Ljc1ODQ2OCwgMzcuNjAxMDg4XSxcbiAgICB6b29tOiAxNSxcbiAgfSk7XG4gIGNvbnN0IG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhbNTUuNzU4NDY4LCAzNy42MDEwODhdLCB7fSwge1xuICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcbiAgICBpY29uSW1hZ2VIcmVmOiAnaW1nL2dlb09iamVjdC5zdmcnLFxuICAgIGljb25JbWFnZVNpemU6IFsyMCwgMjBdLFxuICB9KTtcbiAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xufVxuIl0sImZpbGUiOiJzY3J5cHQuanMifQ==
