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
    1430: {
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
    1430: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 52,
    },
  },
});
// swiper-progects
const swiperProgects = new Swiper('.progects__swiper', {
  navigation: {
    prevEl: '.progects__btn_prev',
    nextEl: '.progects__btn_next',
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },
    1430: {
      slidesPerView: 3,
      slidesPerGroup: 3,
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3J5cHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8vIGhlYWRlcnNcbi8vINCw0L3QuNC80LDRhtC40Y8gbmF2XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyJyk7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX25hdicpO1xuICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLXRvZ2dsZScpO1xuICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIC8vINC/0LXRgNC10LrQu9GO0YfQtdC90LjQtSDQsdGD0YDQs9C10YDQsFxuICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdidXJnZXItLWFjdGl2ZScpO1xuICAgIC8vINC/0L7Rj9Cy0LvQtdC90LjQtSDQuCDRg9GF0L7QtCDQvNC10L3RjiDQvdCw0LLQuNCz0LDRhtC40LhcbiAgICBpZiAoYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucygnYnVyZ2VyLS1hY3RpdmUnKSkge1xuICAgICAgY2xlYXJUaW1lb3V0KHNldFRpbWVvdXQoKCk9PntuYXYuc3R5bGUuekluZGV4ID0gLTE7fSwgMCkpXG4gICAgICBzZWFyY2guc3R5bGUuekluZGV4ID0gMTtcbiAgICAgIG5hdi5zdHlsZS56SW5kZXggPSAyO1xuICAgICAgZ3NhcC5mcm9tVG8oJy5oZWFkZXJfX25hdicsIHsgeFBlcmNlbnQ6IC0xMDAsIG9wYWNpdHk6IDAuOCB9LCB7IGR1cmF0aW9uOiAxLCBzY2FsZVg6IDEsIHhQZXJjZW50OiAtMCwgb3BhY2l0eTogMSB9KTtcbiAgICB9IGVsc2UgaWYgKCghYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucygnYnVyZ2VyLS1hY3RpdmUnKSkpIHtcbiAgICAgIHNlYXJjaC5zdHlsZS56SW5kZXggPSA0O1xuICAgICAgZ3NhcC5mcm9tVG8oJy5oZWFkZXJfX25hdicsIHsgeFBlcmNlbnQ6IDAsIG9wYWNpdHk6IDEgfSwgeyBkdXJhdGlvbjogMSwgc2NhbGVYOiAwLCB4UGVyY2VudDogLTEwMCwgb3BhY2l0eTogMC44IH0pO1xuICAgICAgc2V0VGltZW91dCgoKT0+e25hdi5zdHlsZS56SW5kZXggPSAtMTt9LCA2MDApXG4gICAgfVxuICB9KTtcbn0pO1xuLy8gc2VhcmNoXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBidG5Ub2dnbGVTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLXRvZ2dsZScpO1xuICBjb25zdCBidG5TdmdPcGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZS1vcGVuJyk7XG4gIGNvbnN0IGJ0blN2Z0Nsb3NlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUtY2xvc2VkJyk7XG4gIGJ0blRvZ2dsZVNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgYnRuU3ZnT3Blbi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICBidG5TdmdDbG9zZWQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgLy8g0L/QvtGP0LLQu9C10L3QuNC1INC/0L7QuNGB0LrQsFxuICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAvLyDQsNC90LjQvNCw0YbQuNGPINC/0L7QuNGB0LrQsFxuICAgIGlmIChidG5Ub2dnbGVTZWFyY2guY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgZ3NhcC5mcm9tVG8oJy5oZWFkZXJfX3NlYXJjaCcsIHsgc2NhbGVYOiAwLCB4UGVyY2VudDogLTUwLCBvcGFjaXR5OiAwLjggfSwgeyBkdXJhdGlvbjogMC42LCBzY2FsZVg6IDEsIHhQZXJjZW50OiAtMCwgb3BhY2l0eTogMSB9KTtcbiAgICB9IGVsc2UgaWYgKCghYnRuVG9nZ2xlU2VhcmNoLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpKSB7XG4gICAgICBnc2FwLmZyb21UbygnLmhlYWRlcl9fc2VhcmNoJywgeyBzY2FsZVg6IDEsIHhQZXJjZW50OiAwLCBvcGFjaXR5OiAxIH0sIHsgZHVyYXRpb246IDAuNiwgc2NhbGVYOiAwLCB4UGVyY2VudDogLTUwLCBvcGFjaXR5OiAwLjggfSk7XG4gICAgfVxuICB9KTtcbn0pO1xuLy8gZHJvcGRvd25cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bl9fYnRuJykuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IHBhdGggfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICAgIGNvbnN0IGRyb3Bkb3duQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFyZ2V0PVwiJHtwYXRofVwiXWApO1xuICAgICAgLy8g0L/QtdGA0LXQstC+0YDQsNGH0LjQstCw0LXQvCDRgdGC0YDQtdC70L7Rh9C60YMg0L/RgNC4INC60LvQuNC60LVcbiAgICAgIGNvbnN0IGljb24gPSBidG4ucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duX19pY29uLXN2ZycpO1xuICAgICAgaWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdkcm9wZG93bl9faWNvbi1zdmdfYWN0aXZlJyk7XG4gICAgICAvLyDQt9Cw0LrRgNGL0LLQsNC10Lwg0LLRgdC1INGB0L/QuNGB0LrQuCDQuCDQv9C10YDQtdC60LvRjtGH0LDQtdC8INC90LDQttCw0YLRi9C5XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd25fX2JveCcpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGlmIChkcm9wZG93bkJveCAhPT0gZWwpIHtcbiAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBkcm9wZG93bkJveC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbi8vIHNjcm9sbGJhclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duX19zY3JvbGxiYXInKS5mb3JFYWNoKChlbCkgPT4ge1xuICBuZXcgU2ltcGxlQmFyKGVsLCB7XG4gICAgc2Nyb2xsYmFyTWF4U2l6ZTogNDAsXG4gIH0pO1xufSk7XG4vLyB0b3Atd3JhcC1zd2lwZXJcbmNvbnN0IHN3aXBlckhlcm8gPSBuZXcgU3dpcGVyKCcudG9wLXdyYXBfX3N3aXBlcicsIHtcbiAgYWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxuICBsb29wOiB0cnVlLFxuICBlZmZlY3Q6ICdmYWRlJyxcbiAgc3BlZWQ6IDEwMDAwLFxuICBhdXRvcGxheToge1xuICAgIGRlbGF5OiAxMDAwMCxcbiAgfSxcbn0pO1xuLy8gZ2FsbGVyeVxuLy8gc3dpcGVyLWdhbGxlcnlcbmNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5nYWxsZXJ5X19zd2lwZXInLCB7XG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIGdyaWQ6IHtcbiAgICByb3dzOiAxLFxuICAgIGZpbGw6ICdyb3cnLFxuICB9LFxuICBzcGFjZUJldHdlZW46IDIwLFxuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6ICcuZ2FsbGVyeV9fcGFnaW5hdGlvbicsXG4gICAgdHlwZTogJ2ZyYWN0aW9uJyxcbiAgfSxcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogJy5nYWxsZXJ5X19idG4tbmV4dCcsXG4gICAgcHJldkVsOiAnLmdhbGxlcnlfX2J0bi1wcmV2JyxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICA3NTA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzbGlkZXNQZXJHcm91cDogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogMzQsXG4gICAgfSxcbiAgICA3Njk6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzbGlkZXNQZXJHcm91cDogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogMzQsXG4gICAgfSxcbiAgICAxNDMwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDYsXG4gICAgICBzcGFjZUJldHdlZW46IDUwLFxuICAgIH0sXG4gIH0sXG4gIGExMXk6IGZhbHNlLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgd2F0Y2hTbGlkZXNWaXNpYmlsaXR5OiB0cnVlLFxuICBzbGlkZVZpc2libGVDbGFzczogJ3NsaWRlLXZpc2libGUnLFxuICBvbjoge1xuICAgIGluaXQoKSB7XG4gICAgICB0aGlzLnNsaWRlcy5mb3JFYWNoKChzbGlkZSkgPT4ge1xuICAgICAgICBpZiAoIXNsaWRlLmNsYXNzTGlzdC5jb250YWlucygnc2xpZGUtdmlzaWJsZScpKSB7XG4gICAgICAgICAgc2xpZGUudGFiSW5kZXggPSAnLTEnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNsaWRlLnRhYkluZGV4ID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc2xpZGVDaGFuZ2UoKSB7XG4gICAgICB0aGlzLnNsaWRlcy5mb3JFYWNoKChzbGlkZSkgPT4ge1xuICAgICAgICBpZiAoIXNsaWRlLmNsYXNzTGlzdC5jb250YWlucygnc2xpZGUtdmlzaWJsZScpKSB7XG4gICAgICAgICAgc2xpZGUudGFiSW5kZXggPSAnLTEnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNsaWRlLnRhYkluZGV4ID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gIH0sXG59KTtcbi8vIHNlbGVjdC1nYWxsZXJ5XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3QnKTtcbiAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGNob2ljZXMgPSBuZXcgQ2hvaWNlcyhlbGVtZW50LCB7XG4gICAgICBzZWFyY2hFbmFibGVkOiBmYWxzZSxcbiAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgIHNob3VsZFNvcnQ6IGZhbHNlLFxuICAgICAgaXRlbVNlbGVjdFRleHQ6ICcnLFxuICAgIH0pO1xuICB9KTtcbn0pO1xuXG4vLyBtb2RhbCBnYWxsZXJ5XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FsbGVyeV9fc2xpZGUnKS5mb3JFYWNoKChtb2RhbExpbmspID0+IHtcbiAgICBtb2RhbExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHsgcGF0aCB9ID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgICAgY29uc3QgbW9kYWxPYmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXJnZXQ9XCIke3BhdGh9XCJdYCk7XG4gICAgICBjb25zdCBidG4gPSBtb2RhbE9iZy5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2J0bicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsJykuZm9yRWFjaCgodGFiQ29udGVudCkgPT4ge1xuICAgICAgICB0YWJDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2RlYWN0aXZhdGUnKTtcbiAgICAgIH0pO1xuICAgICAgbW9kYWxPYmcuY2xhc3NMaXN0LnJlbW92ZSgnZGVhY3RpdmF0ZScpO1xuICAgICAgLy8g0LfQsNC60YDRi9GC0LjQtSDQvdCwINC90LDQttCw0YLQuNC1INGE0L7QvdCwXG4gICAgICBtb2RhbE9iZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGFsT3ZlcmxheSA9IG1vZGFsT2JnLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fb3ZlcmxheScpO1xuICAgICAgICBpZiAoZS50YXJnZXQgPT09IG1vZGFsT3ZlcmxheSkge1xuICAgICAgICAgIG1vZGFsT2JnLmNsYXNzTGlzdC5hZGQoJ2RlYWN0aXZhdGUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyDQt9Cw0LrRgNGL0YLQuNC1INC90LAg0L3QsNC20LDRgtC40LUg0LrQvdC+0L/QutC4XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG1vZGFsT2JnLmNsYXNzTGlzdC5hZGQoJ2RlYWN0aXZhdGUnKTtcbiAgICAgIH0pO1xuICAgICAgLy8g0LDQvdC40LzQsNGG0LjRjyDQv9C+0Y/QstC70LXQvdC40Y8g0L7QutC90LBcbiAgICAgIGlmICghbW9kYWxPYmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWFjdGl2YXRlJykpIHtcbiAgICAgICAgZ3NhcC5mcm9tVG8oJy5tb2RhbF9fYm94JywgeyBzY2FsZVg6MC42LCBzY2FsZVk6MC40LCBvcGFjaXR5OiAwLjggfSwgeyBkdXJhdGlvbjogMC42LCBzY2FsZVg6MSwgc2NhbGVZOjEsIG9wYWNpdHk6IDEgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufSk7XG4vLyBtb2RhbCBzY3JvbGxcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9fYm94JykuZm9yRWFjaCgoZWwpID0+IHtcbiAgbmV3IFNpbXBsZUJhcihlbCwge1xuICAgIHNjcm9sbGJhck1heFNpemU6IDQwLFxuICB9KTtcbn0pO1xuLy8gY2F0YWxvZ1xuLy8gdGFiXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uX19saW5rJykuZm9yRWFjaCgodGFiTGluaykgPT4ge1xuICAgIHRhYkxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHsgcGF0aCB9ID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbl9fbGluaycpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjY29yZGlvbl9fbGlua19hY3RpdmUnKTtcbiAgICAgIH0pO1xuICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY2NvcmRpb25fX2xpbmtfYWN0aXZlJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiX19pdGVtJykuZm9yRWFjaCgodGFiQ29udGVudCkgPT4ge1xuICAgICAgICB0YWJDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2RlYWN0aXZhdGUnKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFyZ2V0PVwiJHtwYXRofVwiXWApLmNsYXNzTGlzdC5yZW1vdmUoJ2RlYWN0aXZhdGUnKTtcbiAgICAgIGdzYXAuZnJvbVRvKCcudGFiX19pdGVtJywgeyBvcGFjaXR5OiAwIH0sIHsgZHVyYXRpb246IDAuOCwgb3BhY2l0eTogMSB9KTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbi8vIGFjY29yZGlvblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgbmV3IEFjY29yZGlvbignLmpzLWFjY29yZGlvbi1jb250YWluZXInLCB7XG4gICAgb3Blbk9uSW5pdDogWzBdLFxuICB9KTtcbn0pO1xuLy8gc3dpcGVyLWV2ZW50c1xuY29uc3Qgc3dpcGVyRXZlbnRzID0gbmV3IFN3aXBlcignLmV2ZW50c19fc3dpcGVyJywge1xuICBzbGlkZXNQZXJWaWV3OiAxLFxuICBncmlkOiB7XG4gICAgcm93czogMSxcbiAgICBmaWxsOiAncm93JyxcbiAgfSxcbiAgbG9vcDogdHJ1ZSxcbiAgYTExeTogZmFsc2UsXG4gIGtleWJvYXJkOiB0cnVlLFxuICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICB3YXRjaFNsaWRlc1Zpc2liaWxpdHk6IHRydWUsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6ICcuZXZlbnRzX19idG4tbmV4dCcsXG4gIH0sXG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogJy5ldmVudHNfX3BhZ2luYXRpb24nLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICA3NTA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzbGlkZXNQZXJHcm91cDogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogMzQsXG4gICAgfSxcbiAgICA5OTI6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICBzbGlkZXNQZXJHcm91cDogMyxcbiAgICAgIHNwYWNlQmV0d2VlbjogMjQsXG4gICAgfSxcbiAgICAxNDMwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDMsXG4gICAgICBzcGFjZUJldHdlZW46IDUyLFxuICAgIH0sXG4gIH0sXG59KTtcbi8vIHN3aXBlci1wcm9nZWN0c1xuY29uc3Qgc3dpcGVyUHJvZ2VjdHMgPSBuZXcgU3dpcGVyKCcucHJvZ2VjdHNfX3N3aXBlcicsIHtcbiAgbmF2aWdhdGlvbjoge1xuICAgIHByZXZFbDogJy5wcm9nZWN0c19fYnRuX3ByZXYnLFxuICAgIG5leHRFbDogJy5wcm9nZWN0c19fYnRuX25leHQnLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIDU3Njoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIHNsaWRlc1Blckdyb3VwOiAyLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAzNCxcbiAgICB9LFxuICAgIDc2OToge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIHNsaWRlc1Blckdyb3VwOiAyLFxuICAgICAgc3BhY2VCZXR3ZWVuOiA1MCxcbiAgICB9LFxuICAgIDE0MzA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICBzbGlkZXNQZXJHcm91cDogMyxcbiAgICAgIHNwYWNlQmV0d2VlbjogNTAsXG4gICAgfSxcbiAgfSxcbiAgYTExeTogZmFsc2UsXG4gIGtleWJvYXJkOiB0cnVlLFxuICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICB3YXRjaFNsaWRlc1Zpc2liaWxpdHk6IHRydWUsXG4gIHNsaWRlVmlzaWJsZUNsYXNzOiAnc2xpZGUtdmlzaWJsZScsXG4gIG9uOiB7XG4gICAgaW5pdCgpIHtcbiAgICAgIHRoaXMuc2xpZGVzLmZvckVhY2goKHNsaWRlKSA9PiB7XG4gICAgICAgIGlmICghc2xpZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZS12aXNpYmxlJykpIHtcbiAgICAgICAgICBzbGlkZS50YWJJbmRleCA9ICctMSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2xpZGUudGFiSW5kZXggPSAnJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBzbGlkZUNoYW5nZSgpIHtcbiAgICAgIHRoaXMuc2xpZGVzLmZvckVhY2goKHNsaWRlKSA9PiB7XG4gICAgICAgIGlmICghc2xpZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZS12aXNpYmxlJykpIHtcbiAgICAgICAgICBzbGlkZS50YWJJbmRleCA9ICctMSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2xpZGUudGFiSW5kZXggPSAnJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgfSxcbn0pO1xuLy8gdG9vbHRpcFxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgdGlwcHkoJy5qcy10b29sdGlwJywge1xuICAgIG1heFdpZHRoOiAyNjQsXG4gICAgdGhlbWU6ICdjYXN0b20tdG9vbHRpcCcsXG4gIH0pO1xufSk7XG4vLyBjb250YWN0c1xuLy8gY29udGFjdHMgZm9ybVxuY29uc3Qgc2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT0ndGVsJ11cIik7XG5jb25zdCBpbSA9IG5ldyBJbnB1dG1hc2soJys3ICg5OTkpLTk5OS05OS05OScpO1xuaW0ubWFzayhzZWxlY3Rvcik7XG5uZXcgSnVzdFZhbGlkYXRlKCcuZm9ybScsIHtcbiAgcnVsZXM6IHtcbiAgICBuYW1lOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIG1pbkxlbmd0aDogMixcbiAgICAgIG1heExlbmd0aDogMjQsXG4gICAgfSxcbiAgICB0ZWw6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgc3RyZW5ndGg6IHsgY3VzdG9tOiAnW15fXSQnIH0sXG4gICAgfSxcbiAgfSxcbiAgbWVzc2FnZXM6IHtcbiAgICBuYW1lOiB7XG4gICAgICByZXF1aXJlZDogJ9Ca0LDQuiDQstCw0YEg0LfQvtCy0YPRgj8nLFxuICAgICAgbWluTGVuZ3RoOiAn0JrQvtGA0L7RgtC60L7QtSDQuNC80Y8nLFxuICAgICAgbWF4TGVuZ3RoOiAn0JTQu9C40L3QvdC+0LUg0LjQvNGPJyxcbiAgICB9LFxuICAgIHRlbDogJ9Cj0LrQsNC20LjRgtC1INCy0LDRiCDRgtC10LvQtdGE0L7QvScsXG4gIH0sXG59KTtcbi8vIGNvbnRhY3RzIG1hcFxueW1hcHMucmVhZHkoaW5pdCk7XG5mdW5jdGlvbiBpbml0KCkge1xuICBjb25zdCBteU1hcCA9IG5ldyB5bWFwcy5NYXAoJ21hcCcsIHtcbiAgICBjZW50ZXI6IFs1NS43NTg0NjgsIDM3LjYwMTA4OF0sXG4gICAgem9vbTogMTUsXG4gICAgY29udHJvbHM6IFsnZ2VvbG9jYXRpb25Db250cm9sJywgJ3pvb21Db250cm9sJ10sXG4gIH0sXG4gIHtcbiAgICBzdXBwcmVzc01hcE9wZW5CbG9jazogdHJ1ZSxcbiAgICBnZW9sb2NhdGlvbkNvbnRyb2xTaXplOiBcImxhcmdlXCIsXG4gICAgZ2VvbG9jYXRpb25Db250cm9sUG9zaXRpb246ICB7IHRvcDogXCIyMDBweFwiLCByaWdodDogXCIyMHB4XCIgfSxcbiAgICBnZW9sb2NhdGlvbkNvbnRyb2xGbG9hdDogJ25vbmUnLFxuICAgIHpvb21Db250cm9sU2l6ZTogXCJzbWFsbFwiLFxuICAgIHpvb21Db250cm9sRmxvYXQ6IFwibm9uZVwiLFxuICAgIHpvb21Db250cm9sUG9zaXRpb246IHsgdG9wOiBcIjEyMHB4XCIsIHJpZ2h0OiBcIjIwcHhcIiB9XG4gIH0pO1xuICBjb25zdCBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzU1Ljc1ODQ2OCwgMzcuNjAxMDg4XSwge30sIHtcbiAgICBpY29uTGF5b3V0OiAnZGVmYXVsdCNpbWFnZScsXG4gICAgaWNvbkltYWdlSHJlZjogJ2ltZy9nZW9PYmplY3Quc3ZnJyxcbiAgICBpY29uSW1hZ2VTaXplOiBbMjAsIDIwXSxcbiAgfSk7XG4gIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcbn1cbi8vINC/0LvQsNCy0L3Ri9C5INGB0LrRgNC+0LvQu1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXNjcm9sbC1saW5rJykuZm9yRWFjaChsaW5rID0+IHtcbiAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGNvbnN0IGhyZWYgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpLnN1YnN0cmluZygxKTtcbiAgICAgIGNvbnN0IHNjcm9sbFRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhyZWYpO1xuICAgICAgY29uc3QgZWxlbWVudFBvc2l0aW9uID0gc2Nyb2xsVGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHdpbmRvdy5zY3JvbGxCeSh7XG4gICAgICAgICAgdG9wOiBlbGVtZW50UG9zaXRpb24sXG4gICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICB9KTtcbiAgfSk7XG59KTtcbiJdLCJmaWxlIjoic2NyeXB0LmpzIn0=
