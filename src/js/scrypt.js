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
  const navLink = document.querySelectorAll('.nav__link');
  const navScroll = document.querySelector('.nav__scroll');
  const mediaFullDesktop = window.matchMedia('(min-width: 1480px)')
  function navAnim() {
    // переключение бургера
    burger.classList.toggle('burger--active');
    // появление и уход меню навигации
    if (burger.classList.contains('burger--active')) {
      clearTimeout(setTimeout(()=>{nav.style.zIndex = -1;}, 0))
      search.style.zIndex = 1;
      nav.style.zIndex = 2;
      gsap.fromTo('.header__nav', { xPercent: -100, opacity: 0.8 }, { duration: 1, scaleX: 1, xPercent: 0, opacity: 1 });
    } else if ((!burger.classList.contains('burger--active'))) {
      search.style.zIndex = 4;
      gsap.fromTo('.header__nav', { xPercent: 0, opacity: 1 }, { duration: 1, scaleX: 0, xPercent: -100, opacity: 0.8 });
      setTimeout(()=>{nav.style.zIndex = -1;}, 600)
    }
  }

  if (!mediaFullDesktop.matches) {
    // scrollbar nav
    new SimpleBar(navScroll, {
      scrollbarMaxSize: 20,
    });
  }
  mediaFullDesktop.addEventListener('change', () => {
    // если меньше 1480px
    if (!mediaFullDesktop.matches) {
      new SimpleBar(navScroll, {
        scrollbarMaxSize: 20,
      });
      document.querySelector('.nav__box').classList.remove('overflow-hidden');
    } else {
      document.querySelector('.nav__box').classList.add('overflow-hidden');
    }
  })
  // Проработка функций при загрузке страницы в первый раз
  // вызов анимации при нажатии кнопки
  burger.addEventListener('click', navAnim);
  // вызов анимации при переходе по ссылке
  navLink.forEach((el) => {
    el.addEventListener('click', () => {
      if (burger.classList.contains('burger--active')) {
        navAnim();
      }
    });
  })

  // проверка по медиазапросу, на изменения (переворот экрана, уменьшат окно браузера и тд)
  if (matchMedia) {
    // измеения экрана
    mediaFullDesktop.addEventListener('change', () => {
      // если больше 1480px, то вызов IIFE, в которой сбрасываются все значения навигации что накиданы анимацией
      if (mediaFullDesktop.matches) {
        nav.style.zIndex = 1;
        search.style.zIndex = 1;
        gsap.fromTo('.header__nav', { xPercent: -100, opacity: 0.8 }, { duration: 0, scaleX: 1, xPercent: 0, opacity: 1 });
      } else {
        // иначе возвращаем состояние которое было у страницы
        if ((!burger.classList.contains('burger--active'))) {
          search.style.zIndex = 4;
          nav.style.zIndex = -1;
          gsap.fromTo('.header__nav', { xPercent: 0, opacity: 1 }, { duration: 0, scaleX: 0, xPercent: -100, opacity: 0.8 });
        }
        // вызов анимации при нажатии кнопки
        burger.addEventListener('click', navAnim);
        // вызов анимации при переходе по ссылке
        navLink.forEach((el) => {
          el.addEventListener('click', () => {
            if (burger.classList.contains('burger--active')) {
              navAnim();
            }
          });
        })
      }
    })
  }

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
      const dropdownItem = dropdownBox.querySelector('.dropdown__item')
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
    // закрытие доропдауна на нажатие не внутри дропдауна и не на кнопку
    document.addEventListener('click', (i) => {
      if (!i.target.classList.contains('dropdown__item')
      && !i.target.classList.contains('dropdown__box')
      && !i.target.classList.contains('dropdown__btn')) {
        document.querySelectorAll('.dropdown__box').forEach((el) => {
          el.classList.remove('active');
        });
        document.querySelectorAll('.dropdown__icon-svg').forEach((j) => {
          j.classList.remove('dropdown__icon-svg_active');
        })
      }
    })
});
// scrollbar dropdown
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
    disabledClass: 'swiper-btn-disabled',
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 14,
    },
    750: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    769: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 34,
    },
    1014: {
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
 const body = document.querySelector('body')
  function disableScroll() {
    let pagePosition = window.scrollY;
    body.classList.add('disable-scroll');
    body.dataset.position = pagePosition;
    body.style.top = -pagePosition + 'px'
  }
  function enableScroll() {
    let pagePosition = parseInt(body.dataset.position, 10);
    body.style.top = 'auto';
    body.classList.remove('disable-scroll');
    if (isNaN(pagePosition)) {
      pagePosition = window.scrollY;
    }
    console.log(pagePosition)
    console.log(isNaN(pagePosition))
    console.log(window.scrollY)
    window.scroll({top: pagePosition, left: 0});
    body.removeAttribute('data-position');
  }
  document.querySelectorAll('.gallery__slide').forEach((modalLink) => {
    modalLink.addEventListener('click', (event) => {
      const { path } = event.currentTarget.dataset;
      const modalObg = document.querySelector(`[data-target="${path}"]`);
      const btn = modalObg.querySelector('.modal__btn');
      document.querySelectorAll('.modal').forEach((tabContent) => {
        tabContent.classList.add('deactivate');
      });
      disableScroll()
      modalObg.classList.remove('deactivate');
      // закрытие на нажатие фона
      modalObg.addEventListener('click', (e) => {
        const modalOverlay = modalObg.querySelector('.modal__overlay');
        if (e.target === modalOverlay) {
          enableScroll()
          modalObg.classList.add('deactivate');
        }
      });
      // закрытие на нажатие кнопки
      btn.addEventListener('click', () => {
        enableScroll()
        modalObg.classList.add('deactivate');
      });
      // анимация появления окна
      if (!modalObg.classList.contains('deactivate')) {
        gsap.fromTo('.modal__box', { scaleX:0.5, scaleY:0.5, opacity: 0.8 }, { duration: 0.6, scaleX:1, scaleY:1, opacity: 1 });
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
  a11y: false,
  keyboard: true,
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  navigation: {
    prevEl: '.events__btn-prev',
    nextEl: '.events__btn-next',
    disabledClass: 'deactivate',

  },
  pagination: {
    el: '.events__pagination',
    clickable: true,
  },
  breakpoints: {
    568: {
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
  submitHandler: function(thisForm) {
    let formData = new FormData(thisForm);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    thisForm.reset();
  }
});
// contacts map
function init() {
  myMapLoad = true;
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
// частично отложенная загрузка карты
let myMapLoad = false;
document.addEventListener('DOMContentLoaded', () => {
  // Получаем нужный элемент
const element = document.querySelector('#map');
const Visible = function (target) {
  // Все позиции элемента
  const targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
    // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };
  if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
    targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
    targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
    // Если элемент полностью видно, то запускаем следующий код
    ymaps.ready(init);
    // даем понять что карта загружена
    myMapLoad = true;
    console.log('Карта подгрузилась');
  }
};
// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function() {
  if (myMapLoad !== true) {
    Visible (element);
  }
});
//запустим функцию сразу. А то вдруг, элемент изначально видно
Visible (element);
});