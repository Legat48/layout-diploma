/* eslint-disable no-use-before-define */
/* eslint-disable no-new */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// headers
// nav
// анимация кнопки бургера
const burgerAnim = (() => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  const search = document.querySelector('#search-toggle');
  burger.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('burger--active');
    if (burger.classList.contains('burger--active')) {
      search.style.zIndex = 1;
      nav.style.zIndex = 2;
      gsap.fromTo('.nav__list', { x: -500, opacity: 0 }, { duration: 0.6, x: 0, opacity: 1 });
    } else if ((!burger.classList.contains('burger--active'))) {
      search.style.zIndex = 4;
      nav.style.zIndex = -1;
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
  loop: true,
  pagination: {
    el: '.events__pagination',
    clickable: true,
  },
});

// swiper-progects
const swiperProgects = new Swiper('.progects__swiper', {
  loop: true,
  navigation: {
    prevEl: '.progects__button_prev',
    nextEl: '.progects__button_next',
  },
});
// gallery
// swiper-gallery
const swiper = new Swiper('.gallery__swiper', {
  loop: true,
  pagination: {
    el: '.gallery__pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.gallery__button-next',
    prevEl: '.gallery__button-prev',
  },
});
// select-gallery
const exampleSelect = (() => {
  const elements = document.querySelectorAll('.select');
  elements.forEach((element) => {
    const choices = new Choices(element, {
      searchEnabled: false,
      position: 'bottom',
      shouldSort: false,
      itemSelectText: '',
    });
  });
})();

