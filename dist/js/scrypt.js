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

// dropdown
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.header-dropdown__btn').forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const { path } = event.currentTarget.dataset;
      const dropdownBox = document.querySelector(`[data-target="${path}"]`);
      // переворачиваем стрелочку при клике
      const icon = btn.querySelector('.header-dropdown__icon-svg');
      icon.classList.toggle('header-dropdown__icon-svg_active');
      // закрываем все списки и переключаем нажатый
      document.querySelectorAll('.header-dropdown__box').forEach((el) => {
        if (dropdownBox !== el) {
          el.classList.remove('active');
        }
      });
      dropdownBox.classList.toggle('active');
    });
  });
});

// scrollbar

document.querySelectorAll('.header-dropdown__scrollbar').forEach((el) => {
  new SimpleBar(el, {
    scrollbarMaxSize: 40,
  });
});

// swiper-hero
const swiperHero = new Swiper('.hero__swiper', {
  allowTouchMove: false,
  loop: true,
  effect: 'fade',
  speed: 10000,
  autoplay: {
    delay: 10000,
  },
});

// gallery
// swiper-gallery
const swiper = new Swiper('.gallery__swiper', {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: 'row',
  },
  spaceBetween: 20,
  pagination: {
    el: '.gallery__pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.gallery__button-next',
    prevEl: '.gallery__button-prev',
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 6,
      spaceBetween: 50,
    },
  },
  a11y: false,
  keyboard: true,
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: 'slide-visible',
  on: {
    init() {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    },
    slideChange() {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    },
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3J5cHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8vIGhlYWRlcnNcbi8vIG5hdlxuLy8g0LDQvdC40LzQsNGG0LjRjyDQutC90L7Qv9C60Lgg0LHRg9GA0LPQtdGA0LBcbmNvbnN0IGJ1cmdlckFuaW0gPSAoKCkgPT4ge1xuICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyJyk7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYnKTtcbiAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC10b2dnbGUnKTtcbiAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnYnVyZ2VyLS1hY3RpdmUnKTtcbiAgICBpZiAoYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucygnYnVyZ2VyLS1hY3RpdmUnKSkge1xuICAgICAgc2VhcmNoLnN0eWxlLnpJbmRleCA9IDE7XG4gICAgICBuYXYuc3R5bGUuekluZGV4ID0gMjtcbiAgICAgIGdzYXAuZnJvbVRvKCcubmF2X19saXN0JywgeyB4OiAtNTAwLCBvcGFjaXR5OiAwIH0sIHsgZHVyYXRpb246IDAuNiwgeDogMCwgb3BhY2l0eTogMSB9KTtcbiAgICB9IGVsc2UgaWYgKCghYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucygnYnVyZ2VyLS1hY3RpdmUnKSkpIHtcbiAgICAgIHNlYXJjaC5zdHlsZS56SW5kZXggPSA0O1xuICAgICAgbmF2LnN0eWxlLnpJbmRleCA9IC0xO1xuICAgICAgZ3NhcC50bygnLm5hdl9fbGlzdCcsIHsgZHVyYXRpb246IDAuNiwgeDogLTUwMCwgb3BhY2l0eTogMCB9KTtcbiAgICB9XG4gIH0pO1xufSkoKTtcblxuLy8gLy8gc2VhcmNoXG5jb25zdCBzZWFyY2hBbmltID0gKCgpID0+IHtcbiAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC10b2dnbGUnKTtcbiAgY29uc3Qgc2VhcmNoU3ZnT3BlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUtb3BlbicpO1xuICBjb25zdCBzZWFyY2hTdmdDbG9zZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlLWNsb3NlZCcpO1xuICBzZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHNlYXJjaFN2Z09wZW4uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgc2VhcmNoU3ZnQ2xvc2VkLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICBpZiAoc2VhcmNoLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgIGdzYXAuZnJvbVRvKCcuc2VhcmNoJywgeyB5OiAtMTAwLCBvcGFjaXR5OiAwIH0sIHsgZHVyYXRpb246IDAuNiwgeTogMCwgb3BhY2l0eTogMSB9KTtcbiAgICB9IGVsc2UgaWYgKCghc2VhcmNoLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpKSB7XG4gICAgICBnc2FwLnRvKCcuc2VhcmNoJywgeyBkdXJhdGlvbjogMC42LCB5OiAtMTAwLCBvcGFjaXR5OiAwIH0pO1xuICAgIH1cbiAgfSk7XG59KSgpO1xuXG4vLyBkcm9wZG93blxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlci1kcm9wZG93bl9fYnRuJykuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IHBhdGggfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICAgIGNvbnN0IGRyb3Bkb3duQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFyZ2V0PVwiJHtwYXRofVwiXWApO1xuICAgICAgLy8g0L/QtdGA0LXQstC+0YDQsNGH0LjQstCw0LXQvCDRgdGC0YDQtdC70L7Rh9C60YMg0L/RgNC4INC60LvQuNC60LVcbiAgICAgIGNvbnN0IGljb24gPSBidG4ucXVlcnlTZWxlY3RvcignLmhlYWRlci1kcm9wZG93bl9faWNvbi1zdmcnKTtcbiAgICAgIGljb24uY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyLWRyb3Bkb3duX19pY29uLXN2Z19hY3RpdmUnKTtcbiAgICAgIC8vINC30LDQutGA0YvQstCw0LXQvCDQstGB0LUg0YHQv9C40YHQutC4INC4INC/0LXRgNC10LrQu9GO0YfQsNC10Lwg0L3QsNC20LDRgtGL0LlcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXItZHJvcGRvd25fX2JveCcpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGlmIChkcm9wZG93bkJveCAhPT0gZWwpIHtcbiAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBkcm9wZG93bkJveC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICB9KTtcbiAgfSk7XG59KTtcblxuLy8gc2Nyb2xsYmFyXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXItZHJvcGRvd25fX3Njcm9sbGJhcicpLmZvckVhY2goKGVsKSA9PiB7XG4gIG5ldyBTaW1wbGVCYXIoZWwsIHtcbiAgICBzY3JvbGxiYXJNYXhTaXplOiA0MCxcbiAgfSk7XG59KTtcblxuLy8gc3dpcGVyLWhlcm9cbmNvbnN0IHN3aXBlckhlcm8gPSBuZXcgU3dpcGVyKCcuaGVyb19fc3dpcGVyJywge1xuICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXG4gIGxvb3A6IHRydWUsXG4gIGVmZmVjdDogJ2ZhZGUnLFxuICBzcGVlZDogMTAwMDAsXG4gIGF1dG9wbGF5OiB7XG4gICAgZGVsYXk6IDEwMDAwLFxuICB9LFxufSk7XG5cbi8vIGdhbGxlcnlcbi8vIHN3aXBlci1nYWxsZXJ5XG5jb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuZ2FsbGVyeV9fc3dpcGVyJywge1xuICBzbGlkZXNQZXJWaWV3OiAxLFxuICBncmlkOiB7XG4gICAgcm93czogMSxcbiAgICBmaWxsOiAncm93JyxcbiAgfSxcbiAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiAnLmdhbGxlcnlfX3BhZ2luYXRpb24nLFxuICAgIHR5cGU6ICdmcmFjdGlvbicsXG4gIH0sXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6ICcuZ2FsbGVyeV9fYnV0dG9uLW5leHQnLFxuICAgIHByZXZFbDogJy5nYWxsZXJ5X19idXR0b24tcHJldicsXG4gIH0sXG5cbiAgYnJlYWtwb2ludHM6IHtcbiAgICA1NzY6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzbGlkZXNQZXJHcm91cDogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogMzQsXG4gICAgfSxcbiAgICAxMDI0OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDYsXG4gICAgICBzcGFjZUJldHdlZW46IDUwLFxuICAgIH0sXG4gIH0sXG4gIGExMXk6IGZhbHNlLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgd2F0Y2hTbGlkZXNWaXNpYmlsaXR5OiB0cnVlLFxuICBzbGlkZVZpc2libGVDbGFzczogJ3NsaWRlLXZpc2libGUnLFxuICBvbjoge1xuICAgIGluaXQoKSB7XG4gICAgICB0aGlzLnNsaWRlcy5mb3JFYWNoKChzbGlkZSkgPT4ge1xuICAgICAgICBpZiAoIXNsaWRlLmNsYXNzTGlzdC5jb250YWlucygnc2xpZGUtdmlzaWJsZScpKSB7XG4gICAgICAgICAgc2xpZGUudGFiSW5kZXggPSAnLTEnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNsaWRlLnRhYkluZGV4ID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc2xpZGVDaGFuZ2UoKSB7XG4gICAgICB0aGlzLnNsaWRlcy5mb3JFYWNoKChzbGlkZSkgPT4ge1xuICAgICAgICBpZiAoIXNsaWRlLmNsYXNzTGlzdC5jb250YWlucygnc2xpZGUtdmlzaWJsZScpKSB7XG4gICAgICAgICAgc2xpZGUudGFiSW5kZXggPSAnLTEnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNsaWRlLnRhYkluZGV4ID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gIH0sXG59KTtcbi8vIHNlbGVjdC1nYWxsZXJ5XG5jb25zdCBleGFtcGxlU2VsZWN0ID0gKCgpID0+IHtcbiAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0Jyk7XG4gIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBjaG9pY2VzID0gbmV3IENob2ljZXMoZWxlbWVudCwge1xuICAgICAgc2VhcmNoRW5hYmxlZDogZmFsc2UsXG4gICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICBzaG91bGRTb3J0OiBmYWxzZSxcbiAgICAgIGl0ZW1TZWxlY3RUZXh0OiAnJyxcbiAgICB9KTtcbiAgfSk7XG59KSgpO1xuXG4vLyBzd2lwZXItZXZlbnRzXG5jb25zdCBzd2lwZXJFdmVudHMgPSBuZXcgU3dpcGVyKCcuZXZlbnRzX19zd2lwZXInLCB7XG4gIGxvb3A6IHRydWUsXG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogJy5ldmVudHNfX3BhZ2luYXRpb24nLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgfSxcbn0pO1xuXG4vLyBzd2lwZXItcHJvZ2VjdHNcbmNvbnN0IHN3aXBlclByb2dlY3RzID0gbmV3IFN3aXBlcignLnByb2dlY3RzX19zd2lwZXInLCB7XG4gIGxvb3A6IHRydWUsXG4gIG5hdmlnYXRpb246IHtcbiAgICBwcmV2RWw6ICcucHJvZ2VjdHNfX2J1dHRvbl9wcmV2JyxcbiAgICBuZXh0RWw6ICcucHJvZ2VjdHNfX2J1dHRvbl9uZXh0JyxcbiAgfSxcbn0pO1xuXG4vLyBjYXRhbG9nXG4vLyB0YWJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRhbG9nLWFjY29yZGlvbl9fbGluaycpLmZvckVhY2goKHRhYkxpbmspID0+IHtcbiAgICB0YWJMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IHBhdGggfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRhbG9nLWFjY29yZGlvbl9fbGluaycpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2NhdGFsb2ctYWNjb3JkaW9uX19saW5rX2FjdGl2ZScpO1xuICAgICAgfSk7XG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2NhdGFsb2ctYWNjb3JkaW9uX19saW5rX2FjdGl2ZScpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGFsb2ctdGFiX19pdGVtJykuZm9yRWFjaCgodGFiQ29udGVudCkgPT4ge1xuICAgICAgICB0YWJDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2RlYWN0aXZhdGUnKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFyZ2V0PVwiJHtwYXRofVwiXWApLmNsYXNzTGlzdC5yZW1vdmUoJ2RlYWN0aXZhdGUnKTtcbiAgICB9KTtcbiAgfSk7XG59KTtcblxuLy8gY29udGFjdHNcbi8vIGNvbnRhY3RzIGZvcm1cbmNvbnN0IHNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGU9J3RlbCddXCIpO1xuY29uc3QgaW0gPSBuZXcgSW5wdXRtYXNrKCcrNyAoOTk5KS05OTktOTktOTknKTtcbmltLm1hc2soc2VsZWN0b3IpO1xubmV3IEp1c3RWYWxpZGF0ZSgnLmZvcm0nLCB7XG4gIHJ1bGVzOiB7XG4gICAgbmFtZToge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBtaW5MZW5ndGg6IDIsXG4gICAgICBtYXhMZW5ndGg6IDI0LFxuICAgIH0sXG5cbiAgICB0ZWw6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgc3RyZW5ndGg6IHsgY3VzdG9tOiAnW15fXSQnIH0sXG4gICAgfSxcbiAgfSxcbiAgbWVzc2FnZXM6IHtcbiAgICBuYW1lOiB7XG4gICAgICByZXF1aXJlZDogJ9Ca0LDQuiDQstCw0YEg0LfQvtCy0YPRgj8nLFxuICAgICAgbWluTGVuZ3RoOiAn0JrQvtGA0L7RgtC60L7QtSDQuNC80Y8nLFxuICAgICAgbWF4TGVuZ3RoOiAn0JTQu9C40L3QvdC+0LUg0LjQvNGPJyxcbiAgICB9LFxuICAgIHRlbDogJ9Cj0LrQsNC20LjRgtC1INCy0LDRiCDRgtC10LvQtdGE0L7QvScsXG4gIH0sXG59KTtcblxuLy8gY29udGFjdHMgbWFwXG55bWFwcy5yZWFkeShpbml0KTtcbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGNvbnN0IG15TWFwID0gbmV3IHltYXBzLk1hcCgnbWFwJywge1xuICAgIGNlbnRlcjogWzU1Ljc1ODQ2OCwgMzcuNjAxMDg4XSxcbiAgICB6b29tOiAxNSxcbiAgfSk7XG4gIGNvbnN0IG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhbNTUuNzU4NDY4LCAzNy42MDEwODhdLCB7fSwge1xuICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcbiAgICBpY29uSW1hZ2VIcmVmOiAnaW1nL2dlb09iamVjdC5zdmcnLFxuICAgIGljb25JbWFnZVNpemU6IFsyMCwgMjBdLFxuICB9KTtcbiAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xufVxuIl0sImZpbGUiOiJzY3J5cHQuanMifQ==
