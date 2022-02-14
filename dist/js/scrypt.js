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
        (function() {
          nav.style.zIndex = 1;
          search.style.zIndex = 1;
          gsap.fromTo('.header__nav', { xPercent: -100, opacity: 0.8 }, { duration: 0, scaleX: 1, xPercent: 0, opacity: 1 });
        }());
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
document.addEventListener('DOMContentLoaded', () => {
  // Получаем нужный элемент
const element = document.querySelector('#map');
let myMapLoad = false;
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
    console.log('Карта подгрузилась');
  }
};
// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function() {
  if (myMapLoad !== true) {
    Visible (element);
  }
});
// А также запустим функцию сразу. А то вдруг, элемент изначально видно
Visible (element);
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3J5cHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8vIGhlYWRlcnNcbi8vINCw0L3QuNC80LDRhtC40Y8gbmF2XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyJyk7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX25hdicpO1xuICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLXRvZ2dsZScpO1xuICBjb25zdCBuYXZMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdl9fbGluaycpO1xuICBjb25zdCBtZWRpYUZ1bGxEZXNrdG9wID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDE0ODBweCknKVxuICBmdW5jdGlvbiBuYXZBbmltKCkge1xuICAgIC8vINC/0LXRgNC10LrQu9GO0YfQtdC90LjQtSDQsdGD0YDQs9C10YDQsFxuICAgIGJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdidXJnZXItLWFjdGl2ZScpO1xuICAgIC8vINC/0L7Rj9Cy0LvQtdC90LjQtSDQuCDRg9GF0L7QtCDQvNC10L3RjiDQvdCw0LLQuNCz0LDRhtC40LhcbiAgICBpZiAoYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucygnYnVyZ2VyLS1hY3RpdmUnKSkge1xuICAgICAgY2xlYXJUaW1lb3V0KHNldFRpbWVvdXQoKCk9PntuYXYuc3R5bGUuekluZGV4ID0gLTE7fSwgMCkpXG4gICAgICBzZWFyY2guc3R5bGUuekluZGV4ID0gMTtcbiAgICAgIG5hdi5zdHlsZS56SW5kZXggPSAyO1xuICAgICAgZ3NhcC5mcm9tVG8oJy5oZWFkZXJfX25hdicsIHsgeFBlcmNlbnQ6IC0xMDAsIG9wYWNpdHk6IDAuOCB9LCB7IGR1cmF0aW9uOiAxLCBzY2FsZVg6IDEsIHhQZXJjZW50OiAwLCBvcGFjaXR5OiAxIH0pO1xuICAgIH0gZWxzZSBpZiAoKCFidXJnZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdidXJnZXItLWFjdGl2ZScpKSkge1xuICAgICAgc2VhcmNoLnN0eWxlLnpJbmRleCA9IDQ7XG4gICAgICBnc2FwLmZyb21UbygnLmhlYWRlcl9fbmF2JywgeyB4UGVyY2VudDogMCwgb3BhY2l0eTogMSB9LCB7IGR1cmF0aW9uOiAxLCBzY2FsZVg6IDAsIHhQZXJjZW50OiAtMTAwLCBvcGFjaXR5OiAwLjggfSk7XG4gICAgICBzZXRUaW1lb3V0KCgpPT57bmF2LnN0eWxlLnpJbmRleCA9IC0xO30sIDYwMClcbiAgICB9XG4gIH1cbiAgLy8g0J/RgNC+0YDQsNCx0L7RgtC60LAg0YTRg9C90LrRhtC40Lkg0L/RgNC4INC30LDQs9GA0YPQt9C60LUg0YHRgtGA0LDQvdC40YbRiyDQsiDQv9C10YDQstGL0Lkg0YDQsNC3XG4gIC8vINCy0YvQt9C+0LIg0LDQvdC40LzQsNGG0LjQuCDQv9GA0Lgg0L3QsNC20LDRgtC40Lgg0LrQvdC+0L/QutC4XG4gIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5hdkFuaW0pO1xuICAvLyDQstGL0LfQvtCyINCw0L3QuNC80LDRhtC40Lgg0L/RgNC4INC/0LXRgNC10YXQvtC00LUg0L/QviDRgdGB0YvQu9C60LVcbiAgbmF2TGluay5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKGJ1cmdlci5jbGFzc0xpc3QuY29udGFpbnMoJ2J1cmdlci0tYWN0aXZlJykpIHtcbiAgICAgICAgbmF2QW5pbSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KVxuICAvLyDQv9GA0L7QstC10YDQutCwINC/0L4g0LzQtdC00LjQsNC30LDQv9GA0L7RgdGDLCDQvdCwINC40LfQvNC10L3QtdC90LjRjyAo0L/QtdGA0LXQstC+0YDQvtGCINGN0LrRgNCw0L3QsCwg0YPQvNC10L3RjNGI0LDRgiDQvtC60L3QviDQsdGA0LDRg9C30LXRgNCwINC4INGC0LQpXG4gIGlmIChtYXRjaE1lZGlhKSB7XG4gICAgLy8g0LjQt9C80LXQtdC90LjRjyDRjdC60YDQsNC90LBcbiAgICBtZWRpYUZ1bGxEZXNrdG9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIC8vINC10YHQu9C4INCx0L7Qu9GM0YjQtSAxNDgwcHgsINGC0L4g0LLRi9C30L7QsiBJSUZFLCDQsiDQutC+0YLQvtGA0L7QuSDRgdCx0YDQsNGB0YvQstCw0Y7RgtGB0Y8g0LLRgdC1INC30L3QsNGH0LXQvdC40Y8g0L3QsNCy0LjQs9Cw0YbQuNC4INGH0YLQviDQvdCw0LrQuNC00LDQvdGLINCw0L3QuNC80LDRhtC40LXQuVxuICAgICAgaWYgKG1lZGlhRnVsbERlc2t0b3AubWF0Y2hlcykge1xuICAgICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbmF2LnN0eWxlLnpJbmRleCA9IDE7XG4gICAgICAgICAgc2VhcmNoLnN0eWxlLnpJbmRleCA9IDE7XG4gICAgICAgICAgZ3NhcC5mcm9tVG8oJy5oZWFkZXJfX25hdicsIHsgeFBlcmNlbnQ6IC0xMDAsIG9wYWNpdHk6IDAuOCB9LCB7IGR1cmF0aW9uOiAwLCBzY2FsZVg6IDEsIHhQZXJjZW50OiAwLCBvcGFjaXR5OiAxIH0pO1xuICAgICAgICB9KCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g0LjQvdCw0YfQtSDQstC+0LfQstGA0LDRidCw0LXQvCDRgdC+0YHRgtC+0Y/QvdC40LUg0LrQvtGC0L7RgNC+0LUg0LHRi9C70L4g0YMg0YHRgtGA0LDQvdC40YbRi1xuICAgICAgICBpZiAoKCFidXJnZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdidXJnZXItLWFjdGl2ZScpKSkge1xuICAgICAgICAgIHNlYXJjaC5zdHlsZS56SW5kZXggPSA0O1xuICAgICAgICAgIG5hdi5zdHlsZS56SW5kZXggPSAtMTtcbiAgICAgICAgICBnc2FwLmZyb21UbygnLmhlYWRlcl9fbmF2JywgeyB4UGVyY2VudDogMCwgb3BhY2l0eTogMSB9LCB7IGR1cmF0aW9uOiAwLCBzY2FsZVg6IDAsIHhQZXJjZW50OiAtMTAwLCBvcGFjaXR5OiAwLjggfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g0LLRi9C30L7QsiDQsNC90LjQvNCw0YbQuNC4INC/0YDQuCDQvdCw0LbQsNGC0LjQuCDQutC90L7Qv9C60LhcbiAgICAgICAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmF2QW5pbSk7XG4gICAgICAgIC8vINCy0YvQt9C+0LIg0LDQvdC40LzQsNGG0LjQuCDQv9GA0Lgg0L/QtdGA0LXRhdC+0LTQtSDQv9C+INGB0YHRi9C70LrQtVxuICAgICAgICBuYXZMaW5rLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucygnYnVyZ2VyLS1hY3RpdmUnKSkge1xuICAgICAgICAgICAgICBuYXZBbmltKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufSk7XG5cbi8vIHNlYXJjaFxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc3QgYnRuVG9nZ2xlU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC10b2dnbGUnKTtcbiAgY29uc3QgYnRuU3ZnT3BlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUtb3BlbicpO1xuICBjb25zdCBidG5TdmdDbG9zZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlLWNsb3NlZCcpO1xuICBidG5Ub2dnbGVTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGJ0blN2Z09wZW4uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgYnRuU3ZnQ2xvc2VkLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIC8vINC/0L7Rj9Cy0LvQtdC90LjQtSDQv9C+0LjRgdC60LBcbiAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgLy8g0LDQvdC40LzQsNGG0LjRjyDQv9C+0LjRgdC60LBcbiAgICBpZiAoYnRuVG9nZ2xlU2VhcmNoLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgIGdzYXAuZnJvbVRvKCcuaGVhZGVyX19zZWFyY2gnLCB7IHNjYWxlWDogMCwgeFBlcmNlbnQ6IC01MCwgb3BhY2l0eTogMC44IH0sIHsgZHVyYXRpb246IDAuNiwgc2NhbGVYOiAxLCB4UGVyY2VudDogLTAsIG9wYWNpdHk6IDEgfSk7XG4gICAgfSBlbHNlIGlmICgoIWJ0blRvZ2dsZVNlYXJjaC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSkge1xuICAgICAgZ3NhcC5mcm9tVG8oJy5oZWFkZXJfX3NlYXJjaCcsIHsgc2NhbGVYOiAxLCB4UGVyY2VudDogMCwgb3BhY2l0eTogMSB9LCB7IGR1cmF0aW9uOiAwLjYsIHNjYWxlWDogMCwgeFBlcmNlbnQ6IC01MCwgb3BhY2l0eTogMC44IH0pO1xuICAgIH1cbiAgfSk7XG59KTtcbi8vIGRyb3Bkb3duXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd25fX2J0bicpLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXRoIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgICBjb25zdCBkcm9wZG93bkJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhcmdldD1cIiR7cGF0aH1cIl1gKTtcbiAgICAgIGNvbnN0IGRyb3Bkb3duSXRlbSA9IGRyb3Bkb3duQm94LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bl9faXRlbScpXG4gICAgICAvLyDQv9C10YDQtdCy0L7RgNCw0YfQuNCy0LDQtdC8INGB0YLRgNC10LvQvtGH0LrRgyDQv9GA0Lgg0LrQu9C40LrQtVxuICAgICAgY29uc3QgaWNvbiA9IGJ0bi5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd25fX2ljb24tc3ZnJyk7XG4gICAgICAvLyDQt9Cw0LrRgNGL0LLQsNC10Lwg0LLRgdC1INGB0L/QuNGB0LrQuCDQuCDQv9C10YDQtdC60LvRjtGH0LDQtdC8INC90LDQttCw0YLRi9C5XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd25fX2JveCcpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGlmIChkcm9wZG93bkJveCAhPT0gZWwpIHtcbiAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd25fX2ljb24tc3ZnJykuZm9yRWFjaCgoaikgPT4ge1xuICAgICAgICBpZiAoaWNvbiAhPT0gaikge1xuICAgICAgICAgIGouY2xhc3NMaXN0LnJlbW92ZSgnZHJvcGRvd25fX2ljb24tc3ZnX2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdkcm9wZG93bl9faWNvbi1zdmdfYWN0aXZlJyk7XG4gICAgICBkcm9wZG93bkJveC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIC8vINC30LDQutGA0YvRgtC40LUg0LTQvtGA0L7Qv9C00LDRg9C90LAg0L3QsCDQvdCw0LbQsNGC0LjQtSDQvdC1INCy0L3Rg9GC0YDQuCDQtNGA0L7Qv9C00LDRg9C90LAg0Lgg0L3QtSDQvdCwINC60L3QvtC/0LrRg1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGkpID0+IHtcbiAgICAgIGlmICghaS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkcm9wZG93bl9faXRlbScpXG4gICAgICAmJiAhaS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkcm9wZG93bl9fYm94JylcbiAgICAgICYmICFpLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Ryb3Bkb3duX19idG4nKSkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd25fX2JveCcpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd25fX2ljb24tc3ZnJykuZm9yRWFjaCgoaikgPT4ge1xuICAgICAgICAgIGouY2xhc3NMaXN0LnJlbW92ZSgnZHJvcGRvd25fX2ljb24tc3ZnX2FjdGl2ZScpO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG59KTtcbi8vIHNjcm9sbGJhclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duX19zY3JvbGxiYXInKS5mb3JFYWNoKChlbCkgPT4ge1xuICBuZXcgU2ltcGxlQmFyKGVsLCB7XG4gICAgc2Nyb2xsYmFyTWF4U2l6ZTogNDAsXG4gIH0pO1xufSk7XG4vLyB0b3Atd3JhcC1zd2lwZXJcbmNvbnN0IHN3aXBlckhlcm8gPSBuZXcgU3dpcGVyKCcudG9wLXdyYXBfX3N3aXBlcicsIHtcbiAgYWxsb3dUb3VjaE1vdmU6IGZhbHNlLFxuICBsb29wOiB0cnVlLFxuICBlZmZlY3Q6ICdmYWRlJyxcbiAgc3BlZWQ6IDEwMDAwLFxuICBhdXRvcGxheToge1xuICAgIGRlbGF5OiAxMDAwMCxcbiAgfSxcbn0pO1xuLy8gZ2FsbGVyeVxuLy8gc3dpcGVyLWdhbGxlcnlcbmNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5nYWxsZXJ5X19zd2lwZXInLCB7XG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIGdyaWQ6IHtcbiAgICByb3dzOiAxLFxuICAgIGZpbGw6ICdyb3cnLFxuICB9LFxuICBzcGFjZUJldHdlZW46IDIwLFxuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6ICcuZ2FsbGVyeV9fcGFnaW5hdGlvbicsXG4gICAgdHlwZTogJ2ZyYWN0aW9uJyxcbiAgfSxcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogJy5nYWxsZXJ5X19idG4tbmV4dCcsXG4gICAgcHJldkVsOiAnLmdhbGxlcnlfX2J0bi1wcmV2JyxcbiAgICBkaXNhYmxlZENsYXNzOiAnc3dpcGVyLWJ0bi1kaXNhYmxlZCcsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgNDgwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDIsXG4gICAgICBzcGFjZUJldHdlZW46IDE0LFxuICAgIH0sXG4gICAgNzUwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDIsXG4gICAgICBzcGFjZUJldHdlZW46IDM0LFxuICAgIH0sXG4gICAgNzY5OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDMsXG4gICAgICBzcGFjZUJldHdlZW46IDM0LFxuICAgIH0sXG4gICAgMTAxNDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIHNsaWRlc1Blckdyb3VwOiAyLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAzNCxcbiAgICB9LFxuICAgIDE0ODA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICBzbGlkZXNQZXJHcm91cDogNixcbiAgICAgIHNwYWNlQmV0d2VlbjogNTAsXG4gICAgfSxcbiAgfSxcbiAgYTExeTogZmFsc2UsXG4gIGtleWJvYXJkOiB0cnVlLFxuICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICB3YXRjaFNsaWRlc1Zpc2liaWxpdHk6IHRydWUsXG4gIHNsaWRlVmlzaWJsZUNsYXNzOiAnc2xpZGUtdmlzaWJsZScsXG4gIG9uOiB7XG4gICAgaW5pdCgpIHtcbiAgICAgIHRoaXMuc2xpZGVzLmZvckVhY2goKHNsaWRlKSA9PiB7XG4gICAgICAgIGlmICghc2xpZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZS12aXNpYmxlJykpIHtcbiAgICAgICAgICBzbGlkZS50YWJJbmRleCA9ICctMSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2xpZGUudGFiSW5kZXggPSAnJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgICBzbGlkZUNoYW5nZSgpIHtcbiAgICAgIHRoaXMuc2xpZGVzLmZvckVhY2goKHNsaWRlKSA9PiB7XG4gICAgICAgIGlmICghc2xpZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZS12aXNpYmxlJykpIHtcbiAgICAgICAgICBzbGlkZS50YWJJbmRleCA9ICctMSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2xpZGUudGFiSW5kZXggPSAnJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSxcbiAgfSxcbn0pO1xuLy8gc2VsZWN0LWdhbGxlcnlcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdCcpO1xuICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgY2hvaWNlcyA9IG5ldyBDaG9pY2VzKGVsZW1lbnQsIHtcbiAgICAgIHNlYXJjaEVuYWJsZWQ6IGZhbHNlLFxuICAgICAgcG9zaXRpb246ICdib3R0b20nLFxuICAgICAgc2hvdWxkU29ydDogZmFsc2UsXG4gICAgICBpdGVtU2VsZWN0VGV4dDogJycsXG4gICAgfSk7XG4gIH0pO1xufSk7XG5cbi8vIG1vZGFsIGdhbGxlcnlcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuICBmdW5jdGlvbiBkaXNhYmxlU2Nyb2xsKCkge1xuICAgIGxldCBwYWdlUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGUtc2Nyb2xsJyk7XG4gICAgYm9keS5kYXRhc2V0LnBvc2l0aW9uID0gcGFnZVBvc2l0aW9uO1xuICAgIGJvZHkuc3R5bGUudG9wID0gLXBhZ2VQb3NpdGlvbiArICdweCdcbiAgfVxuICBmdW5jdGlvbiBlbmFibGVTY3JvbGwoKSB7XG4gICAgbGV0IHBhZ2VQb3NpdGlvbiA9IHBhcnNlSW50KGJvZHkuZGF0YXNldC5wb3NpdGlvbiwgMTApO1xuICAgIGJvZHkuc3R5bGUudG9wID0gJ2F1dG8nO1xuICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZS1zY3JvbGwnKTtcbiAgICBpZiAoaXNOYU4ocGFnZVBvc2l0aW9uKSkge1xuICAgICAgcGFnZVBvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHBhZ2VQb3NpdGlvbilcbiAgICBjb25zb2xlLmxvZyhpc05hTihwYWdlUG9zaXRpb24pKVxuICAgIGNvbnNvbGUubG9nKHdpbmRvdy5zY3JvbGxZKVxuICAgIHdpbmRvdy5zY3JvbGwoe3RvcDogcGFnZVBvc2l0aW9uLCBsZWZ0OiAwfSk7XG4gICAgYm9keS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtcG9zaXRpb24nKTtcbiAgfVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FsbGVyeV9fc2xpZGUnKS5mb3JFYWNoKChtb2RhbExpbmspID0+IHtcbiAgICBtb2RhbExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHsgcGF0aCB9ID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgICAgY29uc3QgbW9kYWxPYmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXJnZXQ9XCIke3BhdGh9XCJdYCk7XG4gICAgICBjb25zdCBidG4gPSBtb2RhbE9iZy5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2J0bicpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsJykuZm9yRWFjaCgodGFiQ29udGVudCkgPT4ge1xuICAgICAgICB0YWJDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2RlYWN0aXZhdGUnKTtcbiAgICAgIH0pO1xuICAgICAgZGlzYWJsZVNjcm9sbCgpXG4gICAgICBtb2RhbE9iZy5jbGFzc0xpc3QucmVtb3ZlKCdkZWFjdGl2YXRlJyk7XG4gICAgICAvLyDQt9Cw0LrRgNGL0YLQuNC1INC90LAg0L3QsNC20LDRgtC40LUg0YTQvtC90LBcbiAgICAgIG1vZGFsT2JnLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgbW9kYWxPdmVybGF5ID0gbW9kYWxPYmcucXVlcnlTZWxlY3RvcignLm1vZGFsX19vdmVybGF5Jyk7XG4gICAgICAgIGlmIChlLnRhcmdldCA9PT0gbW9kYWxPdmVybGF5KSB7XG4gICAgICAgICAgZW5hYmxlU2Nyb2xsKClcbiAgICAgICAgICBtb2RhbE9iZy5jbGFzc0xpc3QuYWRkKCdkZWFjdGl2YXRlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8g0LfQsNC60YDRi9GC0LjQtSDQvdCwINC90LDQttCw0YLQuNC1INC60L3QvtC/0LrQuFxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBlbmFibGVTY3JvbGwoKVxuICAgICAgICBtb2RhbE9iZy5jbGFzc0xpc3QuYWRkKCdkZWFjdGl2YXRlJyk7XG4gICAgICB9KTtcbiAgICAgIC8vINCw0L3QuNC80LDRhtC40Y8g0L/QvtGP0LLQu9C10L3QuNGPINC+0LrQvdCwXG4gICAgICBpZiAoIW1vZGFsT2JnLmNsYXNzTGlzdC5jb250YWlucygnZGVhY3RpdmF0ZScpKSB7XG4gICAgICAgIGdzYXAuZnJvbVRvKCcubW9kYWxfX2JveCcsIHsgc2NhbGVYOjAuNiwgc2NhbGVZOjAuNCwgb3BhY2l0eTogMC44IH0sIHsgZHVyYXRpb246IDAuNiwgc2NhbGVYOjEsIHNjYWxlWToxLCBvcGFjaXR5OiAxIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn0pO1xuLy8gbW9kYWwgc2Nyb2xsXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWxfX2JveCcpLmZvckVhY2goKGVsKSA9PiB7XG4gIG5ldyBTaW1wbGVCYXIoZWwsIHtcbiAgICBzY3JvbGxiYXJNYXhTaXplOiA0MCxcbiAgfSk7XG59KTtcbi8vIGNhdGFsb2dcbi8vIHRhYlxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbl9fbGluaycpLmZvckVhY2goKHRhYkxpbmspID0+IHtcbiAgICB0YWJMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IHBhdGggfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb25fX2xpbmsnKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY2NvcmRpb25fX2xpbmtfYWN0aXZlJyk7XG4gICAgICB9KTtcbiAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LmFkZCgnYWNjb3JkaW9uX19saW5rX2FjdGl2ZScpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYl9faXRlbScpLmZvckVhY2goKHRhYkNvbnRlbnQpID0+IHtcbiAgICAgICAgdGFiQ29udGVudC5jbGFzc0xpc3QuYWRkKCdkZWFjdGl2YXRlJyk7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhcmdldD1cIiR7cGF0aH1cIl1gKS5jbGFzc0xpc3QucmVtb3ZlKCdkZWFjdGl2YXRlJyk7XG4gICAgICAvLyDQsNC90LjQvNCw0YbQuNGPINC00LvRjyDQv9C+0Y/QstC70LXQvdC40Y9cbiAgICAgIGdzYXAuZnJvbVRvKCcudGFiX19pdGVtJywgeyBvcGFjaXR5OiAwIH0sIHsgZHVyYXRpb246IDAuOCwgb3BhY2l0eTogMSB9KTtcbiAgICB9KTtcbiAgfSk7XG59KTtcbi8vIGFjY29yZGlvblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgbmV3IEFjY29yZGlvbignLmpzLWFjY29yZGlvbi1jb250YWluZXInLCB7XG4gICAgb3Blbk9uSW5pdDogWzBdLFxuICB9KTtcbn0pO1xuLy8gc3dpcGVyLWV2ZW50c1xuY29uc3Qgc3dpcGVyRXZlbnRzID0gbmV3IFN3aXBlcignLmV2ZW50c19fc3dpcGVyJywge1xuICBzbGlkZXNQZXJWaWV3OiAxLFxuICBncmlkOiB7XG4gICAgcm93czogMSxcbiAgICBmaWxsOiAncm93JyxcbiAgfSxcbiAgbG9vcDogdHJ1ZSxcbiAgYTExeTogZmFsc2UsXG4gIGtleWJvYXJkOiB0cnVlLFxuICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICB3YXRjaFNsaWRlc1Zpc2liaWxpdHk6IHRydWUsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6ICcuZXZlbnRzX19idG4tbmV4dCcsXG4gIH0sXG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogJy5ldmVudHNfX3BhZ2luYXRpb24nLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICA1Njg6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzbGlkZXNQZXJHcm91cDogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogMzQsXG4gICAgfSxcbiAgICA5OTI6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICBzbGlkZXNQZXJHcm91cDogMyxcbiAgICAgIHNwYWNlQmV0d2VlbjogMjQsXG4gICAgfSxcbiAgICAxNDgwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDMsXG4gICAgICBzcGFjZUJldHdlZW46IDUyLFxuICAgIH0sXG4gIH0sXG59KTtcbi8vIHN3aXBlci1wcm9nZWN0c1xuY29uc3Qgc3dpcGVyUHJvZ2VjdHMgPSBuZXcgU3dpcGVyKCcucHJvZ2VjdHNfX3N3aXBlcicsIHtcbiAgc2xpZGVzUGVyVmlldzogMSxcbiAgZ3JpZDoge1xuICAgIHJvd3M6IDEsXG4gICAgZmlsbDogJ3JvdycsXG4gIH0sXG4gIG5hdmlnYXRpb246IHtcbiAgICBwcmV2RWw6ICcucHJvZ2VjdHNfX2J0bl9wcmV2JyxcbiAgICBuZXh0RWw6ICcucHJvZ2VjdHNfX2J0bl9uZXh0JyxcbiAgICBkaXNhYmxlZENsYXNzOiAnc3dpcGVyLWJ0bi1kaXNhYmxlZC1saWdodCcsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgNzUwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAzNCxcbiAgICB9LFxuICAgIDc2OToge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogNTAsXG4gICAgfSxcbiAgICAxNDgwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgc3BhY2VCZXR3ZWVuOiA1MCxcbiAgICB9LFxuICB9LFxuXG59KTtcbi8vIHRvb2x0aXBcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIHRpcHB5KCcuanMtdG9vbHRpcCcsIHtcbiAgICBtYXhXaWR0aDogMjY0LFxuICAgIHRoZW1lOiAnY2FzdG9tLXRvb2x0aXAnLFxuICB9KTtcbn0pO1xuLy8gY29udGFjdHNcbi8vIGNvbnRhY3RzIGZvcm1cbmNvbnN0IHNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGU9J3RlbCddXCIpO1xuY29uc3QgaW0gPSBuZXcgSW5wdXRtYXNrKCcrNyAoOTk5KS05OTktOTktOTknKTtcbmltLm1hc2soc2VsZWN0b3IpO1xubmV3IEp1c3RWYWxpZGF0ZSgnLmZvcm0nLCB7XG4gIHJ1bGVzOiB7XG4gICAgbmFtZToge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBtaW5MZW5ndGg6IDIsXG4gICAgICBtYXhMZW5ndGg6IDI0LFxuICAgIH0sXG4gICAgdGVsOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIHN0cmVuZ3RoOiB7IGN1c3RvbTogJ1teX10kJyB9LFxuICAgIH0sXG4gIH0sXG4gIG1lc3NhZ2VzOiB7XG4gICAgbmFtZToge1xuICAgICAgcmVxdWlyZWQ6ICfQmtCw0Log0LLQsNGBINC30L7QstGD0YI/JyxcbiAgICAgIG1pbkxlbmd0aDogJ9Ca0L7RgNC+0YLQutC+0LUg0LjQvNGPJyxcbiAgICAgIG1heExlbmd0aDogJ9CU0LvQuNC90L3QvtC1INC40LzRjycsXG4gICAgfSxcbiAgICB0ZWw6ICfQo9C60LDQttC40YLQtSDQstCw0Ygg0YLQtdC70LXRhNC+0L0nLFxuICB9LFxufSk7XG4vLyBjb250YWN0cyBtYXBcbmZ1bmN0aW9uIGluaXQoKSB7XG4gIG15TWFwTG9hZCA9IHRydWU7XG4gIGNvbnN0IG15TWFwID0gbmV3IHltYXBzLk1hcCgnbWFwJywge1xuICAgIGNlbnRlcjogWzU1Ljc1ODQ2OCwgMzcuNjAxMDg4XSxcbiAgICB6b29tOiAxNSxcbiAgICBjb250cm9sczogWydnZW9sb2NhdGlvbkNvbnRyb2wnLCAnem9vbUNvbnRyb2wnXSxcbiAgfSxcbiAge1xuICAgIHN1cHByZXNzTWFwT3BlbkJsb2NrOiB0cnVlLFxuICAgIGdlb2xvY2F0aW9uQ29udHJvbFNpemU6IFwibGFyZ2VcIixcbiAgICBnZW9sb2NhdGlvbkNvbnRyb2xQb3NpdGlvbjogIHsgdG9wOiBcIjIwMHB4XCIsIHJpZ2h0OiBcIjIwcHhcIiB9LFxuICAgIGdlb2xvY2F0aW9uQ29udHJvbEZsb2F0OiAnbm9uZScsXG4gICAgem9vbUNvbnRyb2xTaXplOiBcInNtYWxsXCIsXG4gICAgem9vbUNvbnRyb2xGbG9hdDogXCJub25lXCIsXG4gICAgem9vbUNvbnRyb2xQb3NpdGlvbjogeyB0b3A6IFwiMTIwcHhcIiwgcmlnaHQ6IFwiMjBweFwiIH1cbiAgfSk7XG4gIGNvbnN0IG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhbNTUuNzU4NDY4LCAzNy42MDEwODhdLCB7fSwge1xuICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcbiAgICBpY29uSW1hZ2VIcmVmOiAnaW1nL2dlb09iamVjdC5zdmcnLFxuICAgIGljb25JbWFnZVNpemU6IFsyMCwgMjBdLFxuICB9KTtcbiAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xuICAvLyDQvtGC0LrQu9GO0YfQuNGC0Ywg0LfRg9C8XG4gIG15TWFwLmJlaGF2aW9ycy5kaXNhYmxlKCdzY3JvbGxab29tJyk7XG59XG4vLyDQv9C70LDQstC90YvQuSDRgdC60YDQvtC70LtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1zY3JvbGwtbGluaycpLmZvckVhY2gobGluayA9PiB7XG4gIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICBjb25zdCBocmVmID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKS5zdWJzdHJpbmcoMSk7XG4gICAgICBjb25zdCBzY3JvbGxUYXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChocmVmKTtcbiAgICAgIGNvbnN0IGVsZW1lbnRQb3NpdGlvbiA9IHNjcm9sbFRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB3aW5kb3cuc2Nyb2xsQnkoe1xuICAgICAgICAgIHRvcDogZWxlbWVudFBvc2l0aW9uLFxuICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgfSk7XG4gIH0pO1xufSk7XG4vLyDRh9Cw0YHRgtC40YfQvdC+INC+0YLQu9C+0LbQtdC90L3QsNGPINC30LDQs9GA0YPQt9C60LAg0LrQsNGA0YLRi1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgLy8g0J/QvtC70YPRh9Cw0LXQvCDQvdGD0LbQvdGL0Lkg0Y3Qu9C10LzQtdC90YJcbmNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFwJyk7XG5sZXQgbXlNYXBMb2FkID0gZmFsc2U7XG5jb25zdCBWaXNpYmxlID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAvLyDQktGB0LUg0L/QvtC30LjRhtC40Lgg0Y3Qu9C10LzQtdC90YLQsFxuICBjb25zdCB0YXJnZXRQb3NpdGlvbiA9IHtcbiAgICAgIHRvcDogd2luZG93LnBhZ2VZT2Zmc2V0ICsgdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCxcbiAgICAgIGxlZnQ6IHdpbmRvdy5wYWdlWE9mZnNldCArIHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LFxuICAgICAgcmlnaHQ6IHdpbmRvdy5wYWdlWE9mZnNldCArIHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5yaWdodCxcbiAgICAgIGJvdHRvbTogd2luZG93LnBhZ2VZT2Zmc2V0ICsgdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbVxuICAgIH0sXG4gICAgLy8g0J/QvtC70YPRh9Cw0LXQvCDQv9C+0LfQuNGG0LjQuCDQvtC60L3QsFxuICAgIHdpbmRvd1Bvc2l0aW9uID0ge1xuICAgICAgdG9wOiB3aW5kb3cucGFnZVlPZmZzZXQsXG4gICAgICBsZWZ0OiB3aW5kb3cucGFnZVhPZmZzZXQsXG4gICAgICByaWdodDogd2luZG93LnBhZ2VYT2Zmc2V0ICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLFxuICAgICAgYm90dG9tOiB3aW5kb3cucGFnZVlPZmZzZXQgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gICAgfTtcbiAgaWYgKHRhcmdldFBvc2l0aW9uLmJvdHRvbSA+IHdpbmRvd1Bvc2l0aW9uLnRvcCAmJiAvLyDQldGB0LvQuCDQv9C+0LfQuNGG0LjRjyDQvdC40LbQvdC10Lkg0YfQsNGB0YLQuCDRjdC70LXQvNC10L3RgtCwINCx0L7Qu9GM0YjQtSDQv9C+0LfQuNGG0LjQuCDQstC10YDRhdC90LXQuSDRh9Cw0LnRgtC4INC+0LrQvdCwLCDRgtC+INGN0LvQtdC80LXQvdGCINCy0LjQtNC10L0g0YHQstC10YDRhdGDXG4gICAgdGFyZ2V0UG9zaXRpb24udG9wIDwgd2luZG93UG9zaXRpb24uYm90dG9tICYmIC8vINCV0YHQu9C4INC/0L7Qt9C40YbQuNGPINCy0LXRgNGF0L3QtdC5INGH0LDRgdGC0Lgg0Y3Qu9C10LzQtdC90YLQsCDQvNC10L3RjNGI0LUg0L/QvtC30LjRhtC40Lgg0L3QuNC20L3QtdC5INGH0LDQudGC0Lgg0L7QutC90LAsINGC0L4g0Y3Qu9C10LzQtdC90YIg0LLQuNC00LXQvSDRgdC90LjQt9GDXG4gICAgdGFyZ2V0UG9zaXRpb24ucmlnaHQgPiB3aW5kb3dQb3NpdGlvbi5sZWZ0ICYmIC8vINCV0YHQu9C4INC/0L7Qt9C40YbQuNGPINC/0YDQsNCy0L7QuSDRgdGC0L7RgNC+0L3RiyDRjdC70LXQvNC10L3RgtCwINCx0L7Qu9GM0YjQtSDQv9C+0LfQuNGG0LjQuCDQu9C10LLQvtC5INGH0LDRgdGC0Lgg0L7QutC90LAsINGC0L4g0Y3Qu9C10LzQtdC90YIg0LLQuNC00LXQvSDRgdC70LXQstCwXG4gICAgdGFyZ2V0UG9zaXRpb24ubGVmdCA8IHdpbmRvd1Bvc2l0aW9uLnJpZ2h0KSB7IC8vINCV0YHQu9C4INC/0L7Qt9C40YbQuNGPINC70LXQstC+0Lkg0YHRgtC+0YDQvtC90Ysg0Y3Qu9C10LzQtdC90YLQsCDQvNC10L3RjNGI0LUg0L/QvtC30LjRhtC40Lgg0L/RgNCw0LLQvtC5INGH0LDQudGC0Lgg0L7QutC90LAsINGC0L4g0Y3Qu9C10LzQtdC90YIg0LLQuNC00LXQvSDRgdC/0YDQsNCy0LBcbiAgICAvLyDQldGB0LvQuCDRjdC70LXQvNC10L3RgiDQv9C+0LvQvdC+0YHRgtGM0Y4g0LLQuNC00L3Qviwg0YLQviDQt9Cw0L/Rg9GB0LrQsNC10Lwg0YHQu9C10LTRg9GO0YnQuNC5INC60L7QtFxuICAgIHltYXBzLnJlYWR5KGluaXQpO1xuICAgIGNvbnNvbGUubG9nKCfQmtCw0YDRgtCwINC/0L7QtNCz0YDRg9C30LjQu9Cw0YHRjCcpO1xuICB9XG59O1xuLy8g0JfQsNC/0YPRgdC60LDQtdC8INGE0YPQvdC60YbQuNGOINC/0YDQuCDQv9GA0L7QutGA0YPRgtC60LUg0YHRgtGA0LDQvdC40YbRi1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xuICBpZiAobXlNYXBMb2FkICE9PSB0cnVlKSB7XG4gICAgVmlzaWJsZSAoZWxlbWVudCk7XG4gIH1cbn0pO1xuLy8g0JAg0YLQsNC60LbQtSDQt9Cw0L/Rg9GB0YLQuNC8INGE0YPQvdC60YbQuNGOINGB0YDQsNC30YMuINCQINGC0L4g0LLQtNGA0YPQsywg0Y3Qu9C10LzQtdC90YIg0LjQt9C90LDRh9Cw0LvRjNC90L4g0LLQuNC00L3QvlxuVmlzaWJsZSAoZWxlbWVudCk7XG59KTsiXSwiZmlsZSI6InNjcnlwdC5qcyJ9
