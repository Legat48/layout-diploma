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
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: 'row',
  },
  loop: true,
  a11y: false,
  keyboard: true,
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  pagination: {
    el: '.events__pagination',
    clickable: true,
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
// accordion
(() => {
  new Accordion('.js-accordion-container', {
    openOnInit: [0],
  });
})();
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3J5cHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8vIGhlYWRlcnNcbi8vIG5hdlxuLy8g0LDQvdC40LzQsNGG0LjRjyDQutC90L7Qv9C60Lgg0LHRg9GA0LPQtdGA0LBcbmNvbnN0IGJ1cmdlckFuaW0gPSAoKCkgPT4ge1xuICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyJyk7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYnKTtcbiAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC10b2dnbGUnKTtcbiAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnYnVyZ2VyLS1hY3RpdmUnKTtcbiAgICBpZiAoYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucygnYnVyZ2VyLS1hY3RpdmUnKSkge1xuICAgICAgc2VhcmNoLnN0eWxlLnpJbmRleCA9IDE7XG4gICAgICBuYXYuc3R5bGUuekluZGV4ID0gMjtcbiAgICAgIGdzYXAuZnJvbVRvKCcubmF2X19saXN0JywgeyB4OiAtNTAwLCBvcGFjaXR5OiAwIH0sIHsgZHVyYXRpb246IDAuNiwgeDogMCwgb3BhY2l0eTogMSB9KTtcbiAgICB9IGVsc2UgaWYgKCghYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucygnYnVyZ2VyLS1hY3RpdmUnKSkpIHtcbiAgICAgIHNlYXJjaC5zdHlsZS56SW5kZXggPSA0O1xuICAgICAgbmF2LnN0eWxlLnpJbmRleCA9IC0xO1xuICAgICAgZ3NhcC50bygnLm5hdl9fbGlzdCcsIHsgZHVyYXRpb246IDAuNiwgeDogLTUwMCwgb3BhY2l0eTogMCB9KTtcbiAgICB9XG4gIH0pO1xufSkoKTtcbi8vIC8vIHNlYXJjaFxuY29uc3Qgc2VhcmNoQW5pbSA9ICgoKSA9PiB7XG4gIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtdG9nZ2xlJyk7XG4gIGNvbnN0IHNlYXJjaFN2Z09wZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlLW9wZW4nKTtcbiAgY29uc3Qgc2VhcmNoU3ZnQ2xvc2VkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZS1jbG9zZWQnKTtcbiAgc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBzZWFyY2hTdmdPcGVuLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIHNlYXJjaFN2Z0Nsb3NlZC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgaWYgKHNlYXJjaC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICBnc2FwLmZyb21UbygnLnNlYXJjaCcsIHsgeTogLTEwMCwgb3BhY2l0eTogMCB9LCB7IGR1cmF0aW9uOiAwLjYsIHk6IDAsIG9wYWNpdHk6IDEgfSk7XG4gICAgfSBlbHNlIGlmICgoIXNlYXJjaC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSkge1xuICAgICAgZ3NhcC50bygnLnNlYXJjaCcsIHsgZHVyYXRpb246IDAuNiwgeTogLTEwMCwgb3BhY2l0eTogMCB9KTtcbiAgICB9XG4gIH0pO1xufSkoKTtcblxuLy8gZHJvcGRvd25cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXItZHJvcGRvd25fX2J0bicpLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXRoIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgICBjb25zdCBkcm9wZG93bkJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhcmdldD1cIiR7cGF0aH1cIl1gKTtcbiAgICAgIC8vINC/0LXRgNC10LLQvtGA0LDRh9C40LLQsNC10Lwg0YHRgtGA0LXQu9C+0YfQutGDINC/0YDQuCDQutC70LjQutC1XG4gICAgICBjb25zdCBpY29uID0gYnRuLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItZHJvcGRvd25fX2ljb24tc3ZnJyk7XG4gICAgICBpY29uLmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRlci1kcm9wZG93bl9faWNvbi1zdmdfYWN0aXZlJyk7XG4gICAgICAvLyDQt9Cw0LrRgNGL0LLQsNC10Lwg0LLRgdC1INGB0L/QuNGB0LrQuCDQuCDQv9C10YDQtdC60LvRjtGH0LDQtdC8INC90LDQttCw0YLRi9C5XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyLWRyb3Bkb3duX19ib3gnKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBpZiAoZHJvcGRvd25Cb3ggIT09IGVsKSB7XG4gICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZHJvcGRvd25Cb3guY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG5cbi8vIHNjcm9sbGJhclxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyLWRyb3Bkb3duX19zY3JvbGxiYXInKS5mb3JFYWNoKChlbCkgPT4ge1xuICBuZXcgU2ltcGxlQmFyKGVsLCB7XG4gICAgc2Nyb2xsYmFyTWF4U2l6ZTogNDAsXG4gIH0pO1xufSk7XG5cbi8vIHN3aXBlci1oZXJvXG5jb25zdCBzd2lwZXJIZXJvID0gbmV3IFN3aXBlcignLmhlcm9fX3N3aXBlcicsIHtcbiAgYWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxuICBsb29wOiB0cnVlLFxuICBlZmZlY3Q6ICdmYWRlJyxcbiAgc3BlZWQ6IDEwMDAwLFxuICBhdXRvcGxheToge1xuICAgIGRlbGF5OiAxMDAwMCxcbiAgfSxcbn0pO1xuXG4vLyBnYWxsZXJ5XG4vLyBzd2lwZXItZ2FsbGVyeVxuY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcignLmdhbGxlcnlfX3N3aXBlcicsIHtcbiAgc2xpZGVzUGVyVmlldzogMSxcbiAgZ3JpZDoge1xuICAgIHJvd3M6IDEsXG4gICAgZmlsbDogJ3JvdycsXG4gIH0sXG4gIHNwYWNlQmV0d2VlbjogMjAsXG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogJy5nYWxsZXJ5X19wYWdpbmF0aW9uJyxcbiAgICB0eXBlOiAnZnJhY3Rpb24nLFxuICB9LFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiAnLmdhbGxlcnlfX2J1dHRvbi1uZXh0JyxcbiAgICBwcmV2RWw6ICcuZ2FsbGVyeV9fYnV0dG9uLXByZXYnLFxuICB9LFxuXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgNTc2OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDIsXG4gICAgICBzcGFjZUJldHdlZW46IDM0LFxuICAgIH0sXG4gICAgMTAyNDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgIHNsaWRlc1Blckdyb3VwOiA2LFxuICAgICAgc3BhY2VCZXR3ZWVuOiA1MCxcbiAgICB9LFxuICB9LFxuICBhMTF5OiBmYWxzZSxcbiAga2V5Ym9hcmQ6IHRydWUsXG4gIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gIHdhdGNoU2xpZGVzVmlzaWJpbGl0eTogdHJ1ZSxcbiAgc2xpZGVWaXNpYmxlQ2xhc3M6ICdzbGlkZS12aXNpYmxlJyxcbiAgb246IHtcbiAgICBpbml0KCkge1xuICAgICAgdGhpcy5zbGlkZXMuZm9yRWFjaCgoc2xpZGUpID0+IHtcbiAgICAgICAgaWYgKCFzbGlkZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlLXZpc2libGUnKSkge1xuICAgICAgICAgIHNsaWRlLnRhYkluZGV4ID0gJy0xJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzbGlkZS50YWJJbmRleCA9ICcnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHNsaWRlQ2hhbmdlKCkge1xuICAgICAgdGhpcy5zbGlkZXMuZm9yRWFjaCgoc2xpZGUpID0+IHtcbiAgICAgICAgaWYgKCFzbGlkZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlLXZpc2libGUnKSkge1xuICAgICAgICAgIHNsaWRlLnRhYkluZGV4ID0gJy0xJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzbGlkZS50YWJJbmRleCA9ICcnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICB9LFxufSk7XG4vLyBzZWxlY3QtZ2FsbGVyeVxuY29uc3QgZXhhbXBsZVNlbGVjdCA9ICgoKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdCcpO1xuICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY2hvaWNlcyA9IG5ldyBDaG9pY2VzKGVsZW1lbnQsIHtcbiAgICAgIHNlYXJjaEVuYWJsZWQ6IGZhbHNlLFxuICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgc2hvdWxkU29ydDogZmFsc2UsXG4gICAgICBpdGVtU2VsZWN0VGV4dDogJycsXG4gICAgfSk7XG4gIH0pO1xufSkoKTtcblxuLy8gc3dpcGVyLWV2ZW50c1xuY29uc3Qgc3dpcGVyRXZlbnRzID0gbmV3IFN3aXBlcignLmV2ZW50c19fc3dpcGVyJywge1xuICBzbGlkZXNQZXJWaWV3OiAxLFxuICBncmlkOiB7XG4gICAgcm93czogMSxcbiAgICBmaWxsOiAncm93JyxcbiAgfSxcbiAgbG9vcDogdHJ1ZSxcbiAgYTExeTogZmFsc2UsXG4gIGtleWJvYXJkOiB0cnVlLFxuICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICB3YXRjaFNsaWRlc1Zpc2liaWxpdHk6IHRydWUsXG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogJy5ldmVudHNfX3BhZ2luYXRpb24nLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICA1NzY6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzbGlkZXNQZXJHcm91cDogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogMzQsXG4gICAgfSxcbiAgICAxMDI0OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDYsXG4gICAgICBzcGFjZUJldHdlZW46IDUwLFxuICAgIH0sXG4gIH0sXG59KTtcblxuLy8gc3dpcGVyLXByb2dlY3RzXG5jb25zdCBzd2lwZXJQcm9nZWN0cyA9IG5ldyBTd2lwZXIoJy5wcm9nZWN0c19fc3dpcGVyJywge1xuICBsb29wOiB0cnVlLFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgcHJldkVsOiAnLnByb2dlY3RzX19idXR0b25fcHJldicsXG4gICAgbmV4dEVsOiAnLnByb2dlY3RzX19idXR0b25fbmV4dCcsXG4gIH0sXG59KTtcblxuLy8gY2F0YWxvZ1xuLy8gdGFiXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0YWxvZy1hY2NvcmRpb25fX2xpbmsnKS5mb3JFYWNoKCh0YWJMaW5rKSA9PiB7XG4gICAgdGFiTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXRoIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0YWxvZy1hY2NvcmRpb25fX2xpbmsnKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdjYXRhbG9nLWFjY29yZGlvbl9fbGlua19hY3RpdmUnKTtcbiAgICAgIH0pO1xuICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdjYXRhbG9nLWFjY29yZGlvbl9fbGlua19hY3RpdmUnKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRhbG9nLXRhYl9faXRlbScpLmZvckVhY2goKHRhYkNvbnRlbnQpID0+IHtcbiAgICAgICAgdGFiQ29udGVudC5jbGFzc0xpc3QuYWRkKCdkZWFjdGl2YXRlJyk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhcmdldD1cIiR7cGF0aH1cIl1gKS5jbGFzc0xpc3QucmVtb3ZlKCdkZWFjdGl2YXRlJyk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4vLyBhY2NvcmRpb25cbigoKSA9PiB7XG4gIG5ldyBBY2NvcmRpb24oJy5qcy1hY2NvcmRpb24tY29udGFpbmVyJywge1xuICAgIG9wZW5PbkluaXQ6IFswXSxcbiAgfSk7XG59KSgpO1xuLy8gY29udGFjdHNcbi8vIGNvbnRhY3RzIGZvcm1cbmNvbnN0IHNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGU9J3RlbCddXCIpO1xuY29uc3QgaW0gPSBuZXcgSW5wdXRtYXNrKCcrNyAoOTk5KS05OTktOTktOTknKTtcbmltLm1hc2soc2VsZWN0b3IpO1xubmV3IEp1c3RWYWxpZGF0ZSgnLmZvcm0nLCB7XG4gIHJ1bGVzOiB7XG4gICAgbmFtZToge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBtaW5MZW5ndGg6IDIsXG4gICAgICBtYXhMZW5ndGg6IDI0LFxuICAgIH0sXG5cbiAgICB0ZWw6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgc3RyZW5ndGg6IHsgY3VzdG9tOiAnW15fXSQnIH0sXG4gICAgfSxcbiAgfSxcbiAgbWVzc2FnZXM6IHtcbiAgICBuYW1lOiB7XG4gICAgICByZXF1aXJlZDogJ9Ca0LDQuiDQstCw0YEg0LfQvtCy0YPRgj8nLFxuICAgICAgbWluTGVuZ3RoOiAn0JrQvtGA0L7RgtC60L7QtSDQuNC80Y8nLFxuICAgICAgbWF4TGVuZ3RoOiAn0JTQu9C40L3QvdC+0LUg0LjQvNGPJyxcbiAgICB9LFxuICAgIHRlbDogJ9Cj0LrQsNC20LjRgtC1INCy0LDRiCDRgtC10LvQtdGE0L7QvScsXG4gIH0sXG59KTtcblxuLy8gY29udGFjdHMgbWFwXG55bWFwcy5yZWFkeShpbml0KTtcbmZ1bmN0aW9uIGluaXQoKSB7XG4gIGNvbnN0IG15TWFwID0gbmV3IHltYXBzLk1hcCgnbWFwJywge1xuICAgIGNlbnRlcjogWzU1Ljc1ODQ2OCwgMzcuNjAxMDg4XSxcbiAgICB6b29tOiAxNSxcbiAgfSk7XG4gIGNvbnN0IG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhbNTUuNzU4NDY4LCAzNy42MDEwODhdLCB7fSwge1xuICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcbiAgICBpY29uSW1hZ2VIcmVmOiAnaW1nL2dlb09iamVjdC5zdmcnLFxuICAgIGljb25JbWFnZVNpemU6IFsyMCwgMjBdLFxuICB9KTtcbiAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xufVxuIl0sImZpbGUiOiJzY3J5cHQuanMifQ==
