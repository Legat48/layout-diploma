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
// scrollbar nav
document.querySelectorAll('.nav').forEach((el) => {
  new SimpleBar(el, {
    scrollbarMaxSize: 40,
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3J5cHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8vIGhlYWRlcnNcbi8vINCw0L3QuNC80LDRhtC40Y8gbmF2XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyJyk7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX25hdicpO1xuICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLXRvZ2dsZScpO1xuICBjb25zdCBuYXZMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdl9fbGluaycpO1xuICBjb25zdCBtZWRpYUZ1bGxEZXNrdG9wID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDE0ODBweCknKVxuICBmdW5jdGlvbiBuYXZBbmltKCkge1xuICAgIC8vINC/0LXRgNC10LrQu9GO0YfQtdC90LjQtSDQsdGD0YDQs9C10YDQsFxuICAgIGJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdidXJnZXItLWFjdGl2ZScpO1xuICAgIC8vINC/0L7Rj9Cy0LvQtdC90LjQtSDQuCDRg9GF0L7QtCDQvNC10L3RjiDQvdCw0LLQuNCz0LDRhtC40LhcbiAgICBpZiAoYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucygnYnVyZ2VyLS1hY3RpdmUnKSkge1xuICAgICAgY2xlYXJUaW1lb3V0KHNldFRpbWVvdXQoKCk9PntuYXYuc3R5bGUuekluZGV4ID0gLTE7fSwgMCkpXG4gICAgICBzZWFyY2guc3R5bGUuekluZGV4ID0gMTtcbiAgICAgIG5hdi5zdHlsZS56SW5kZXggPSAyO1xuICAgICAgZ3NhcC5mcm9tVG8oJy5oZWFkZXJfX25hdicsIHsgeFBlcmNlbnQ6IC0xMDAsIG9wYWNpdHk6IDAuOCB9LCB7IGR1cmF0aW9uOiAxLCBzY2FsZVg6IDEsIHhQZXJjZW50OiAwLCBvcGFjaXR5OiAxIH0pO1xuICAgIH0gZWxzZSBpZiAoKCFidXJnZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdidXJnZXItLWFjdGl2ZScpKSkge1xuICAgICAgc2VhcmNoLnN0eWxlLnpJbmRleCA9IDQ7XG4gICAgICBnc2FwLmZyb21UbygnLmhlYWRlcl9fbmF2JywgeyB4UGVyY2VudDogMCwgb3BhY2l0eTogMSB9LCB7IGR1cmF0aW9uOiAxLCBzY2FsZVg6IDAsIHhQZXJjZW50OiAtMTAwLCBvcGFjaXR5OiAwLjggfSk7XG4gICAgICBzZXRUaW1lb3V0KCgpPT57bmF2LnN0eWxlLnpJbmRleCA9IC0xO30sIDYwMClcbiAgICB9XG4gIH1cbiAgLy8g0J/RgNC+0YDQsNCx0L7RgtC60LAg0YTRg9C90LrRhtC40Lkg0L/RgNC4INC30LDQs9GA0YPQt9C60LUg0YHRgtGA0LDQvdC40YbRiyDQsiDQv9C10YDQstGL0Lkg0YDQsNC3XG4gIC8vINCy0YvQt9C+0LIg0LDQvdC40LzQsNGG0LjQuCDQv9GA0Lgg0L3QsNC20LDRgtC40Lgg0LrQvdC+0L/QutC4XG4gIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5hdkFuaW0pO1xuICAvLyDQstGL0LfQvtCyINCw0L3QuNC80LDRhtC40Lgg0L/RgNC4INC/0LXRgNC10YXQvtC00LUg0L/QviDRgdGB0YvQu9C60LVcbiAgbmF2TGluay5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKGJ1cmdlci5jbGFzc0xpc3QuY29udGFpbnMoJ2J1cmdlci0tYWN0aXZlJykpIHtcbiAgICAgICAgbmF2QW5pbSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KVxuICAvLyDQv9GA0L7QstC10YDQutCwINC/0L4g0LzQtdC00LjQsNC30LDQv9GA0L7RgdGDLCDQvdCwINC40LfQvNC10L3QtdC90LjRjyAo0L/QtdGA0LXQstC+0YDQvtGCINGN0LrRgNCw0L3QsCwg0YPQvNC10L3RjNGI0LDRgiDQvtC60L3QviDQsdGA0LDRg9C30LXRgNCwINC4INGC0LQpXG4gIGlmIChtYXRjaE1lZGlhKSB7XG4gICAgLy8g0LjQt9C80LXQtdC90LjRjyDRjdC60YDQsNC90LBcbiAgICBtZWRpYUZ1bGxEZXNrdG9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIC8vINC10YHQu9C4INCx0L7Qu9GM0YjQtSAxNDgwcHgsINGC0L4g0LLRi9C30L7QsiBJSUZFLCDQsiDQutC+0YLQvtGA0L7QuSDRgdCx0YDQsNGB0YvQstCw0Y7RgtGB0Y8g0LLRgdC1INC30L3QsNGH0LXQvdC40Y8g0L3QsNCy0LjQs9Cw0YbQuNC4INGH0YLQviDQvdCw0LrQuNC00LDQvdGLINCw0L3QuNC80LDRhtC40LXQuVxuICAgICAgaWYgKG1lZGlhRnVsbERlc2t0b3AubWF0Y2hlcykge1xuICAgICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbmF2LnN0eWxlLnpJbmRleCA9IDE7XG4gICAgICAgICAgc2VhcmNoLnN0eWxlLnpJbmRleCA9IDE7XG4gICAgICAgICAgZ3NhcC5mcm9tVG8oJy5oZWFkZXJfX25hdicsIHsgeFBlcmNlbnQ6IC0xMDAsIG9wYWNpdHk6IDAuOCB9LCB7IGR1cmF0aW9uOiAwLCBzY2FsZVg6IDEsIHhQZXJjZW50OiAwLCBvcGFjaXR5OiAxIH0pO1xuICAgICAgICB9KCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8g0LjQvdCw0YfQtSDQstC+0LfQstGA0LDRidCw0LXQvCDRgdC+0YHRgtC+0Y/QvdC40LUg0LrQvtGC0L7RgNC+0LUg0LHRi9C70L4g0YMg0YHRgtGA0LDQvdC40YbRi1xuICAgICAgICBpZiAoKCFidXJnZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdidXJnZXItLWFjdGl2ZScpKSkge1xuICAgICAgICAgIHNlYXJjaC5zdHlsZS56SW5kZXggPSA0O1xuICAgICAgICAgIG5hdi5zdHlsZS56SW5kZXggPSAtMTtcbiAgICAgICAgICBnc2FwLmZyb21UbygnLmhlYWRlcl9fbmF2JywgeyB4UGVyY2VudDogMCwgb3BhY2l0eTogMSB9LCB7IGR1cmF0aW9uOiAwLCBzY2FsZVg6IDAsIHhQZXJjZW50OiAtMTAwLCBvcGFjaXR5OiAwLjggfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g0LLRi9C30L7QsiDQsNC90LjQvNCw0YbQuNC4INC/0YDQuCDQvdCw0LbQsNGC0LjQuCDQutC90L7Qv9C60LhcbiAgICAgICAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmF2QW5pbSk7XG4gICAgICAgIC8vINCy0YvQt9C+0LIg0LDQvdC40LzQsNGG0LjQuCDQv9GA0Lgg0L/QtdGA0LXRhdC+0LTQtSDQv9C+INGB0YHRi9C70LrQtVxuICAgICAgICBuYXZMaW5rLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucygnYnVyZ2VyLS1hY3RpdmUnKSkge1xuICAgICAgICAgICAgICBuYXZBbmltKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxufSk7XG4vLyBzY3JvbGxiYXIgbmF2XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2JykuZm9yRWFjaCgoZWwpID0+IHtcbiAgbmV3IFNpbXBsZUJhcihlbCwge1xuICAgIHNjcm9sbGJhck1heFNpemU6IDQwLFxuICB9KTtcbn0pO1xuXG4vLyBzZWFyY2hcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGNvbnN0IGJ0blRvZ2dsZVNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWFyY2gtdG9nZ2xlJyk7XG4gIGNvbnN0IGJ0blN2Z09wZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlLW9wZW4nKTtcbiAgY29uc3QgYnRuU3ZnQ2xvc2VkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZS1jbG9zZWQnKTtcbiAgYnRuVG9nZ2xlU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBidG5TdmdPcGVuLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIGJ0blN2Z0Nsb3NlZC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAvLyDQv9C+0Y/QstC70LXQvdC40LUg0L/QvtC40YHQutCwXG4gICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIC8vINCw0L3QuNC80LDRhtC40Y8g0L/QvtC40YHQutCwXG4gICAgaWYgKGJ0blRvZ2dsZVNlYXJjaC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICBnc2FwLmZyb21UbygnLmhlYWRlcl9fc2VhcmNoJywgeyBzY2FsZVg6IDAsIHhQZXJjZW50OiAtNTAsIG9wYWNpdHk6IDAuOCB9LCB7IGR1cmF0aW9uOiAwLjYsIHNjYWxlWDogMSwgeFBlcmNlbnQ6IC0wLCBvcGFjaXR5OiAxIH0pO1xuICAgIH0gZWxzZSBpZiAoKCFidG5Ub2dnbGVTZWFyY2guY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkpIHtcbiAgICAgIGdzYXAuZnJvbVRvKCcuaGVhZGVyX19zZWFyY2gnLCB7IHNjYWxlWDogMSwgeFBlcmNlbnQ6IDAsIG9wYWNpdHk6IDEgfSwgeyBkdXJhdGlvbjogMC42LCBzY2FsZVg6IDAsIHhQZXJjZW50OiAtNTAsIG9wYWNpdHk6IDAuOCB9KTtcbiAgICB9XG4gIH0pO1xufSk7XG4vLyBkcm9wZG93blxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duX19idG4nKS5mb3JFYWNoKChidG4pID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHsgcGF0aCB9ID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgICAgY29uc3QgZHJvcGRvd25Cb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXJnZXQ9XCIke3BhdGh9XCJdYCk7XG4gICAgICBjb25zdCBkcm9wZG93bkl0ZW0gPSBkcm9wZG93bkJveC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd25fX2l0ZW0nKVxuICAgICAgLy8g0L/QtdGA0LXQstC+0YDQsNGH0LjQstCw0LXQvCDRgdGC0YDQtdC70L7Rh9C60YMg0L/RgNC4INC60LvQuNC60LVcbiAgICAgIGNvbnN0IGljb24gPSBidG4ucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duX19pY29uLXN2ZycpO1xuICAgICAgLy8g0LfQsNC60YDRi9Cy0LDQtdC8INCy0YHQtSDRgdC/0LjRgdC60Lgg0Lgg0L/QtdGA0LXQutC70Y7Rh9Cw0LXQvCDQvdCw0LbQsNGC0YvQuVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duX19ib3gnKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBpZiAoZHJvcGRvd25Cb3ggIT09IGVsKSB7XG4gICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duX19pY29uLXN2ZycpLmZvckVhY2goKGopID0+IHtcbiAgICAgICAgaWYgKGljb24gIT09IGopIHtcbiAgICAgICAgICBqLmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3Bkb3duX19pY29uLXN2Z19hY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGljb24uY2xhc3NMaXN0LnRvZ2dsZSgnZHJvcGRvd25fX2ljb24tc3ZnX2FjdGl2ZScpO1xuICAgICAgZHJvcGRvd25Cb3guY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAvLyDQt9Cw0LrRgNGL0YLQuNC1INC00L7RgNC+0L/QtNCw0YPQvdCwINC90LAg0L3QsNC20LDRgtC40LUg0L3QtSDQstC90YPRgtGA0Lgg0LTRgNC+0L/QtNCw0YPQvdCwINC4INC90LUg0L3QsCDQutC90L7Qv9C60YNcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChpKSA9PiB7XG4gICAgICBpZiAoIWkudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZHJvcGRvd25fX2l0ZW0nKVxuICAgICAgJiYgIWkudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZHJvcGRvd25fX2JveCcpXG4gICAgICAmJiAhaS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkcm9wZG93bl9fYnRuJykpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duX19ib3gnKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB9KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duX19pY29uLXN2ZycpLmZvckVhY2goKGopID0+IHtcbiAgICAgICAgICBqLmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3Bkb3duX19pY29uLXN2Z19hY3RpdmUnKTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxufSk7XG4vLyBzY3JvbGxiYXJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bl9fc2Nyb2xsYmFyJykuZm9yRWFjaCgoZWwpID0+IHtcbiAgbmV3IFNpbXBsZUJhcihlbCwge1xuICAgIHNjcm9sbGJhck1heFNpemU6IDQwLFxuICB9KTtcbn0pO1xuLy8gdG9wLXdyYXAtc3dpcGVyXG5jb25zdCBzd2lwZXJIZXJvID0gbmV3IFN3aXBlcignLnRvcC13cmFwX19zd2lwZXInLCB7XG4gIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcbiAgbG9vcDogdHJ1ZSxcbiAgZWZmZWN0OiAnZmFkZScsXG4gIHNwZWVkOiAxMDAwMCxcbiAgYXV0b3BsYXk6IHtcbiAgICBkZWxheTogMTAwMDAsXG4gIH0sXG59KTtcbi8vIGdhbGxlcnlcbi8vIHN3aXBlci1nYWxsZXJ5XG5jb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuZ2FsbGVyeV9fc3dpcGVyJywge1xuICBzbGlkZXNQZXJWaWV3OiAxLFxuICBncmlkOiB7XG4gICAgcm93czogMSxcbiAgICBmaWxsOiAncm93JyxcbiAgfSxcbiAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiAnLmdhbGxlcnlfX3BhZ2luYXRpb24nLFxuICAgIHR5cGU6ICdmcmFjdGlvbicsXG4gIH0sXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6ICcuZ2FsbGVyeV9fYnRuLW5leHQnLFxuICAgIHByZXZFbDogJy5nYWxsZXJ5X19idG4tcHJldicsXG4gICAgZGlzYWJsZWRDbGFzczogJ3N3aXBlci1idG4tZGlzYWJsZWQnLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIDQ4MDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIHNsaWRlc1Blckdyb3VwOiAyLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAxNCxcbiAgICB9LFxuICAgIDc1MDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIHNsaWRlc1Blckdyb3VwOiAyLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAzNCxcbiAgICB9LFxuICAgIDc2OToge1xuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgIHNsaWRlc1Blckdyb3VwOiAzLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAzNCxcbiAgICB9LFxuICAgIDEwMTQ6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzbGlkZXNQZXJHcm91cDogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogMzQsXG4gICAgfSxcbiAgICAxNDgwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDYsXG4gICAgICBzcGFjZUJldHdlZW46IDUwLFxuICAgIH0sXG4gIH0sXG4gIGExMXk6IGZhbHNlLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgd2F0Y2hTbGlkZXNWaXNpYmlsaXR5OiB0cnVlLFxuICBzbGlkZVZpc2libGVDbGFzczogJ3NsaWRlLXZpc2libGUnLFxuICBvbjoge1xuICAgIGluaXQoKSB7XG4gICAgICB0aGlzLnNsaWRlcy5mb3JFYWNoKChzbGlkZSkgPT4ge1xuICAgICAgICBpZiAoIXNsaWRlLmNsYXNzTGlzdC5jb250YWlucygnc2xpZGUtdmlzaWJsZScpKSB7XG4gICAgICAgICAgc2xpZGUudGFiSW5kZXggPSAnLTEnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNsaWRlLnRhYkluZGV4ID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc2xpZGVDaGFuZ2UoKSB7XG4gICAgICB0aGlzLnNsaWRlcy5mb3JFYWNoKChzbGlkZSkgPT4ge1xuICAgICAgICBpZiAoIXNsaWRlLmNsYXNzTGlzdC5jb250YWlucygnc2xpZGUtdmlzaWJsZScpKSB7XG4gICAgICAgICAgc2xpZGUudGFiSW5kZXggPSAnLTEnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNsaWRlLnRhYkluZGV4ID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gIH0sXG59KTtcbi8vIHNlbGVjdC1nYWxsZXJ5XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3QnKTtcbiAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGNob2ljZXMgPSBuZXcgQ2hvaWNlcyhlbGVtZW50LCB7XG4gICAgICBzZWFyY2hFbmFibGVkOiBmYWxzZSxcbiAgICAgIHBvc2l0aW9uOiAnYm90dG9tJyxcbiAgICAgIHNob3VsZFNvcnQ6IGZhbHNlLFxuICAgICAgaXRlbVNlbGVjdFRleHQ6ICcnLFxuICAgIH0pO1xuICB9KTtcbn0pO1xuXG4vLyBtb2RhbCBnYWxsZXJ5XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbiAgZnVuY3Rpb24gZGlzYWJsZVNjcm9sbCgpIHtcbiAgICBsZXQgcGFnZVBvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlLXNjcm9sbCcpO1xuICAgIGJvZHkuZGF0YXNldC5wb3NpdGlvbiA9IHBhZ2VQb3NpdGlvbjtcbiAgICBib2R5LnN0eWxlLnRvcCA9IC1wYWdlUG9zaXRpb24gKyAncHgnXG4gIH1cbiAgZnVuY3Rpb24gZW5hYmxlU2Nyb2xsKCkge1xuICAgIGxldCBwYWdlUG9zaXRpb24gPSBwYXJzZUludChib2R5LmRhdGFzZXQucG9zaXRpb24sIDEwKTtcbiAgICBib2R5LnN0eWxlLnRvcCA9ICdhdXRvJztcbiAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGUtc2Nyb2xsJyk7XG4gICAgaWYgKGlzTmFOKHBhZ2VQb3NpdGlvbikpIHtcbiAgICAgIHBhZ2VQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhwYWdlUG9zaXRpb24pXG4gICAgY29uc29sZS5sb2coaXNOYU4ocGFnZVBvc2l0aW9uKSlcbiAgICBjb25zb2xlLmxvZyh3aW5kb3cuc2Nyb2xsWSlcbiAgICB3aW5kb3cuc2Nyb2xsKHt0b3A6IHBhZ2VQb3NpdGlvbiwgbGVmdDogMH0pO1xuICAgIGJvZHkucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXBvc2l0aW9uJyk7XG4gIH1cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbGxlcnlfX3NsaWRlJykuZm9yRWFjaCgobW9kYWxMaW5rKSA9PiB7XG4gICAgbW9kYWxMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IHBhdGggfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICAgIGNvbnN0IG1vZGFsT2JnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFyZ2V0PVwiJHtwYXRofVwiXWApO1xuICAgICAgY29uc3QgYnRuID0gbW9kYWxPYmcucXVlcnlTZWxlY3RvcignLm1vZGFsX19idG4nKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbCcpLmZvckVhY2goKHRhYkNvbnRlbnQpID0+IHtcbiAgICAgICAgdGFiQ29udGVudC5jbGFzc0xpc3QuYWRkKCdkZWFjdGl2YXRlJyk7XG4gICAgICB9KTtcbiAgICAgIGRpc2FibGVTY3JvbGwoKVxuICAgICAgbW9kYWxPYmcuY2xhc3NMaXN0LnJlbW92ZSgnZGVhY3RpdmF0ZScpO1xuICAgICAgLy8g0LfQsNC60YDRi9GC0LjQtSDQvdCwINC90LDQttCw0YLQuNC1INGE0L7QvdCwXG4gICAgICBtb2RhbE9iZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGFsT3ZlcmxheSA9IG1vZGFsT2JnLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fb3ZlcmxheScpO1xuICAgICAgICBpZiAoZS50YXJnZXQgPT09IG1vZGFsT3ZlcmxheSkge1xuICAgICAgICAgIGVuYWJsZVNjcm9sbCgpXG4gICAgICAgICAgbW9kYWxPYmcuY2xhc3NMaXN0LmFkZCgnZGVhY3RpdmF0ZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vINC30LDQutGA0YvRgtC40LUg0L3QsCDQvdCw0LbQsNGC0LjQtSDQutC90L7Qv9C60LhcbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZW5hYmxlU2Nyb2xsKClcbiAgICAgICAgbW9kYWxPYmcuY2xhc3NMaXN0LmFkZCgnZGVhY3RpdmF0ZScpO1xuICAgICAgfSk7XG4gICAgICAvLyDQsNC90LjQvNCw0YbQuNGPINC/0L7Rj9Cy0LvQtdC90LjRjyDQvtC60L3QsFxuICAgICAgaWYgKCFtb2RhbE9iZy5jbGFzc0xpc3QuY29udGFpbnMoJ2RlYWN0aXZhdGUnKSkge1xuICAgICAgICBnc2FwLmZyb21UbygnLm1vZGFsX19ib3gnLCB7IHNjYWxlWDowLjYsIHNjYWxlWTowLjQsIG9wYWNpdHk6IDAuOCB9LCB7IGR1cmF0aW9uOiAwLjYsIHNjYWxlWDoxLCBzY2FsZVk6MSwgb3BhY2l0eTogMSB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59KTtcbi8vIG1vZGFsIHNjcm9sbFxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsX19ib3gnKS5mb3JFYWNoKChlbCkgPT4ge1xuICBuZXcgU2ltcGxlQmFyKGVsLCB7XG4gICAgc2Nyb2xsYmFyTWF4U2l6ZTogNDAsXG4gIH0pO1xufSk7XG4vLyBjYXRhbG9nXG4vLyB0YWJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb25fX2xpbmsnKS5mb3JFYWNoKCh0YWJMaW5rKSA9PiB7XG4gICAgdGFiTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXRoIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uX19saW5rJykuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWNjb3JkaW9uX19saW5rX2FjdGl2ZScpO1xuICAgICAgfSk7XG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjY29yZGlvbl9fbGlua19hY3RpdmUnKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJfX2l0ZW0nKS5mb3JFYWNoKCh0YWJDb250ZW50KSA9PiB7XG4gICAgICAgIHRhYkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZGVhY3RpdmF0ZScpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXJnZXQ9XCIke3BhdGh9XCJdYCkuY2xhc3NMaXN0LnJlbW92ZSgnZGVhY3RpdmF0ZScpO1xuICAgICAgLy8g0LDQvdC40LzQsNGG0LjRjyDQtNC70Y8g0L/QvtGP0LLQu9C10L3QuNGPXG4gICAgICBnc2FwLmZyb21UbygnLnRhYl9faXRlbScsIHsgb3BhY2l0eTogMCB9LCB7IGR1cmF0aW9uOiAwLjgsIG9wYWNpdHk6IDEgfSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4vLyBhY2NvcmRpb25cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIG5ldyBBY2NvcmRpb24oJy5qcy1hY2NvcmRpb24tY29udGFpbmVyJywge1xuICAgIG9wZW5PbkluaXQ6IFswXSxcbiAgfSk7XG59KTtcbi8vIHN3aXBlci1ldmVudHNcbmNvbnN0IHN3aXBlckV2ZW50cyA9IG5ldyBTd2lwZXIoJy5ldmVudHNfX3N3aXBlcicsIHtcbiAgc2xpZGVzUGVyVmlldzogMSxcbiAgZ3JpZDoge1xuICAgIHJvd3M6IDEsXG4gICAgZmlsbDogJ3JvdycsXG4gIH0sXG4gIGxvb3A6IHRydWUsXG4gIGExMXk6IGZhbHNlLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgd2F0Y2hTbGlkZXNWaXNpYmlsaXR5OiB0cnVlLFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiAnLmV2ZW50c19fYnRuLW5leHQnLFxuICB9LFxuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6ICcuZXZlbnRzX19wYWdpbmF0aW9uJyxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgNTY4OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDIsXG4gICAgICBzcGFjZUJldHdlZW46IDM0LFxuICAgIH0sXG4gICAgOTkyOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDMsXG4gICAgICBzcGFjZUJldHdlZW46IDI0LFxuICAgIH0sXG4gICAgMTQ4MDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgIHNsaWRlc1Blckdyb3VwOiAzLFxuICAgICAgc3BhY2VCZXR3ZWVuOiA1MixcbiAgICB9LFxuICB9LFxufSk7XG4vLyBzd2lwZXItcHJvZ2VjdHNcbmNvbnN0IHN3aXBlclByb2dlY3RzID0gbmV3IFN3aXBlcignLnByb2dlY3RzX19zd2lwZXInLCB7XG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIGdyaWQ6IHtcbiAgICByb3dzOiAxLFxuICAgIGZpbGw6ICdyb3cnLFxuICB9LFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgcHJldkVsOiAnLnByb2dlY3RzX19idG5fcHJldicsXG4gICAgbmV4dEVsOiAnLnByb2dlY3RzX19idG5fbmV4dCcsXG4gICAgZGlzYWJsZWRDbGFzczogJ3N3aXBlci1idG4tZGlzYWJsZWQtbGlnaHQnLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIDc1MDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogMzQsXG4gICAgfSxcbiAgICA3Njk6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzcGFjZUJldHdlZW46IDUwLFxuICAgIH0sXG4gICAgMTQ4MDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgIHNwYWNlQmV0d2VlbjogNTAsXG4gICAgfSxcbiAgfSxcblxufSk7XG4vLyB0b29sdGlwXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICB0aXBweSgnLmpzLXRvb2x0aXAnLCB7XG4gICAgbWF4V2lkdGg6IDI2NCxcbiAgICB0aGVtZTogJ2Nhc3RvbS10b29sdGlwJyxcbiAgfSk7XG59KTtcbi8vIGNvbnRhY3RzXG4vLyBjb250YWN0cyBmb3JtXG5jb25zdCBzZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPSd0ZWwnXVwiKTtcbmNvbnN0IGltID0gbmV3IElucHV0bWFzaygnKzcgKDk5OSktOTk5LTk5LTk5Jyk7XG5pbS5tYXNrKHNlbGVjdG9yKTtcbm5ldyBKdXN0VmFsaWRhdGUoJy5mb3JtJywge1xuICBydWxlczoge1xuICAgIG5hbWU6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgbWluTGVuZ3RoOiAyLFxuICAgICAgbWF4TGVuZ3RoOiAyNCxcbiAgICB9LFxuICAgIHRlbDoge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBzdHJlbmd0aDogeyBjdXN0b206ICdbXl9dJCcgfSxcbiAgICB9LFxuICB9LFxuICBtZXNzYWdlczoge1xuICAgIG5hbWU6IHtcbiAgICAgIHJlcXVpcmVkOiAn0JrQsNC6INCy0LDRgSDQt9C+0LLRg9GCPycsXG4gICAgICBtaW5MZW5ndGg6ICfQmtC+0YDQvtGC0LrQvtC1INC40LzRjycsXG4gICAgICBtYXhMZW5ndGg6ICfQlNC70LjQvdC90L7QtSDQuNC80Y8nLFxuICAgIH0sXG4gICAgdGVsOiAn0KPQutCw0LbQuNGC0LUg0LLQsNGIINGC0LXQu9C10YTQvtC9JyxcbiAgfSxcbn0pO1xuLy8gY29udGFjdHMgbWFwXG5mdW5jdGlvbiBpbml0KCkge1xuICBteU1hcExvYWQgPSB0cnVlO1xuICBjb25zdCBteU1hcCA9IG5ldyB5bWFwcy5NYXAoJ21hcCcsIHtcbiAgICBjZW50ZXI6IFs1NS43NTg0NjgsIDM3LjYwMTA4OF0sXG4gICAgem9vbTogMTUsXG4gICAgY29udHJvbHM6IFsnZ2VvbG9jYXRpb25Db250cm9sJywgJ3pvb21Db250cm9sJ10sXG4gIH0sXG4gIHtcbiAgICBzdXBwcmVzc01hcE9wZW5CbG9jazogdHJ1ZSxcbiAgICBnZW9sb2NhdGlvbkNvbnRyb2xTaXplOiBcImxhcmdlXCIsXG4gICAgZ2VvbG9jYXRpb25Db250cm9sUG9zaXRpb246ICB7IHRvcDogXCIyMDBweFwiLCByaWdodDogXCIyMHB4XCIgfSxcbiAgICBnZW9sb2NhdGlvbkNvbnRyb2xGbG9hdDogJ25vbmUnLFxuICAgIHpvb21Db250cm9sU2l6ZTogXCJzbWFsbFwiLFxuICAgIHpvb21Db250cm9sRmxvYXQ6IFwibm9uZVwiLFxuICAgIHpvb21Db250cm9sUG9zaXRpb246IHsgdG9wOiBcIjEyMHB4XCIsIHJpZ2h0OiBcIjIwcHhcIiB9XG4gIH0pO1xuICBjb25zdCBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzU1Ljc1ODQ2OCwgMzcuNjAxMDg4XSwge30sIHtcbiAgICBpY29uTGF5b3V0OiAnZGVmYXVsdCNpbWFnZScsXG4gICAgaWNvbkltYWdlSHJlZjogJ2ltZy9nZW9PYmplY3Quc3ZnJyxcbiAgICBpY29uSW1hZ2VTaXplOiBbMjAsIDIwXSxcbiAgfSk7XG4gIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcbiAgLy8g0L7RgtC60LvRjtGH0LjRgtGMINC30YPQvFxuICBteU1hcC5iZWhhdmlvcnMuZGlzYWJsZSgnc2Nyb2xsWm9vbScpO1xufVxuLy8g0L/Qu9Cw0LLQvdGL0Lkg0YHQutGA0L7Qu9C7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtc2Nyb2xsLWxpbmsnKS5mb3JFYWNoKGxpbmsgPT4ge1xuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgY29uc3QgaHJlZiA9IHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJykuc3Vic3RyaW5nKDEpO1xuICAgICAgY29uc3Qgc2Nyb2xsVGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaHJlZik7XG4gICAgICBjb25zdCBlbGVtZW50UG9zaXRpb24gPSBzY3JvbGxUYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgd2luZG93LnNjcm9sbEJ5KHtcbiAgICAgICAgICB0b3A6IGVsZW1lbnRQb3NpdGlvbixcbiAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICAgIH0pO1xuICB9KTtcbn0pO1xuLy8g0YfQsNGB0YLQuNGH0L3QviDQvtGC0LvQvtC20LXQvdC90LDRjyDQt9Cw0LPRgNGD0LfQutCwINC60LDRgNGC0YtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIC8vINCf0L7Qu9GD0YfQsNC10Lwg0L3Rg9C20L3Ri9C5INGN0LvQtdC80LXQvdGCXG5jb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hcCcpO1xubGV0IG15TWFwTG9hZCA9IGZhbHNlO1xuY29uc3QgVmlzaWJsZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgLy8g0JLRgdC1INC/0L7Qt9C40YbQuNC4INGN0LvQtdC80LXQvdGC0LBcbiAgY29uc3QgdGFyZ2V0UG9zaXRpb24gPSB7XG4gICAgICB0b3A6IHdpbmRvdy5wYWdlWU9mZnNldCArIHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AsXG4gICAgICBsZWZ0OiB3aW5kb3cucGFnZVhPZmZzZXQgKyB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCxcbiAgICAgIHJpZ2h0OiB3aW5kb3cucGFnZVhPZmZzZXQgKyB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkucmlnaHQsXG4gICAgICBib3R0b206IHdpbmRvdy5wYWdlWU9mZnNldCArIHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b21cbiAgICB9LFxuICAgIC8vINCf0L7Qu9GD0YfQsNC10Lwg0L/QvtC30LjRhtC40Lgg0L7QutC90LBcbiAgICB3aW5kb3dQb3NpdGlvbiA9IHtcbiAgICAgIHRvcDogd2luZG93LnBhZ2VZT2Zmc2V0LFxuICAgICAgbGVmdDogd2luZG93LnBhZ2VYT2Zmc2V0LFxuICAgICAgcmlnaHQ6IHdpbmRvdy5wYWdlWE9mZnNldCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcbiAgICAgIGJvdHRvbTogd2luZG93LnBhZ2VZT2Zmc2V0ICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICAgIH07XG4gIGlmICh0YXJnZXRQb3NpdGlvbi5ib3R0b20gPiB3aW5kb3dQb3NpdGlvbi50b3AgJiYgLy8g0JXRgdC70Lgg0L/QvtC30LjRhtC40Y8g0L3QuNC20L3QtdC5INGH0LDRgdGC0Lgg0Y3Qu9C10LzQtdC90YLQsCDQsdC+0LvRjNGI0LUg0L/QvtC30LjRhtC40Lgg0LLQtdGA0YXQvdC10Lkg0YfQsNC50YLQuCDQvtC60L3QsCwg0YLQviDRjdC70LXQvNC10L3RgiDQstC40LTQtdC9INGB0LLQtdGA0YXRg1xuICAgIHRhcmdldFBvc2l0aW9uLnRvcCA8IHdpbmRvd1Bvc2l0aW9uLmJvdHRvbSAmJiAvLyDQldGB0LvQuCDQv9C+0LfQuNGG0LjRjyDQstC10YDRhdC90LXQuSDRh9Cw0YHRgtC4INGN0LvQtdC80LXQvdGC0LAg0LzQtdC90YzRiNC1INC/0L7Qt9C40YbQuNC4INC90LjQttC90LXQuSDRh9Cw0LnRgtC4INC+0LrQvdCwLCDRgtC+INGN0LvQtdC80LXQvdGCINCy0LjQtNC10L0g0YHQvdC40LfRg1xuICAgIHRhcmdldFBvc2l0aW9uLnJpZ2h0ID4gd2luZG93UG9zaXRpb24ubGVmdCAmJiAvLyDQldGB0LvQuCDQv9C+0LfQuNGG0LjRjyDQv9GA0LDQstC+0Lkg0YHRgtC+0YDQvtC90Ysg0Y3Qu9C10LzQtdC90YLQsCDQsdC+0LvRjNGI0LUg0L/QvtC30LjRhtC40Lgg0LvQtdCy0L7QuSDRh9Cw0YHRgtC4INC+0LrQvdCwLCDRgtC+INGN0LvQtdC80LXQvdGCINCy0LjQtNC10L0g0YHQu9C10LLQsFxuICAgIHRhcmdldFBvc2l0aW9uLmxlZnQgPCB3aW5kb3dQb3NpdGlvbi5yaWdodCkgeyAvLyDQldGB0LvQuCDQv9C+0LfQuNGG0LjRjyDQu9C10LLQvtC5INGB0YLQvtGA0L7QvdGLINGN0LvQtdC80LXQvdGC0LAg0LzQtdC90YzRiNC1INC/0L7Qt9C40YbQuNC4INC/0YDQsNCy0L7QuSDRh9Cw0LnRgtC4INC+0LrQvdCwLCDRgtC+INGN0LvQtdC80LXQvdGCINCy0LjQtNC10L0g0YHQv9GA0LDQstCwXG4gICAgLy8g0JXRgdC70Lgg0Y3Qu9C10LzQtdC90YIg0L/QvtC70L3QvtGB0YLRjNGOINCy0LjQtNC90L4sINGC0L4g0LfQsNC/0YPRgdC60LDQtdC8INGB0LvQtdC00YPRjtGJ0LjQuSDQutC+0LRcbiAgICB5bWFwcy5yZWFkeShpbml0KTtcbiAgICAvLyDQtNCw0LXQvCDQv9C+0L3Rj9GC0Ywg0YfRgtC+INC60LDRgNGC0LAg0LfQsNCz0YDRg9C20LXQvdCwXG4gICAgbXlNYXBMb2FkID0gdHJ1ZTtcbiAgICBjb25zb2xlLmxvZygn0JrQsNGA0YLQsCDQv9C+0LTQs9GA0YPQt9C40LvQsNGB0YwnKTtcbiAgfVxufTtcbi8vINCX0LDQv9GD0YHQutCw0LXQvCDRhNGD0L3QutGG0LjRjiDQv9GA0Lgg0L/RgNC+0LrRgNGD0YLQutC1INGB0YLRgNCw0L3QuNGG0YtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcbiAgaWYgKG15TWFwTG9hZCAhPT0gdHJ1ZSkge1xuICAgIFZpc2libGUgKGVsZW1lbnQpO1xuICB9XG59KTtcbi8v0LfQsNC/0YPRgdGC0LjQvCDRhNGD0L3QutGG0LjRjiDRgdGA0LDQt9GDLiDQkCDRgtC+INCy0LTRgNGD0LMsINGN0LvQtdC80LXQvdGCINC40LfQvdCw0YfQsNC70YzQvdC+INCy0LjQtNC90L5cblZpc2libGUgKGVsZW1lbnQpO1xufSk7Il0sImZpbGUiOiJzY3J5cHQuanMifQ==
