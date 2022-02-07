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
    prevEl: '.progects__btn-prev',
    nextEl: '.progects__btn-next',
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
