/* eslint-disable no-use-before-define */
/* eslint-disable no-new */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// headers
// nav
// анимация кнопки бургера
(() => {
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
      gsap.fromTo('.search', { y: -160, opacity: 0.8 }, { duration: 1, y: 0, opacity: 1 });
    } else if ((!search.classList.contains('active'))) {
      gsap.fromTo('.search', { y: 0, opacity: 1 }, { duration: 1, y: -160, opacity: 0.8 });
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
    nextEl: '.gallery__button-next',
    prevEl: '.gallery__button-prev',
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
      spaceBetween: 55,
    },
  },
});

// swiper-progects
const swiperProgects = new Swiper('.progects__swiper', {
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

// плавный скролл
document.querySelectorAll('.js-scroll-link').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();

      const href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const elementPosition = scrollTarget.getBoundingClientRect().top;

      window.scrollBy({
          top: elementPosition,
          behavior: 'smooth'
      });
  });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3J5cHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8vIGhlYWRlcnNcbi8vIG5hdlxuLy8g0LDQvdC40LzQsNGG0LjRjyDQutC90L7Qv9C60Lgg0LHRg9GA0LPQtdGA0LBcbigoKSA9PiB7XG4gIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXInKTtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdicpO1xuICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLXRvZ2dsZScpO1xuICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdidXJnZXItLWFjdGl2ZScpO1xuICAgIGlmIChidXJnZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdidXJnZXItLWFjdGl2ZScpKSB7XG4gICAgICBjbGVhclRpbWVvdXQoc2V0VGltZW91dCgoKT0+e25hdi5zdHlsZS56SW5kZXggPSAtMTt9LCAwKSlcbiAgICAgIHNlYXJjaC5zdHlsZS56SW5kZXggPSAxO1xuICAgICAgbmF2LnN0eWxlLnpJbmRleCA9IDI7XG4gICAgICBnc2FwLmZyb21UbygnLm5hdl9fYm94JywgeyB4OiAtMTAwMCwgb3BhY2l0eTogMCB9LCB7IGR1cmF0aW9uOiAwLjYsIHg6IDAsIG9wYWNpdHk6IDEgfSk7XG4gICAgfSBlbHNlIGlmICgoIWJ1cmdlci5jbGFzc0xpc3QuY29udGFpbnMoJ2J1cmdlci0tYWN0aXZlJykpKSB7XG4gICAgICBzZWFyY2guc3R5bGUuekluZGV4ID0gNDtcbiAgICAgIGdzYXAuZnJvbVRvKCcubmF2X19ib3gnLCB7IHg6IDAsIG9wYWNpdHk6IDEgfSwgeyBkdXJhdGlvbjogMC42LCB4OiAtMTAwMCB9KTtcbiAgICAgIHNldFRpbWVvdXQoKCk9PntuYXYuc3R5bGUuekluZGV4ID0gLTE7fSwgMzAwKVxuICAgIH1cbiAgfSk7XG59KSgpO1xuLy8gLy8gc2VhcmNoXG5jb25zdCBzZWFyY2hBbmltID0gKCgpID0+IHtcbiAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC10b2dnbGUnKTtcbiAgY29uc3Qgc2VhcmNoU3ZnT3BlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUtb3BlbicpO1xuICBjb25zdCBzZWFyY2hTdmdDbG9zZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlLWNsb3NlZCcpO1xuICBzZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIHNlYXJjaFN2Z09wZW4uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgc2VhcmNoU3ZnQ2xvc2VkLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICBpZiAoc2VhcmNoLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgIGdzYXAuZnJvbVRvKCcuc2VhcmNoJywgeyB5OiAtMTYwLCBvcGFjaXR5OiAwLjggfSwgeyBkdXJhdGlvbjogMSwgeTogMCwgb3BhY2l0eTogMSB9KTtcbiAgICB9IGVsc2UgaWYgKCghc2VhcmNoLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpKSB7XG4gICAgICBnc2FwLmZyb21UbygnLnNlYXJjaCcsIHsgeTogMCwgb3BhY2l0eTogMSB9LCB7IGR1cmF0aW9uOiAxLCB5OiAtMTYwLCBvcGFjaXR5OiAwLjggfSk7XG4gICAgfVxuICB9KTtcbn0pKCk7XG5cbi8vIGRyb3Bkb3duXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd25fX2J0bicpLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXRoIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgICBjb25zdCBkcm9wZG93bkJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhcmdldD1cIiR7cGF0aH1cIl1gKTtcbiAgICAgIC8vINC/0LXRgNC10LLQvtGA0LDRh9C40LLQsNC10Lwg0YHRgtGA0LXQu9C+0YfQutGDINC/0YDQuCDQutC70LjQutC1XG4gICAgICBjb25zdCBpY29uID0gYnRuLnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bl9faWNvbi1zdmcnKTtcbiAgICAgIGljb24uY2xhc3NMaXN0LnRvZ2dsZSgnZHJvcGRvd25fX2ljb24tc3ZnX2FjdGl2ZScpO1xuICAgICAgLy8g0LfQsNC60YDRi9Cy0LDQtdC8INCy0YHQtSDRgdC/0LjRgdC60Lgg0Lgg0L/QtdGA0LXQutC70Y7Rh9Cw0LXQvCDQvdCw0LbQsNGC0YvQuVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duX19ib3gnKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBpZiAoZHJvcGRvd25Cb3ggIT09IGVsKSB7XG4gICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZHJvcGRvd25Cb3guY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG5cbi8vIHNjcm9sbGJhclxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd25fX3Njcm9sbGJhcicpLmZvckVhY2goKGVsKSA9PiB7XG4gIG5ldyBTaW1wbGVCYXIoZWwsIHtcbiAgICBzY3JvbGxiYXJNYXhTaXplOiA0MCxcbiAgfSk7XG59KTtcblxuLy8gdG9wLXdyYXAtc3dpcGVyXG5jb25zdCBzd2lwZXJIZXJvID0gbmV3IFN3aXBlcignLnRvcC13cmFwX19zd2lwZXInLCB7XG4gIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcbiAgbG9vcDogdHJ1ZSxcbiAgZWZmZWN0OiAnZmFkZScsXG4gIHNwZWVkOiAxMDAwMCxcbiAgYXV0b3BsYXk6IHtcbiAgICBkZWxheTogMTAwMDAsXG4gIH0sXG59KTtcblxuLy8gZ2FsbGVyeVxuLy8gc3dpcGVyLWdhbGxlcnlcbmNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5nYWxsZXJ5X19zd2lwZXInLCB7XG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIGdyaWQ6IHtcbiAgICByb3dzOiAxLFxuICAgIGZpbGw6ICdyb3cnLFxuICB9LFxuICBzcGFjZUJldHdlZW46IDIwLFxuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6ICcuZ2FsbGVyeV9fcGFnaW5hdGlvbicsXG4gICAgdHlwZTogJ2ZyYWN0aW9uJyxcbiAgfSxcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogJy5nYWxsZXJ5X19idXR0b24tbmV4dCcsXG4gICAgcHJldkVsOiAnLmdhbGxlcnlfX2J1dHRvbi1wcmV2JyxcbiAgfSxcblxuICBicmVha3BvaW50czoge1xuICAgIDc1MDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIHNsaWRlc1Blckdyb3VwOiAyLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAzNCxcbiAgICB9LFxuICAgIDc2OToge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIHNsaWRlc1Blckdyb3VwOiAyLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAzNCxcbiAgICB9LFxuICAgIDE0MzA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICBzbGlkZXNQZXJHcm91cDogNixcbiAgICAgIHNwYWNlQmV0d2VlbjogNTAsXG4gICAgfSxcbiAgfSxcbiAgYTExeTogZmFsc2UsXG4gIGtleWJvYXJkOiB0cnVlLFxuICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICB3YXRjaFNsaWRlc1Zpc2liaWxpdHk6IHRydWUsXG4gIHNsaWRlVmlzaWJsZUNsYXNzOiAnc2xpZGUtdmlzaWJsZScsXG4gIG9uOiB7XG4gICAgaW5pdCgpIHtcbiAgICAgIHRoaXMuc2xpZGVzLmZvckVhY2goKHNsaWRlKSA9PiB7XG4gICAgICAgIGlmICghc2xpZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZS12aXNpYmxlJykpIHtcbiAgICAgICAgICBzbGlkZS50YWJJbmRleCA9ICctMSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2xpZGUudGFiSW5kZXggPSAnJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBzbGlkZUNoYW5nZSgpIHtcbiAgICAgIHRoaXMuc2xpZGVzLmZvckVhY2goKHNsaWRlKSA9PiB7XG4gICAgICAgIGlmICghc2xpZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZS12aXNpYmxlJykpIHtcbiAgICAgICAgICBzbGlkZS50YWJJbmRleCA9ICctMSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2xpZGUudGFiSW5kZXggPSAnJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgfSxcbn0pO1xuLy8gc2VsZWN0LWdhbGxlcnlcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdCcpO1xuICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY2hvaWNlcyA9IG5ldyBDaG9pY2VzKGVsZW1lbnQsIHtcbiAgICAgIHNlYXJjaEVuYWJsZWQ6IGZhbHNlLFxuICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgc2hvdWxkU29ydDogZmFsc2UsXG4gICAgICBpdGVtU2VsZWN0VGV4dDogJycsXG4gICAgfSk7XG4gIH0pO1xufSk7XG5cblxuLy8gbW9kYWwgZ2FsbGVyeVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbGxlcnlfX3NsaWRlJykuZm9yRWFjaCgobW9kYWxMaW5rKSA9PiB7XG4gICAgbW9kYWxMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IHBhdGggfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICAgIGNvbnN0IG1vZGFsT2JnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFyZ2V0PVwiJHtwYXRofVwiXWApO1xuICAgICAgY29uc3QgYnRuID0gbW9kYWxPYmcucXVlcnlTZWxlY3RvcignLm1vZGFsX19idG4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbCcpLmZvckVhY2goKHRhYkNvbnRlbnQpID0+IHtcbiAgICAgICAgdGFiQ29udGVudC5jbGFzc0xpc3QuYWRkKCdkZWFjdGl2YXRlJyk7XG4gICAgICB9KTtcbiAgICAgIG1vZGFsT2JnLmNsYXNzTGlzdC5yZW1vdmUoJ2RlYWN0aXZhdGUnKTtcbiAgICAgIC8vINC30LDQutGA0YvRgtC40LUg0L3QsCDQvdCw0LbQsNGC0LjQtSDRhNC+0L3QsFxuICAgICAgbW9kYWxPYmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBtb2RhbE92ZXJsYXkgPSBtb2RhbE9iZy5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX292ZXJsYXknKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBtb2RhbE92ZXJsYXkpIHtcbiAgICAgICAgICBtb2RhbE9iZy5jbGFzc0xpc3QuYWRkKCdkZWFjdGl2YXRlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8g0LfQsNC60YDRi9GC0LjQtSDQvdCwINC90LDQttCw0YLQuNC1INC60L3QvtC/0LrQuFxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBtb2RhbE9iZy5jbGFzc0xpc3QuYWRkKCdkZWFjdGl2YXRlJyk7XG4gICAgICB9KTtcbiAgICAgIC8vINCw0L3QuNC80LDRhtC40Y8g0L/QvtGP0LLQu9C10L3QuNGPINC+0LrQvdCwXG4gICAgICBpZiAoIW1vZGFsT2JnLmNsYXNzTGlzdC5jb250YWlucygnZGVhY3RpdmF0ZScpKSB7XG4gICAgICAgIGdzYXAuZnJvbVRvKCcubW9kYWxfX2JveCcsIHsgc2NhbGVYOjAuNiwgc2NhbGVZOjAuNCwgb3BhY2l0eTogMC44IH0sIHsgZHVyYXRpb246IDAuNiwgc2NhbGVYOjEsIHNjYWxlWToxLCBvcGFjaXR5OiAxIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn0pO1xuLy8gbW9kYWwgc2Nyb2xsXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWxfX2JveCcpLmZvckVhY2goKGVsKSA9PiB7XG4gIG5ldyBTaW1wbGVCYXIoZWwsIHtcbiAgICBzY3JvbGxiYXJNYXhTaXplOiA0MCxcbiAgfSk7XG59KTtcblxuLy8gY2F0YWxvZ1xuLy8gdGFiXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uX19saW5rJykuZm9yRWFjaCgodGFiTGluaykgPT4ge1xuICAgIHRhYkxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHsgcGF0aCB9ID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbl9fbGluaycpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjY29yZGlvbl9fbGlua19hY3RpdmUnKTtcbiAgICAgIH0pO1xuICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY2NvcmRpb25fX2xpbmtfYWN0aXZlJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiX19pdGVtJykuZm9yRWFjaCgodGFiQ29udGVudCkgPT4ge1xuICAgICAgICB0YWJDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2RlYWN0aXZhdGUnKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFyZ2V0PVwiJHtwYXRofVwiXWApLmNsYXNzTGlzdC5yZW1vdmUoJ2RlYWN0aXZhdGUnKTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbi8vIGFjY29yZGlvblxuKCgpID0+IHtcbiAgbmV3IEFjY29yZGlvbignLmpzLWFjY29yZGlvbi1jb250YWluZXInLCB7XG4gICAgb3Blbk9uSW5pdDogWzBdLFxuICB9KTtcbn0pKCk7XG5cbi8vIHN3aXBlci1ldmVudHNcbmNvbnN0IHN3aXBlckV2ZW50cyA9IG5ldyBTd2lwZXIoJy5ldmVudHNfX3N3aXBlcicsIHtcbiAgc2xpZGVzUGVyVmlldzogMSxcbiAgZ3JpZDoge1xuICAgIHJvd3M6IDEsXG4gICAgZmlsbDogJ3JvdycsXG4gIH0sXG4gIGxvb3A6IHRydWUsXG4gIGExMXk6IGZhbHNlLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgd2F0Y2hTbGlkZXNWaXNpYmlsaXR5OiB0cnVlLFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiAnLmV2ZW50c19fYnV0dG9uLW5leHQnLFxuICB9LFxuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6ICcuZXZlbnRzX19wYWdpbmF0aW9uJyxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgNzUwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDIsXG4gICAgICBzcGFjZUJldHdlZW46IDM0LFxuICAgIH0sXG5cbiAgICA5OTI6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICBzbGlkZXNQZXJHcm91cDogMyxcbiAgICAgIHNwYWNlQmV0d2VlbjogMjQsXG4gICAgfSxcblxuICAgIDE0MzA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICBzbGlkZXNQZXJHcm91cDogMyxcbiAgICAgIHNwYWNlQmV0d2VlbjogNTUsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG4vLyBzd2lwZXItcHJvZ2VjdHNcbmNvbnN0IHN3aXBlclByb2dlY3RzID0gbmV3IFN3aXBlcignLnByb2dlY3RzX19zd2lwZXInLCB7XG4gIG5hdmlnYXRpb246IHtcbiAgICBwcmV2RWw6ICcucHJvZ2VjdHNfX2J1dHRvbl9wcmV2JyxcbiAgICBuZXh0RWw6ICcucHJvZ2VjdHNfX2J1dHRvbl9uZXh0JyxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICA1NzY6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzbGlkZXNQZXJHcm91cDogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogMzQsXG4gICAgfSxcbiAgICA3Njk6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzbGlkZXNQZXJHcm91cDogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogNTAsXG4gICAgfSxcbiAgICAxNDMwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDMsXG4gICAgICBzcGFjZUJldHdlZW46IDUwLFxuICAgIH0sXG4gIH0sXG4gIGExMXk6IGZhbHNlLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgd2F0Y2hTbGlkZXNWaXNpYmlsaXR5OiB0cnVlLFxuICBzbGlkZVZpc2libGVDbGFzczogJ3NsaWRlLXZpc2libGUnLFxuICBvbjoge1xuICAgIGluaXQoKSB7XG4gICAgICB0aGlzLnNsaWRlcy5mb3JFYWNoKChzbGlkZSkgPT4ge1xuICAgICAgICBpZiAoIXNsaWRlLmNsYXNzTGlzdC5jb250YWlucygnc2xpZGUtdmlzaWJsZScpKSB7XG4gICAgICAgICAgc2xpZGUudGFiSW5kZXggPSAnLTEnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNsaWRlLnRhYkluZGV4ID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc2xpZGVDaGFuZ2UoKSB7XG4gICAgICB0aGlzLnNsaWRlcy5mb3JFYWNoKChzbGlkZSkgPT4ge1xuICAgICAgICBpZiAoIXNsaWRlLmNsYXNzTGlzdC5jb250YWlucygnc2xpZGUtdmlzaWJsZScpKSB7XG4gICAgICAgICAgc2xpZGUudGFiSW5kZXggPSAnLTEnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNsaWRlLnRhYkluZGV4ID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gIH0sXG59KTtcblxuLy8gdG9vbHRpcFxuXG4oKCkgPT4ge1xuICB0aXBweSgnLmpzLXRvb2x0aXAnLCB7XG4gICAgbWF4V2lkdGg6IDI2NCxcbiAgICB0aGVtZTogJ2Nhc3RvbS10b29sdGlwJyxcbiAgfSk7XG59KSgpO1xuXG4vLyBjb250YWN0c1xuLy8gY29udGFjdHMgZm9ybVxuY29uc3Qgc2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT0ndGVsJ11cIik7XG5jb25zdCBpbSA9IG5ldyBJbnB1dG1hc2soJys3ICg5OTkpLTk5OS05OS05OScpO1xuaW0ubWFzayhzZWxlY3Rvcik7XG5uZXcgSnVzdFZhbGlkYXRlKCcuZm9ybScsIHtcbiAgcnVsZXM6IHtcbiAgICBuYW1lOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIG1pbkxlbmd0aDogMixcbiAgICAgIG1heExlbmd0aDogMjQsXG4gICAgfSxcblxuICAgIHRlbDoge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBzdHJlbmd0aDogeyBjdXN0b206ICdbXl9dJCcgfSxcbiAgICB9LFxuICB9LFxuICBtZXNzYWdlczoge1xuICAgIG5hbWU6IHtcbiAgICAgIHJlcXVpcmVkOiAn0JrQsNC6INCy0LDRgSDQt9C+0LLRg9GCPycsXG4gICAgICBtaW5MZW5ndGg6ICfQmtC+0YDQvtGC0LrQvtC1INC40LzRjycsXG4gICAgICBtYXhMZW5ndGg6ICfQlNC70LjQvdC90L7QtSDQuNC80Y8nLFxuICAgIH0sXG4gICAgdGVsOiAn0KPQutCw0LbQuNGC0LUg0LLQsNGIINGC0LXQu9C10YTQvtC9JyxcbiAgfSxcbn0pO1xuXG4vLyBjb250YWN0cyBtYXBcbnltYXBzLnJlYWR5KGluaXQpO1xuZnVuY3Rpb24gaW5pdCgpIHtcbiAgY29uc3QgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKCdtYXAnLCB7XG4gICAgY2VudGVyOiBbNTUuNzU4NDY4LCAzNy42MDEwODhdLFxuICAgIHpvb206IDE1LFxuICAgIGNvbnRyb2xzOiBbJ2dlb2xvY2F0aW9uQ29udHJvbCcsICd6b29tQ29udHJvbCddLFxuICB9LFxuICB7XG4gICAgc3VwcHJlc3NNYXBPcGVuQmxvY2s6IHRydWUsXG4gICAgZ2VvbG9jYXRpb25Db250cm9sU2l6ZTogXCJsYXJnZVwiLFxuICAgIGdlb2xvY2F0aW9uQ29udHJvbFBvc2l0aW9uOiAgeyB0b3A6IFwiMjAwcHhcIiwgcmlnaHQ6IFwiMjBweFwiIH0sXG4gICAgZ2VvbG9jYXRpb25Db250cm9sRmxvYXQ6ICdub25lJyxcbiAgICB6b29tQ29udHJvbFNpemU6IFwic21hbGxcIixcbiAgICB6b29tQ29udHJvbEZsb2F0OiBcIm5vbmVcIixcbiAgICB6b29tQ29udHJvbFBvc2l0aW9uOiB7IHRvcDogXCIxMjBweFwiLCByaWdodDogXCIyMHB4XCIgfVxuICB9KTtcbiAgY29uc3QgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFs1NS43NTg0NjgsIDM3LjYwMTA4OF0sIHt9LCB7XG4gICAgaWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2UnLFxuICAgIGljb25JbWFnZUhyZWY6ICdpbWcvZ2VvT2JqZWN0LnN2ZycsXG4gICAgaWNvbkltYWdlU2l6ZTogWzIwLCAyMF0sXG4gIH0pO1xuICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XG59XG5cbi8vINC/0LvQsNCy0L3Ri9C5INGB0LrRgNC+0LvQu1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXNjcm9sbC1saW5rJykuZm9yRWFjaChsaW5rID0+IHtcbiAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29uc3QgaHJlZiA9IHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJykuc3Vic3RyaW5nKDEpO1xuICAgICAgY29uc3Qgc2Nyb2xsVGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaHJlZik7XG4gICAgICBjb25zdCBlbGVtZW50UG9zaXRpb24gPSBzY3JvbGxUYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuXG4gICAgICB3aW5kb3cuc2Nyb2xsQnkoe1xuICAgICAgICAgIHRvcDogZWxlbWVudFBvc2l0aW9uLFxuICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgfSk7XG4gIH0pO1xufSk7XG4iXSwiZmlsZSI6InNjcnlwdC5qcyJ9
