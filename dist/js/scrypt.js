/* eslint-disable no-use-before-define */
/* eslint-disable no-new */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// headers
// анимация nav
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.header__nav');
  const search = document.querySelector('#search-toggle');
  burger.addEventListener('click', (e) => {
    // переключение бургера
    e.currentTarget.classList.toggle('burger--active');
    // появление и уход меню навигации
    if (burger.classList.contains('burger--active')) {
      clearTimeout(setTimeout(()=>{nav.style.zIndex = -1;}, 0))
      search.style.zIndex = 1;
      nav.style.zIndex = 2;
      gsap.fromTo('.header__nav', { xPercent: -100, opacity: 0.8 }, { duration: 1, scaleX: 1, xPercent: -0, opacity: 1 });
    } else if ((!burger.classList.contains('burger--active'))) {
      search.style.zIndex = 4;
      gsap.fromTo('.header__nav', { xPercent: 0, opacity: 1 }, { duration: 1, scaleX: 0, xPercent: -100, opacity: 0.8 });
      setTimeout(()=>{nav.style.zIndex = -1;}, 600)
    }
  });
});
// search
document.addEventListener('DOMContentLoaded', () => {
  const btnToggleSearch = document.querySelector('#search-toggle');
  const btnSvgOpen = document.getElementById('toggle-open');
  const btnSvgClosed = document.getElementById('toggle-closed');
  btnToggleSearch.addEventListener('click', (e) => {
    btnSvgOpen.classList.toggle('active');
    btnSvgClosed.classList.toggle('active');
    // появление поиска
    e.currentTarget.classList.toggle('active');
    // анимация поиска
    if (btnToggleSearch.classList.contains('active')) {
      gsap.fromTo('.header__search', { scaleX: 0, xPercent: -50, opacity: 0.8 }, { duration: 0.6, scaleX: 1, xPercent: -0, opacity: 1 });
    } else if ((!btnToggleSearch.classList.contains('active'))) {
      gsap.fromTo('.header__search', { scaleX: 1, xPercent: 0, opacity: 1 }, { duration: 0.6, scaleX: 0, xPercent: -50, opacity: 0.8 });
    }
  });
});
// dropdown
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.dropdown__btn').forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const { path } = event.currentTarget.dataset;
      const dropdownBox = document.querySelector(`[data-target="${path}"]`);
      // переворачиваем стрелочку при клике
      const icon = btn.querySelector('.dropdown__icon-svg');
      // закрываем все списки и переключаем нажатый
      document.querySelectorAll('.dropdown__box').forEach((el) => {
        if (dropdownBox !== el) {
          el.classList.remove('active');
        }
      });
      document.querySelectorAll('.dropdown__icon-svg').forEach((j) => {
        if (icon !== j) {
          j.classList.remove('dropdown__icon-svg_active');
        }
      })
      icon.classList.toggle('dropdown__icon-svg_active');
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
// top-wrap-swiper
const swiperHero = new Swiper('.top-wrap__swiper', {
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
    nextEl: '.gallery__btn-next',
    prevEl: '.gallery__btn-prev',
  },
  breakpoints: {
    750: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    1480: {
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
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.select');
  elements.forEach((element) => {
    const choices = new Choices(element, {
      searchEnabled: false,
      position: 'bottom',
      shouldSort: false,
      itemSelectText: '',
    });
  });
});

// modal gallery
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.gallery__slide').forEach((modalLink) => {
    modalLink.addEventListener('click', (event) => {
      const { path } = event.currentTarget.dataset;
      const modalObg = document.querySelector(`[data-target="${path}"]`);
      const btn = modalObg.querySelector('.modal__btn');
      document.querySelectorAll('.modal').forEach((tabContent) => {
        tabContent.classList.add('deactivate');
      });
      modalObg.classList.remove('deactivate');
      // закрытие на нажатие фона
      modalObg.addEventListener('click', (e) => {
        const modalOverlay = modalObg.querySelector('.modal__overlay');
        if (e.target === modalOverlay) {
          modalObg.classList.add('deactivate');
        }
      });
      // закрытие на нажатие кнопки
      btn.addEventListener('click', () => {
        modalObg.classList.add('deactivate');
      });
      // анимация появления окна
      if (!modalObg.classList.contains('deactivate')) {
        gsap.fromTo('.modal__box', { scaleX:0.6, scaleY:0.4, opacity: 0.8 }, { duration: 0.6, scaleX:1, scaleY:1, opacity: 1 });
      }
    });
  });
});
// modal scroll
document.querySelectorAll('.modal__box').forEach((el) => {
  new SimpleBar(el, {
    scrollbarMaxSize: 40,
  });
});
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
      // анимация для появления
      gsap.fromTo('.tab__item', { opacity: 0 }, { duration: 0.8, opacity: 1 });
    });
  });
});
// accordion
document.addEventListener('DOMContentLoaded', () => {
  new Accordion('.js-accordion-container', {
    openOnInit: [0],
  });
});
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
    nextEl: '.events__btn-next',
  },
  pagination: {
    el: '.events__pagination',
    clickable: true,
  },
  breakpoints: {
    750: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 24,
    },
    1480: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 52,
    },
  },
});
// swiper-progects
const swiperProgects = new Swiper('.progects__swiper', {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: 'row',
  },
  // spaceBetween: 20,
  navigation: {
    prevEl: '.progects__btn_prev',
    nextEl: '.progects__btn_next',
    disabledClass: 'swiper-btn-disabled-light',
  },
  breakpoints: {
    750: {
      slidesPerView: 2,
      spaceBetween: 34,
    },
    769: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1480: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },

});
// tooltip
document.addEventListener('DOMContentLoaded', () => {
  tippy('.js-tooltip', {
    maxWidth: 264,
    theme: 'castom-tooltip',
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
  // отключить зум
  myMap.behaviors.disable('scrollZoom');
}
// плавный скролл
document.querySelectorAll('.js-scroll-link').forEach(link => {
  link.addEventListener('click', function(e) {
      const href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      e.preventDefault();
      window.scrollBy({
          top: elementPosition,
          behavior: 'smooth'
      });
  });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3J5cHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8vIGhlYWRlcnNcbi8vINCw0L3QuNC80LDRhtC40Y8gbmF2XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyJyk7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX25hdicpO1xuICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLXRvZ2dsZScpO1xuICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIC8vINC/0LXRgNC10LrQu9GO0YfQtdC90LjQtSDQsdGD0YDQs9C10YDQsFxuICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdidXJnZXItLWFjdGl2ZScpO1xuICAgIC8vINC/0L7Rj9Cy0LvQtdC90LjQtSDQuCDRg9GF0L7QtCDQvNC10L3RjiDQvdCw0LLQuNCz0LDRhtC40LhcbiAgICBpZiAoYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucygnYnVyZ2VyLS1hY3RpdmUnKSkge1xuICAgICAgY2xlYXJUaW1lb3V0KHNldFRpbWVvdXQoKCk9PntuYXYuc3R5bGUuekluZGV4ID0gLTE7fSwgMCkpXG4gICAgICBzZWFyY2guc3R5bGUuekluZGV4ID0gMTtcbiAgICAgIG5hdi5zdHlsZS56SW5kZXggPSAyO1xuICAgICAgZ3NhcC5mcm9tVG8oJy5oZWFkZXJfX25hdicsIHsgeFBlcmNlbnQ6IC0xMDAsIG9wYWNpdHk6IDAuOCB9LCB7IGR1cmF0aW9uOiAxLCBzY2FsZVg6IDEsIHhQZXJjZW50OiAtMCwgb3BhY2l0eTogMSB9KTtcbiAgICB9IGVsc2UgaWYgKCghYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucygnYnVyZ2VyLS1hY3RpdmUnKSkpIHtcbiAgICAgIHNlYXJjaC5zdHlsZS56SW5kZXggPSA0O1xuICAgICAgZ3NhcC5mcm9tVG8oJy5oZWFkZXJfX25hdicsIHsgeFBlcmNlbnQ6IDAsIG9wYWNpdHk6IDEgfSwgeyBkdXJhdGlvbjogMSwgc2NhbGVYOiAwLCB4UGVyY2VudDogLTEwMCwgb3BhY2l0eTogMC44IH0pO1xuICAgICAgc2V0VGltZW91dCgoKT0+e25hdi5zdHlsZS56SW5kZXggPSAtMTt9LCA2MDApXG4gICAgfVxuICB9KTtcbn0pO1xuLy8gc2VhcmNoXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBidG5Ub2dnbGVTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLXRvZ2dsZScpO1xuICBjb25zdCBidG5TdmdPcGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZS1vcGVuJyk7XG4gIGNvbnN0IGJ0blN2Z0Nsb3NlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUtY2xvc2VkJyk7XG4gIGJ0blRvZ2dsZVNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgYnRuU3ZnT3Blbi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICBidG5TdmdDbG9zZWQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgLy8g0L/QvtGP0LLQu9C10L3QuNC1INC/0L7QuNGB0LrQsFxuICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAvLyDQsNC90LjQvNCw0YbQuNGPINC/0L7QuNGB0LrQsFxuICAgIGlmIChidG5Ub2dnbGVTZWFyY2guY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgZ3NhcC5mcm9tVG8oJy5oZWFkZXJfX3NlYXJjaCcsIHsgc2NhbGVYOiAwLCB4UGVyY2VudDogLTUwLCBvcGFjaXR5OiAwLjggfSwgeyBkdXJhdGlvbjogMC42LCBzY2FsZVg6IDEsIHhQZXJjZW50OiAtMCwgb3BhY2l0eTogMSB9KTtcbiAgICB9IGVsc2UgaWYgKCghYnRuVG9nZ2xlU2VhcmNoLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpKSB7XG4gICAgICBnc2FwLmZyb21UbygnLmhlYWRlcl9fc2VhcmNoJywgeyBzY2FsZVg6IDEsIHhQZXJjZW50OiAwLCBvcGFjaXR5OiAxIH0sIHsgZHVyYXRpb246IDAuNiwgc2NhbGVYOiAwLCB4UGVyY2VudDogLTUwLCBvcGFjaXR5OiAwLjggfSk7XG4gICAgfVxuICB9KTtcbn0pO1xuLy8gZHJvcGRvd25cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bl9fYnRuJykuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IHBhdGggfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICAgIGNvbnN0IGRyb3Bkb3duQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFyZ2V0PVwiJHtwYXRofVwiXWApO1xuICAgICAgLy8g0L/QtdGA0LXQstC+0YDQsNGH0LjQstCw0LXQvCDRgdGC0YDQtdC70L7Rh9C60YMg0L/RgNC4INC60LvQuNC60LVcbiAgICAgIGNvbnN0IGljb24gPSBidG4ucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duX19pY29uLXN2ZycpO1xuICAgICAgLy8g0LfQsNC60YDRi9Cy0LDQtdC8INCy0YHQtSDRgdC/0LjRgdC60Lgg0Lgg0L/QtdGA0LXQutC70Y7Rh9Cw0LXQvCDQvdCw0LbQsNGC0YvQuVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duX19ib3gnKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBpZiAoZHJvcGRvd25Cb3ggIT09IGVsKSB7XG4gICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duX19pY29uLXN2ZycpLmZvckVhY2goKGopID0+IHtcbiAgICAgICAgaWYgKGljb24gIT09IGopIHtcbiAgICAgICAgICBqLmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3Bkb3duX19pY29uLXN2Z19hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGljb24uY2xhc3NMaXN0LnRvZ2dsZSgnZHJvcGRvd25fX2ljb24tc3ZnX2FjdGl2ZScpO1xuICAgICAgZHJvcGRvd25Cb3guY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4vLyBzY3JvbGxiYXJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bl9fc2Nyb2xsYmFyJykuZm9yRWFjaCgoZWwpID0+IHtcbiAgbmV3IFNpbXBsZUJhcihlbCwge1xuICAgIHNjcm9sbGJhck1heFNpemU6IDQwLFxuICB9KTtcbn0pO1xuLy8gdG9wLXdyYXAtc3dpcGVyXG5jb25zdCBzd2lwZXJIZXJvID0gbmV3IFN3aXBlcignLnRvcC13cmFwX19zd2lwZXInLCB7XG4gIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcbiAgbG9vcDogdHJ1ZSxcbiAgZWZmZWN0OiAnZmFkZScsXG4gIHNwZWVkOiAxMDAwMCxcbiAgYXV0b3BsYXk6IHtcbiAgICBkZWxheTogMTAwMDAsXG4gIH0sXG59KTtcbi8vIGdhbGxlcnlcbi8vIHN3aXBlci1nYWxsZXJ5XG5jb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuZ2FsbGVyeV9fc3dpcGVyJywge1xuICBzbGlkZXNQZXJWaWV3OiAxLFxuICBncmlkOiB7XG4gICAgcm93czogMSxcbiAgICBmaWxsOiAncm93JyxcbiAgfSxcbiAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiAnLmdhbGxlcnlfX3BhZ2luYXRpb24nLFxuICAgIHR5cGU6ICdmcmFjdGlvbicsXG4gIH0sXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6ICcuZ2FsbGVyeV9fYnRuLW5leHQnLFxuICAgIHByZXZFbDogJy5nYWxsZXJ5X19idG4tcHJldicsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgNzUwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDIsXG4gICAgICBzcGFjZUJldHdlZW46IDM0LFxuICAgIH0sXG4gICAgNzY5OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDIsXG4gICAgICBzcGFjZUJldHdlZW46IDM0LFxuICAgIH0sXG4gICAgMTQ4MDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgIHNsaWRlc1Blckdyb3VwOiA2LFxuICAgICAgc3BhY2VCZXR3ZWVuOiA1MCxcbiAgICB9LFxuICB9LFxuICBhMTF5OiBmYWxzZSxcbiAga2V5Ym9hcmQ6IHRydWUsXG4gIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gIHdhdGNoU2xpZGVzVmlzaWJpbGl0eTogdHJ1ZSxcbiAgc2xpZGVWaXNpYmxlQ2xhc3M6ICdzbGlkZS12aXNpYmxlJyxcbiAgb246IHtcbiAgICBpbml0KCkge1xuICAgICAgdGhpcy5zbGlkZXMuZm9yRWFjaCgoc2xpZGUpID0+IHtcbiAgICAgICAgaWYgKCFzbGlkZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlLXZpc2libGUnKSkge1xuICAgICAgICAgIHNsaWRlLnRhYkluZGV4ID0gJy0xJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzbGlkZS50YWJJbmRleCA9ICcnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHNsaWRlQ2hhbmdlKCkge1xuICAgICAgdGhpcy5zbGlkZXMuZm9yRWFjaCgoc2xpZGUpID0+IHtcbiAgICAgICAgaWYgKCFzbGlkZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlLXZpc2libGUnKSkge1xuICAgICAgICAgIHNsaWRlLnRhYkluZGV4ID0gJy0xJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzbGlkZS50YWJJbmRleCA9ICcnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICB9LFxufSk7XG4vLyBzZWxlY3QtZ2FsbGVyeVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0Jyk7XG4gIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBjaG9pY2VzID0gbmV3IENob2ljZXMoZWxlbWVudCwge1xuICAgICAgc2VhcmNoRW5hYmxlZDogZmFsc2UsXG4gICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICBzaG91bGRTb3J0OiBmYWxzZSxcbiAgICAgIGl0ZW1TZWxlY3RUZXh0OiAnJyxcbiAgICB9KTtcbiAgfSk7XG59KTtcblxuLy8gbW9kYWwgZ2FsbGVyeVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbGxlcnlfX3NsaWRlJykuZm9yRWFjaCgobW9kYWxMaW5rKSA9PiB7XG4gICAgbW9kYWxMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IHBhdGggfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICAgIGNvbnN0IG1vZGFsT2JnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFyZ2V0PVwiJHtwYXRofVwiXWApO1xuICAgICAgY29uc3QgYnRuID0gbW9kYWxPYmcucXVlcnlTZWxlY3RvcignLm1vZGFsX19idG4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbCcpLmZvckVhY2goKHRhYkNvbnRlbnQpID0+IHtcbiAgICAgICAgdGFiQ29udGVudC5jbGFzc0xpc3QuYWRkKCdkZWFjdGl2YXRlJyk7XG4gICAgICB9KTtcbiAgICAgIG1vZGFsT2JnLmNsYXNzTGlzdC5yZW1vdmUoJ2RlYWN0aXZhdGUnKTtcbiAgICAgIC8vINC30LDQutGA0YvRgtC40LUg0L3QsCDQvdCw0LbQsNGC0LjQtSDRhNC+0L3QsFxuICAgICAgbW9kYWxPYmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBtb2RhbE92ZXJsYXkgPSBtb2RhbE9iZy5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX292ZXJsYXknKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBtb2RhbE92ZXJsYXkpIHtcbiAgICAgICAgICBtb2RhbE9iZy5jbGFzc0xpc3QuYWRkKCdkZWFjdGl2YXRlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8g0LfQsNC60YDRi9GC0LjQtSDQvdCwINC90LDQttCw0YLQuNC1INC60L3QvtC/0LrQuFxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBtb2RhbE9iZy5jbGFzc0xpc3QuYWRkKCdkZWFjdGl2YXRlJyk7XG4gICAgICB9KTtcbiAgICAgIC8vINCw0L3QuNC80LDRhtC40Y8g0L/QvtGP0LLQu9C10L3QuNGPINC+0LrQvdCwXG4gICAgICBpZiAoIW1vZGFsT2JnLmNsYXNzTGlzdC5jb250YWlucygnZGVhY3RpdmF0ZScpKSB7XG4gICAgICAgIGdzYXAuZnJvbVRvKCcubW9kYWxfX2JveCcsIHsgc2NhbGVYOjAuNiwgc2NhbGVZOjAuNCwgb3BhY2l0eTogMC44IH0sIHsgZHVyYXRpb246IDAuNiwgc2NhbGVYOjEsIHNjYWxlWToxLCBvcGFjaXR5OiAxIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn0pO1xuLy8gbW9kYWwgc2Nyb2xsXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWxfX2JveCcpLmZvckVhY2goKGVsKSA9PiB7XG4gIG5ldyBTaW1wbGVCYXIoZWwsIHtcbiAgICBzY3JvbGxiYXJNYXhTaXplOiA0MCxcbiAgfSk7XG59KTtcbi8vIGNhdGFsb2dcbi8vIHRhYlxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbl9fbGluaycpLmZvckVhY2goKHRhYkxpbmspID0+IHtcbiAgICB0YWJMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IHBhdGggfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb25fX2xpbmsnKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY2NvcmRpb25fX2xpbmtfYWN0aXZlJyk7XG4gICAgICB9KTtcbiAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnYWNjb3JkaW9uX19saW5rX2FjdGl2ZScpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYl9faXRlbScpLmZvckVhY2goKHRhYkNvbnRlbnQpID0+IHtcbiAgICAgICAgdGFiQ29udGVudC5jbGFzc0xpc3QuYWRkKCdkZWFjdGl2YXRlJyk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhcmdldD1cIiR7cGF0aH1cIl1gKS5jbGFzc0xpc3QucmVtb3ZlKCdkZWFjdGl2YXRlJyk7XG4gICAgICAvLyDQsNC90LjQvNCw0YbQuNGPINC00LvRjyDQv9C+0Y/QstC70LXQvdC40Y9cbiAgICAgIGdzYXAuZnJvbVRvKCcudGFiX19pdGVtJywgeyBvcGFjaXR5OiAwIH0sIHsgZHVyYXRpb246IDAuOCwgb3BhY2l0eTogMSB9KTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbi8vIGFjY29yZGlvblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgbmV3IEFjY29yZGlvbignLmpzLWFjY29yZGlvbi1jb250YWluZXInLCB7XG4gICAgb3Blbk9uSW5pdDogWzBdLFxuICB9KTtcbn0pO1xuLy8gc3dpcGVyLWV2ZW50c1xuY29uc3Qgc3dpcGVyRXZlbnRzID0gbmV3IFN3aXBlcignLmV2ZW50c19fc3dpcGVyJywge1xuICBzbGlkZXNQZXJWaWV3OiAxLFxuICBncmlkOiB7XG4gICAgcm93czogMSxcbiAgICBmaWxsOiAncm93JyxcbiAgfSxcbiAgbG9vcDogdHJ1ZSxcbiAgYTExeTogZmFsc2UsXG4gIGtleWJvYXJkOiB0cnVlLFxuICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICB3YXRjaFNsaWRlc1Zpc2liaWxpdHk6IHRydWUsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6ICcuZXZlbnRzX19idG4tbmV4dCcsXG4gIH0sXG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogJy5ldmVudHNfX3BhZ2luYXRpb24nLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICA3NTA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzbGlkZXNQZXJHcm91cDogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogMzQsXG4gICAgfSxcbiAgICA5OTI6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICBzbGlkZXNQZXJHcm91cDogMyxcbiAgICAgIHNwYWNlQmV0d2VlbjogMjQsXG4gICAgfSxcbiAgICAxNDgwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDMsXG4gICAgICBzcGFjZUJldHdlZW46IDUyLFxuICAgIH0sXG4gIH0sXG59KTtcbi8vIHN3aXBlci1wcm9nZWN0c1xuY29uc3Qgc3dpcGVyUHJvZ2VjdHMgPSBuZXcgU3dpcGVyKCcucHJvZ2VjdHNfX3N3aXBlcicsIHtcbiAgc2xpZGVzUGVyVmlldzogMSxcbiAgZ3JpZDoge1xuICAgIHJvd3M6IDEsXG4gICAgZmlsbDogJ3JvdycsXG4gIH0sXG4gIC8vIHNwYWNlQmV0d2VlbjogMjAsXG4gIG5hdmlnYXRpb246IHtcbiAgICBwcmV2RWw6ICcucHJvZ2VjdHNfX2J0bl9wcmV2JyxcbiAgICBuZXh0RWw6ICcucHJvZ2VjdHNfX2J0bl9uZXh0JyxcbiAgICBkaXNhYmxlZENsYXNzOiAnc3dpcGVyLWJ0bi1kaXNhYmxlZC1saWdodCcsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgNzUwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAzNCxcbiAgICB9LFxuICAgIDc2OToge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogNTAsXG4gICAgfSxcbiAgICAxNDgwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgc3BhY2VCZXR3ZWVuOiA1MCxcbiAgICB9LFxuICB9LFxuXG59KTtcbi8vIHRvb2x0aXBcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIHRpcHB5KCcuanMtdG9vbHRpcCcsIHtcbiAgICBtYXhXaWR0aDogMjY0LFxuICAgIHRoZW1lOiAnY2FzdG9tLXRvb2x0aXAnLFxuICB9KTtcbn0pO1xuLy8gY29udGFjdHNcbi8vIGNvbnRhY3RzIGZvcm1cbmNvbnN0IHNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGU9J3RlbCddXCIpO1xuY29uc3QgaW0gPSBuZXcgSW5wdXRtYXNrKCcrNyAoOTk5KS05OTktOTktOTknKTtcbmltLm1hc2soc2VsZWN0b3IpO1xubmV3IEp1c3RWYWxpZGF0ZSgnLmZvcm0nLCB7XG4gIHJ1bGVzOiB7XG4gICAgbmFtZToge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBtaW5MZW5ndGg6IDIsXG4gICAgICBtYXhMZW5ndGg6IDI0LFxuICAgIH0sXG4gICAgdGVsOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHN0cmVuZ3RoOiB7IGN1c3RvbTogJ1teX10kJyB9LFxuICAgIH0sXG4gIH0sXG4gIG1lc3NhZ2VzOiB7XG4gICAgbmFtZToge1xuICAgICAgcmVxdWlyZWQ6ICfQmtCw0Log0LLQsNGBINC30L7QstGD0YI/JyxcbiAgICAgIG1pbkxlbmd0aDogJ9Ca0L7RgNC+0YLQutC+0LUg0LjQvNGPJyxcbiAgICAgIG1heExlbmd0aDogJ9CU0LvQuNC90L3QvtC1INC40LzRjycsXG4gICAgfSxcbiAgICB0ZWw6ICfQo9C60LDQttC40YLQtSDQstCw0Ygg0YLQtdC70LXRhNC+0L0nLFxuICB9LFxufSk7XG4vLyBjb250YWN0cyBtYXBcbnltYXBzLnJlYWR5KGluaXQpO1xuZnVuY3Rpb24gaW5pdCgpIHtcbiAgY29uc3QgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKCdtYXAnLCB7XG4gICAgY2VudGVyOiBbNTUuNzU4NDY4LCAzNy42MDEwODhdLFxuICAgIHpvb206IDE1LFxuICAgIGNvbnRyb2xzOiBbJ2dlb2xvY2F0aW9uQ29udHJvbCcsICd6b29tQ29udHJvbCddLFxuICB9LFxuICB7XG4gICAgc3VwcHJlc3NNYXBPcGVuQmxvY2s6IHRydWUsXG4gICAgZ2VvbG9jYXRpb25Db250cm9sU2l6ZTogXCJsYXJnZVwiLFxuICAgIGdlb2xvY2F0aW9uQ29udHJvbFBvc2l0aW9uOiAgeyB0b3A6IFwiMjAwcHhcIiwgcmlnaHQ6IFwiMjBweFwiIH0sXG4gICAgZ2VvbG9jYXRpb25Db250cm9sRmxvYXQ6ICdub25lJyxcbiAgICB6b29tQ29udHJvbFNpemU6IFwic21hbGxcIixcbiAgICB6b29tQ29udHJvbEZsb2F0OiBcIm5vbmVcIixcbiAgICB6b29tQ29udHJvbFBvc2l0aW9uOiB7IHRvcDogXCIxMjBweFwiLCByaWdodDogXCIyMHB4XCIgfVxuICB9KTtcbiAgY29uc3QgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFs1NS43NTg0NjgsIDM3LjYwMTA4OF0sIHt9LCB7XG4gICAgaWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2UnLFxuICAgIGljb25JbWFnZUhyZWY6ICdpbWcvZ2VvT2JqZWN0LnN2ZycsXG4gICAgaWNvbkltYWdlU2l6ZTogWzIwLCAyMF0sXG4gIH0pO1xuICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XG4gIC8vINC+0YLQutC70Y7Rh9C40YLRjCDQt9GD0LxcbiAgbXlNYXAuYmVoYXZpb3JzLmRpc2FibGUoJ3Njcm9sbFpvb20nKTtcbn1cbi8vINC/0LvQsNCy0L3Ri9C5INGB0LrRgNC+0LvQu1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXNjcm9sbC1saW5rJykuZm9yRWFjaChsaW5rID0+IHtcbiAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGNvbnN0IGhyZWYgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpLnN1YnN0cmluZygxKTtcbiAgICAgIGNvbnN0IHNjcm9sbFRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhyZWYpO1xuICAgICAgY29uc3QgZWxlbWVudFBvc2l0aW9uID0gc2Nyb2xsVGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHdpbmRvdy5zY3JvbGxCeSh7XG4gICAgICAgICAgdG9wOiBlbGVtZW50UG9zaXRpb24sXG4gICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICB9KTtcbiAgfSk7XG59KTtcbiJdLCJmaWxlIjoic2NyeXB0LmpzIn0=