// catalog
// tab
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.catalog-accordion__link').forEach((tabLink) => {
    tabLink.addEventListener('click', (event) => {
      const { path } = event.currentTarget.dataset;
      document.querySelectorAll('.catalog-accordion__link').forEach((el) => {
        el.classList.remove('catalog-accordion__link_active');
      });
      event.currentTarget.classList.add('catalog-accordion__link_active');
      document.querySelectorAll('.catalog-tab__item').forEach((tabContent) => {
        tabContent.classList.add('deactivate');
      });
      document.querySelector(`[data-target="${path}"]`).classList.remove('deactivate');
    });
  });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3J5cHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8vIGhlYWRlcnNcbi8vIG5hdlxuLy8g0LDQvdC40LzQsNGG0LjRjyDQutC90L7Qv9C60Lgg0LHRg9GA0LPQtdGA0LBcbmNvbnN0IGJ1cmdlckFuaW0gPSAoKCkgPT4ge1xuICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyJyk7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYnKTtcbiAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC10b2dnbGUnKTtcbiAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnYnVyZ2VyLS1hY3RpdmUnKTtcbiAgICBpZiAoYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucygnYnVyZ2VyLS1hY3RpdmUnKSkge1xuICAgICAgc2VhcmNoLnN0eWxlLnpJbmRleCA9IDE7XG4gICAgICBuYXYuc3R5bGUuekluZGV4ID0gMjtcbiAgICAgIGdzYXAuZnJvbVRvKCcubmF2X19saXN0JywgeyB4OiAtNTAwLCBvcGFjaXR5OiAwIH0sIHsgZHVyYXRpb246IDAuNiwgeDogMCwgb3BhY2l0eTogMSB9KTtcbiAgICB9IGVsc2UgaWYgKCghYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucygnYnVyZ2VyLS1hY3RpdmUnKSkpIHtcbiAgICAgIHNlYXJjaC5zdHlsZS56SW5kZXggPSA0O1xuICAgICAgbmF2LnN0eWxlLnpJbmRleCA9IC0xO1xuICAgICAgZ3NhcC50bygnLm5hdl9fbGlzdCcsIHsgZHVyYXRpb246IDAuNiwgeDogLTUwMCwgb3BhY2l0eTogMCB9KTtcbiAgICB9XG4gIH0pO1xufSkoKTtcblxuLy8gLy8gc2VhcmNoXG5jb25zdCBzZWFyY2hBbmltID0gKCgpID0+IHtcbiAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC10b2dnbGUnKTtcbiAgY29uc3Qgc2VhcmNoU3ZnT3BlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUtb3BlbicpO1xuICBjb25zdCBzZWFyY2hTdmdDbG9zZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlLWNsb3NlZCcpO1xuICBzZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHNlYXJjaFN2Z09wZW4uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgc2VhcmNoU3ZnQ2xvc2VkLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICBpZiAoc2VhcmNoLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgIGdzYXAuZnJvbVRvKCcuc2VhcmNoJywgeyB5OiAtMTAwLCBvcGFjaXR5OiAwIH0sIHsgZHVyYXRpb246IDAuNiwgeTogMCwgb3BhY2l0eTogMSB9KTtcbiAgICB9IGVsc2UgaWYgKCghc2VhcmNoLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpKSB7XG4gICAgICBnc2FwLnRvKCcuc2VhcmNoJywgeyBkdXJhdGlvbjogMC42LCB5OiAtMTAwLCBvcGFjaXR5OiAwIH0pO1xuICAgIH1cbiAgfSk7XG59KSgpO1xuXG4vLyBzd2lwZXItZXZlbnRzXG5jb25zdCBzd2lwZXJFdmVudHMgPSBuZXcgU3dpcGVyKCcuZXZlbnRzX19zd2lwZXInLCB7XG4gIGxvb3A6IHRydWUsXG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogJy5ldmVudHNfX3BhZ2luYXRpb24nLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgfSxcbn0pO1xuXG4vLyBzd2lwZXItcHJvZ2VjdHNcbmNvbnN0IHN3aXBlclByb2dlY3RzID0gbmV3IFN3aXBlcignLnByb2dlY3RzX19zd2lwZXInLCB7XG4gIGxvb3A6IHRydWUsXG4gIG5hdmlnYXRpb246IHtcbiAgICBwcmV2RWw6ICcucHJvZ2VjdHNfX2J1dHRvbl9wcmV2JyxcbiAgICBuZXh0RWw6ICcucHJvZ2VjdHNfX2J1dHRvbl9uZXh0JyxcbiAgfSxcbn0pO1xuLy8gZ2FsbGVyeVxuLy8gc3dpcGVyLWdhbGxlcnlcbmNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5nYWxsZXJ5X19zd2lwZXInLCB7XG4gIGxvb3A6IHRydWUsXG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogJy5nYWxsZXJ5X19wYWdpbmF0aW9uJyxcbiAgICB0eXBlOiAnZnJhY3Rpb24nLFxuICB9LFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiAnLmdhbGxlcnlfX2J1dHRvbi1uZXh0JyxcbiAgICBwcmV2RWw6ICcuZ2FsbGVyeV9fYnV0dG9uLXByZXYnLFxuICB9LFxufSk7XG4vLyBzZWxlY3QtZ2FsbGVyeVxuY29uc3QgZXhhbXBsZVNlbGVjdCA9ICgoKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdCcpO1xuICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY2hvaWNlcyA9IG5ldyBDaG9pY2VzKGVsZW1lbnQsIHtcbiAgICAgIHNlYXJjaEVuYWJsZWQ6IGZhbHNlLFxuICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgc2hvdWxkU29ydDogZmFsc2UsXG4gICAgICBpdGVtU2VsZWN0VGV4dDogJycsXG4gICAgfSk7XG4gIH0pO1xufSkoKTtcblxuLy8gY2F0YWxvZ1xuLy8gdGFiXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0YWxvZy1hY2NvcmRpb25fX2xpbmsnKS5mb3JFYWNoKCh0YWJMaW5rKSA9PiB7XG4gICAgdGFiTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXRoIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0YWxvZy1hY2NvcmRpb25fX2xpbmsnKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdjYXRhbG9nLWFjY29yZGlvbl9fbGlua19hY3RpdmUnKTtcbiAgICAgIH0pO1xuICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdjYXRhbG9nLWFjY29yZGlvbl9fbGlua19hY3RpdmUnKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRhbG9nLXRhYl9faXRlbScpLmZvckVhY2goKHRhYkNvbnRlbnQpID0+IHtcbiAgICAgICAgdGFiQ29udGVudC5jbGFzc0xpc3QuYWRkKCdkZWFjdGl2YXRlJyk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhcmdldD1cIiR7cGF0aH1cIl1gKS5jbGFzc0xpc3QucmVtb3ZlKCdkZWFjdGl2YXRlJyk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG5cbi8vIGNvbnRhY3RzXG4vLyBjb250YWN0cyBmb3JtXG5jb25zdCBzZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPSd0ZWwnXVwiKTtcbmNvbnN0IGltID0gbmV3IElucHV0bWFzaygnKzcgKDk5OSktOTk5LTk5LTk5Jyk7XG5pbS5tYXNrKHNlbGVjdG9yKTtcbm5ldyBKdXN0VmFsaWRhdGUoJy5mb3JtJywge1xuICBydWxlczoge1xuICAgIG5hbWU6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgbWluTGVuZ3RoOiAyLFxuICAgICAgbWF4TGVuZ3RoOiAyNCxcbiAgICB9LFxuXG4gICAgdGVsOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHN0cmVuZ3RoOiB7IGN1c3RvbTogJ1teX10kJyB9LFxuICAgIH0sXG4gIH0sXG4gIG1lc3NhZ2VzOiB7XG4gICAgbmFtZToge1xuICAgICAgcmVxdWlyZWQ6ICfQmtCw0Log0LLQsNGBINC30L7QstGD0YI/JyxcbiAgICAgIG1pbkxlbmd0aDogJ9Ca0L7RgNC+0YLQutC+0LUg0LjQvNGPJyxcbiAgICAgIG1heExlbmd0aDogJ9CU0LvQuNC90L3QvtC1INC40LzRjycsXG4gICAgfSxcbiAgICB0ZWw6ICfQo9C60LDQttC40YLQtSDQstCw0Ygg0YLQtdC70LXRhNC+0L0nLFxuICB9LFxufSk7XG5cbi8vIGNvbnRhY3RzIG1hcFxueW1hcHMucmVhZHkoaW5pdCk7XG5mdW5jdGlvbiBpbml0KCkge1xuICBjb25zdCBteU1hcCA9IG5ldyB5bWFwcy5NYXAoJ21hcCcsIHtcbiAgICBjZW50ZXI6IFs1NS43NTg0NjgsIDM3LjYwMTA4OF0sXG4gICAgem9vbTogMTUsXG4gIH0pO1xuICBjb25zdCBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzU1Ljc1ODQ2OCwgMzcuNjAxMDg4XSwge30sIHtcbiAgICBpY29uTGF5b3V0OiAnZGVmYXVsdCNpbWFnZScsXG4gICAgaWNvbkltYWdlSHJlZjogJ2ltZy9nZW9PYmplY3Quc3ZnJyxcbiAgICBpY29uSW1hZ2VTaXplOiBbMjAsIDIwXSxcbiAgfSk7XG4gIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcbn1cbiJdLCJmaWxlIjoic2NyeXB0LmpzIn0=
