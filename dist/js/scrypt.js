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
      clearTimeout(setTimeout(()=>{nav.style.zIndex = -1;}, 0))
      search.style.zIndex = 1;
      nav.style.zIndex = 2;
      gsap.fromTo('.nav__box', { x: -1000, opacity: 0 }, { duration: 0.6, x: 0, opacity: 1 });
    } else if ((!burger.classList.contains('burger--active'))) {
      search.style.zIndex = 4;
      gsap.fromTo('.nav__box', { x: 0, opacity: 1 }, { duration: 0.6, x: -1000 });
      setTimeout(()=>{nav.style.zIndex = -1;}, 300)
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
  document.querySelectorAll('.dropdown__btn').forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const { path } = event.currentTarget.dataset;
      const dropdownBox = document.querySelector(`[data-target="${path}"]`);
      // переворачиваем стрелочку при клике
      const icon = btn.querySelector('.dropdown__icon-svg');
      icon.classList.toggle('dropdown__icon-svg_active');
      // закрываем все списки и переключаем нажатый
      document.querySelectorAll('.dropdown__box').forEach((el) => {
        if (dropdownBox !== el) {
          el.classList.remove('active');
        }
      });
      dropdownBox.classList.toggle('active');
    });
  });
});

// scrollbar

document.querySelectorAll('.dropdown__scrollbar').forEach((el) => {
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

// catalog
// tab
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.accordion__link').forEach((tabLink) => {
    tabLink.addEventListener('click', (event) => {
      const { path } = event.currentTarget.dataset;
      document.querySelectorAll('.accordion__link').forEach((el) => {
        el.classList.remove('accordion__link_active');
      });
      event.currentTarget.classList.add('accordion__link_active');
      document.querySelectorAll('.tab__item').forEach((tabContent) => {
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
  navigation: {
    nextEl: '.events__button-next',
  },
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
    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
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

// tooltip

(() => {
  tippy('.js-tooltip', {
    maxWidth: 264,
    theme: 'castom-tooltip',
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
    controls: ['geolocationControl', 'zoomControl'],
  },
  {
    suppressMapOpenBlock: true,
    geolocationControlSize: "large",
    geolocationControlPosition:  { top: "200px", right: "20px" },
    geolocationControlFloat: 'none',
    zoomControlSize: "small",
    zoomControlFloat: "none",
    zoomControlPosition: { top: "120px", right: "20px" }
  });
  const myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/geoObject.svg',
    iconImageSize: [20, 20],
  });
  myMap.geoObjects.add(myPlacemark);
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3J5cHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8vIGhlYWRlcnNcbi8vIG5hdlxuLy8g0LDQvdC40LzQsNGG0LjRjyDQutC90L7Qv9C60Lgg0LHRg9GA0LPQtdGA0LBcbmNvbnN0IGJ1cmdlckFuaW0gPSAoKCkgPT4ge1xuICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyJyk7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYnKTtcbiAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC10b2dnbGUnKTtcbiAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnYnVyZ2VyLS1hY3RpdmUnKTtcbiAgICBpZiAoYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucygnYnVyZ2VyLS1hY3RpdmUnKSkge1xuICAgICAgY2xlYXJUaW1lb3V0KHNldFRpbWVvdXQoKCk9PntuYXYuc3R5bGUuekluZGV4ID0gLTE7fSwgMCkpXG4gICAgICBzZWFyY2guc3R5bGUuekluZGV4ID0gMTtcbiAgICAgIG5hdi5zdHlsZS56SW5kZXggPSAyO1xuICAgICAgZ3NhcC5mcm9tVG8oJy5uYXZfX2JveCcsIHsgeDogLTEwMDAsIG9wYWNpdHk6IDAgfSwgeyBkdXJhdGlvbjogMC42LCB4OiAwLCBvcGFjaXR5OiAxIH0pO1xuICAgIH0gZWxzZSBpZiAoKCFidXJnZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdidXJnZXItLWFjdGl2ZScpKSkge1xuICAgICAgc2VhcmNoLnN0eWxlLnpJbmRleCA9IDQ7XG4gICAgICBnc2FwLmZyb21UbygnLm5hdl9fYm94JywgeyB4OiAwLCBvcGFjaXR5OiAxIH0sIHsgZHVyYXRpb246IDAuNiwgeDogLTEwMDAgfSk7XG4gICAgICBzZXRUaW1lb3V0KCgpPT57bmF2LnN0eWxlLnpJbmRleCA9IC0xO30sIDMwMClcbiAgICB9XG4gIH0pO1xufSkoKTtcbi8vIC8vIHNlYXJjaFxuY29uc3Qgc2VhcmNoQW5pbSA9ICgoKSA9PiB7XG4gIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtdG9nZ2xlJyk7XG4gIGNvbnN0IHNlYXJjaFN2Z09wZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlLW9wZW4nKTtcbiAgY29uc3Qgc2VhcmNoU3ZnQ2xvc2VkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZS1jbG9zZWQnKTtcbiAgc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBzZWFyY2hTdmdPcGVuLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIHNlYXJjaFN2Z0Nsb3NlZC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgaWYgKHNlYXJjaC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICBnc2FwLmZyb21UbygnLnNlYXJjaCcsIHsgeTogLTEwMCwgb3BhY2l0eTogMCB9LCB7IGR1cmF0aW9uOiAwLjYsIHk6IDAsIG9wYWNpdHk6IDEgfSk7XG4gICAgfSBlbHNlIGlmICgoIXNlYXJjaC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSkge1xuICAgICAgZ3NhcC50bygnLnNlYXJjaCcsIHsgZHVyYXRpb246IDAuNiwgeTogLTEwMCwgb3BhY2l0eTogMCB9KTtcbiAgICB9XG4gIH0pO1xufSkoKTtcblxuLy8gZHJvcGRvd25cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bl9fYnRuJykuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IHBhdGggfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICAgIGNvbnN0IGRyb3Bkb3duQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFyZ2V0PVwiJHtwYXRofVwiXWApO1xuICAgICAgLy8g0L/QtdGA0LXQstC+0YDQsNGH0LjQstCw0LXQvCDRgdGC0YDQtdC70L7Rh9C60YMg0L/RgNC4INC60LvQuNC60LVcbiAgICAgIGNvbnN0IGljb24gPSBidG4ucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duX19pY29uLXN2ZycpO1xuICAgICAgaWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdkcm9wZG93bl9faWNvbi1zdmdfYWN0aXZlJyk7XG4gICAgICAvLyDQt9Cw0LrRgNGL0LLQsNC10Lwg0LLRgdC1INGB0L/QuNGB0LrQuCDQuCDQv9C10YDQtdC60LvRjtGH0LDQtdC8INC90LDQttCw0YLRi9C5XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd25fX2JveCcpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGlmIChkcm9wZG93bkJveCAhPT0gZWwpIHtcbiAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBkcm9wZG93bkJveC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICB9KTtcbiAgfSk7XG59KTtcblxuLy8gc2Nyb2xsYmFyXG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bl9fc2Nyb2xsYmFyJykuZm9yRWFjaCgoZWwpID0+IHtcbiAgbmV3IFNpbXBsZUJhcihlbCwge1xuICAgIHNjcm9sbGJhck1heFNpemU6IDQwLFxuICB9KTtcbn0pO1xuXG4vLyBzd2lwZXItaGVyb1xuY29uc3Qgc3dpcGVySGVybyA9IG5ldyBTd2lwZXIoJy5oZXJvX19zd2lwZXInLCB7XG4gIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcbiAgbG9vcDogdHJ1ZSxcbiAgZWZmZWN0OiAnZmFkZScsXG4gIHNwZWVkOiAxMDAwMCxcbiAgYXV0b3BsYXk6IHtcbiAgICBkZWxheTogMTAwMDAsXG4gIH0sXG59KTtcblxuLy8gZ2FsbGVyeVxuLy8gc3dpcGVyLWdhbGxlcnlcbmNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5nYWxsZXJ5X19zd2lwZXInLCB7XG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIGdyaWQ6IHtcbiAgICByb3dzOiAxLFxuICAgIGZpbGw6ICdyb3cnLFxuICB9LFxuICBzcGFjZUJldHdlZW46IDIwLFxuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6ICcuZ2FsbGVyeV9fcGFnaW5hdGlvbicsXG4gICAgdHlwZTogJ2ZyYWN0aW9uJyxcbiAgfSxcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogJy5nYWxsZXJ5X19idXR0b24tbmV4dCcsXG4gICAgcHJldkVsOiAnLmdhbGxlcnlfX2J1dHRvbi1wcmV2JyxcbiAgfSxcblxuICBicmVha3BvaW50czoge1xuICAgIDU3Njoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIHNsaWRlc1Blckdyb3VwOiAyLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAzNCxcbiAgICB9LFxuICAgIDEwMjQ6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICBzbGlkZXNQZXJHcm91cDogNixcbiAgICAgIHNwYWNlQmV0d2VlbjogNTAsXG4gICAgfSxcbiAgfSxcbiAgYTExeTogZmFsc2UsXG4gIGtleWJvYXJkOiB0cnVlLFxuICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICB3YXRjaFNsaWRlc1Zpc2liaWxpdHk6IHRydWUsXG4gIHNsaWRlVmlzaWJsZUNsYXNzOiAnc2xpZGUtdmlzaWJsZScsXG4gIG9uOiB7XG4gICAgaW5pdCgpIHtcbiAgICAgIHRoaXMuc2xpZGVzLmZvckVhY2goKHNsaWRlKSA9PiB7XG4gICAgICAgIGlmICghc2xpZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZS12aXNpYmxlJykpIHtcbiAgICAgICAgICBzbGlkZS50YWJJbmRleCA9ICctMSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2xpZGUudGFiSW5kZXggPSAnJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBzbGlkZUNoYW5nZSgpIHtcbiAgICAgIHRoaXMuc2xpZGVzLmZvckVhY2goKHNsaWRlKSA9PiB7XG4gICAgICAgIGlmICghc2xpZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZS12aXNpYmxlJykpIHtcbiAgICAgICAgICBzbGlkZS50YWJJbmRleCA9ICctMSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2xpZGUudGFiSW5kZXggPSAnJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgfSxcbn0pO1xuLy8gc2VsZWN0LWdhbGxlcnlcbmNvbnN0IGV4YW1wbGVTZWxlY3QgPSAoKCkgPT4ge1xuICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3QnKTtcbiAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGNob2ljZXMgPSBuZXcgQ2hvaWNlcyhlbGVtZW50LCB7XG4gICAgICBzZWFyY2hFbmFibGVkOiBmYWxzZSxcbiAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgIHNob3VsZFNvcnQ6IGZhbHNlLFxuICAgICAgaXRlbVNlbGVjdFRleHQ6ICcnLFxuICAgIH0pO1xuICB9KTtcbn0pKCk7XG5cbi8vIGNhdGFsb2dcbi8vIHRhYlxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbl9fbGluaycpLmZvckVhY2goKHRhYkxpbmspID0+IHtcbiAgICB0YWJMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IHBhdGggfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb25fX2xpbmsnKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY2NvcmRpb25fX2xpbmtfYWN0aXZlJyk7XG4gICAgICB9KTtcbiAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnYWNjb3JkaW9uX19saW5rX2FjdGl2ZScpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYl9faXRlbScpLmZvckVhY2goKHRhYkNvbnRlbnQpID0+IHtcbiAgICAgICAgdGFiQ29udGVudC5jbGFzc0xpc3QuYWRkKCdkZWFjdGl2YXRlJyk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhcmdldD1cIiR7cGF0aH1cIl1gKS5jbGFzc0xpc3QucmVtb3ZlKCdkZWFjdGl2YXRlJyk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4vLyBhY2NvcmRpb25cbigoKSA9PiB7XG4gIG5ldyBBY2NvcmRpb24oJy5qcy1hY2NvcmRpb24tY29udGFpbmVyJywge1xuICAgIG9wZW5PbkluaXQ6IFswXSxcbiAgfSk7XG59KSgpO1xuXG4vLyBzd2lwZXItZXZlbnRzXG5jb25zdCBzd2lwZXJFdmVudHMgPSBuZXcgU3dpcGVyKCcuZXZlbnRzX19zd2lwZXInLCB7XG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIGdyaWQ6IHtcbiAgICByb3dzOiAxLFxuICAgIGZpbGw6ICdyb3cnLFxuICB9LFxuICBsb29wOiB0cnVlLFxuICBhMTF5OiBmYWxzZSxcbiAga2V5Ym9hcmQ6IHRydWUsXG4gIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gIHdhdGNoU2xpZGVzVmlzaWJpbGl0eTogdHJ1ZSxcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogJy5ldmVudHNfX2J1dHRvbi1uZXh0JyxcbiAgfSxcbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiAnLmV2ZW50c19fcGFnaW5hdGlvbicsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIDU3Njoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIHNsaWRlc1Blckdyb3VwOiAyLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAzNCxcbiAgICB9LFxuICAgIDk5Mjoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgIHNsaWRlc1Blckdyb3VwOiAzLFxuICAgICAgc3BhY2VCZXR3ZWVuOiA1MCxcbiAgICB9LFxuICB9LFxufSk7XG5cbi8vIHN3aXBlci1wcm9nZWN0c1xuY29uc3Qgc3dpcGVyUHJvZ2VjdHMgPSBuZXcgU3dpcGVyKCcucHJvZ2VjdHNfX3N3aXBlcicsIHtcbiAgbG9vcDogdHJ1ZSxcbiAgbmF2aWdhdGlvbjoge1xuICAgIHByZXZFbDogJy5wcm9nZWN0c19fYnV0dG9uX3ByZXYnLFxuICAgIG5leHRFbDogJy5wcm9nZWN0c19fYnV0dG9uX25leHQnLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIDU3Njoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIHNsaWRlc1Blckdyb3VwOiAyLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAzNCxcbiAgICB9LFxuICAgIDEwMjQ6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICBzbGlkZXNQZXJHcm91cDogNixcbiAgICAgIHNwYWNlQmV0d2VlbjogNTAsXG4gICAgfSxcbiAgfSxcbiAgYTExeTogZmFsc2UsXG4gIGtleWJvYXJkOiB0cnVlLFxuICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICB3YXRjaFNsaWRlc1Zpc2liaWxpdHk6IHRydWUsXG4gIHNsaWRlVmlzaWJsZUNsYXNzOiAnc2xpZGUtdmlzaWJsZScsXG4gIG9uOiB7XG4gICAgaW5pdCgpIHtcbiAgICAgIHRoaXMuc2xpZGVzLmZvckVhY2goKHNsaWRlKSA9PiB7XG4gICAgICAgIGlmICghc2xpZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZS12aXNpYmxlJykpIHtcbiAgICAgICAgICBzbGlkZS50YWJJbmRleCA9ICctMSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2xpZGUudGFiSW5kZXggPSAnJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBzbGlkZUNoYW5nZSgpIHtcbiAgICAgIHRoaXMuc2xpZGVzLmZvckVhY2goKHNsaWRlKSA9PiB7XG4gICAgICAgIGlmICghc2xpZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZS12aXNpYmxlJykpIHtcbiAgICAgICAgICBzbGlkZS50YWJJbmRleCA9ICctMSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2xpZGUudGFiSW5kZXggPSAnJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgfSxcbn0pO1xuXG4vLyB0b29sdGlwXG5cbigoKSA9PiB7XG4gIHRpcHB5KCcuanMtdG9vbHRpcCcsIHtcbiAgICBtYXhXaWR0aDogMjY0LFxuICAgIHRoZW1lOiAnY2FzdG9tLXRvb2x0aXAnLFxuICB9KTtcbn0pKCk7XG5cbi8vIGNvbnRhY3RzXG4vLyBjb250YWN0cyBmb3JtXG5jb25zdCBzZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPSd0ZWwnXVwiKTtcbmNvbnN0IGltID0gbmV3IElucHV0bWFzaygnKzcgKDk5OSktOTk5LTk5LTk5Jyk7XG5pbS5tYXNrKHNlbGVjdG9yKTtcbm5ldyBKdXN0VmFsaWRhdGUoJy5mb3JtJywge1xuICBydWxlczoge1xuICAgIG5hbWU6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgbWluTGVuZ3RoOiAyLFxuICAgICAgbWF4TGVuZ3RoOiAyNCxcbiAgICB9LFxuXG4gICAgdGVsOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHN0cmVuZ3RoOiB7IGN1c3RvbTogJ1teX10kJyB9LFxuICAgIH0sXG4gIH0sXG4gIG1lc3NhZ2VzOiB7XG4gICAgbmFtZToge1xuICAgICAgcmVxdWlyZWQ6ICfQmtCw0Log0LLQsNGBINC30L7QstGD0YI/JyxcbiAgICAgIG1pbkxlbmd0aDogJ9Ca0L7RgNC+0YLQutC+0LUg0LjQvNGPJyxcbiAgICAgIG1heExlbmd0aDogJ9CU0LvQuNC90L3QvtC1INC40LzRjycsXG4gICAgfSxcbiAgICB0ZWw6ICfQo9C60LDQttC40YLQtSDQstCw0Ygg0YLQtdC70LXRhNC+0L0nLFxuICB9LFxufSk7XG5cbi8vIGNvbnRhY3RzIG1hcFxueW1hcHMucmVhZHkoaW5pdCk7XG5mdW5jdGlvbiBpbml0KCkge1xuICBjb25zdCBteU1hcCA9IG5ldyB5bWFwcy5NYXAoJ21hcCcsIHtcbiAgICBjZW50ZXI6IFs1NS43NTg0NjgsIDM3LjYwMTA4OF0sXG4gICAgem9vbTogMTUsXG4gICAgY29udHJvbHM6IFsnZ2VvbG9jYXRpb25Db250cm9sJywgJ3pvb21Db250cm9sJ10sXG4gIH0sXG4gIHtcbiAgICBzdXBwcmVzc01hcE9wZW5CbG9jazogdHJ1ZSxcbiAgICBnZW9sb2NhdGlvbkNvbnRyb2xTaXplOiBcImxhcmdlXCIsXG4gICAgZ2VvbG9jYXRpb25Db250cm9sUG9zaXRpb246ICB7IHRvcDogXCIyMDBweFwiLCByaWdodDogXCIyMHB4XCIgfSxcbiAgICBnZW9sb2NhdGlvbkNvbnRyb2xGbG9hdDogJ25vbmUnLFxuICAgIHpvb21Db250cm9sU2l6ZTogXCJzbWFsbFwiLFxuICAgIHpvb21Db250cm9sRmxvYXQ6IFwibm9uZVwiLFxuICAgIHpvb21Db250cm9sUG9zaXRpb246IHsgdG9wOiBcIjEyMHB4XCIsIHJpZ2h0OiBcIjIwcHhcIiB9XG4gIH0pO1xuICBjb25zdCBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzU1Ljc1ODQ2OCwgMzcuNjAxMDg4XSwge30sIHtcbiAgICBpY29uTGF5b3V0OiAnZGVmYXVsdCNpbWFnZScsXG4gICAgaWNvbkltYWdlSHJlZjogJ2ltZy9nZW9PYmplY3Quc3ZnJyxcbiAgICBpY29uSW1hZ2VTaXplOiBbMjAsIDIwXSxcbiAgfSk7XG4gIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcbn1cbiJdLCJmaWxlIjoic2NyeXB0LmpzIn0=
