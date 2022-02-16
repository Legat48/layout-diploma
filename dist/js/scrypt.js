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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3J5cHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8vIGhlYWRlcnNcbi8vINCw0L3QuNC80LDRhtC40Y8gbmF2XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyJyk7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX25hdicpO1xuICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLXRvZ2dsZScpO1xuICBjb25zdCBuYXZMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdl9fbGluaycpO1xuICBjb25zdCBuYXZTY3JvbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19zY3JvbGwnKTtcbiAgY29uc3QgbWVkaWFGdWxsRGVza3RvcCA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiAxNDgwcHgpJylcbiAgZnVuY3Rpb24gbmF2QW5pbSgpIHtcbiAgICAvLyDQv9C10YDQtdC60LvRjtGH0LXQvdC40LUg0LHRg9GA0LPQtdGA0LBcbiAgICBidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYnVyZ2VyLS1hY3RpdmUnKTtcbiAgICAvLyDQv9C+0Y/QstC70LXQvdC40LUg0Lgg0YPRhdC+0LQg0LzQtdC90Y4g0L3QsNCy0LjQs9Cw0YbQuNC4XG4gICAgaWYgKGJ1cmdlci5jbGFzc0xpc3QuY29udGFpbnMoJ2J1cmdlci0tYWN0aXZlJykpIHtcbiAgICAgIGNsZWFyVGltZW91dChzZXRUaW1lb3V0KCgpPT57bmF2LnN0eWxlLnpJbmRleCA9IC0xO30sIDApKVxuICAgICAgc2VhcmNoLnN0eWxlLnpJbmRleCA9IDE7XG4gICAgICBuYXYuc3R5bGUuekluZGV4ID0gMjtcbiAgICAgIGdzYXAuZnJvbVRvKCcuaGVhZGVyX19uYXYnLCB7IHhQZXJjZW50OiAtMTAwLCBvcGFjaXR5OiAwLjggfSwgeyBkdXJhdGlvbjogMSwgc2NhbGVYOiAxLCB4UGVyY2VudDogMCwgb3BhY2l0eTogMSB9KTtcbiAgICB9IGVsc2UgaWYgKCghYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucygnYnVyZ2VyLS1hY3RpdmUnKSkpIHtcbiAgICAgIHNlYXJjaC5zdHlsZS56SW5kZXggPSA0O1xuICAgICAgZ3NhcC5mcm9tVG8oJy5oZWFkZXJfX25hdicsIHsgeFBlcmNlbnQ6IDAsIG9wYWNpdHk6IDEgfSwgeyBkdXJhdGlvbjogMSwgc2NhbGVYOiAwLCB4UGVyY2VudDogLTEwMCwgb3BhY2l0eTogMC44IH0pO1xuICAgICAgc2V0VGltZW91dCgoKT0+e25hdi5zdHlsZS56SW5kZXggPSAtMTt9LCA2MDApXG4gICAgfVxuICB9XG5cbiAgaWYgKCFtZWRpYUZ1bGxEZXNrdG9wLm1hdGNoZXMpIHtcbiAgICAvLyBzY3JvbGxiYXIgbmF2XG4gICAgbmV3IFNpbXBsZUJhcihuYXZTY3JvbGwsIHtcbiAgICAgIHNjcm9sbGJhck1heFNpemU6IDIwLFxuICAgIH0pO1xuICB9XG4gIG1lZGlhRnVsbERlc2t0b3AuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIC8vINC10YHQu9C4INC80LXQvdGM0YjQtSAxNDgwcHhcbiAgICBpZiAoIW1lZGlhRnVsbERlc2t0b3AubWF0Y2hlcykge1xuICAgICAgbmV3IFNpbXBsZUJhcihuYXZTY3JvbGwsIHtcbiAgICAgICAgc2Nyb2xsYmFyTWF4U2l6ZTogMjAsXG4gICAgICB9KTtcbiAgICB9XG4gIH0pXG4gIC8vINCf0YDQvtGA0LDQsdC+0YLQutCwINGE0YPQvdC60YbQuNC5INC/0YDQuCDQt9Cw0LPRgNGD0LfQutC1INGB0YLRgNCw0L3QuNGG0Ysg0LIg0L/QtdGA0LLRi9C5INGA0LDQt1xuICAvLyDQstGL0LfQvtCyINCw0L3QuNC80LDRhtC40Lgg0L/RgNC4INC90LDQttCw0YLQuNC4INC60L3QvtC/0LrQuFxuICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuYXZBbmltKTtcbiAgLy8g0LLRi9C30L7QsiDQsNC90LjQvNCw0YbQuNC4INC/0YDQuCDQv9C10YDQtdGF0L7QtNC1INC/0L4g0YHRgdGL0LvQutC1XG4gIG5hdkxpbmsuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGlmIChidXJnZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdidXJnZXItLWFjdGl2ZScpKSB7XG4gICAgICAgIG5hdkFuaW0oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSlcblxuICAvLyDQv9GA0L7QstC10YDQutCwINC/0L4g0LzQtdC00LjQsNC30LDQv9GA0L7RgdGDLCDQvdCwINC40LfQvNC10L3QtdC90LjRjyAo0L/QtdGA0LXQstC+0YDQvtGCINGN0LrRgNCw0L3QsCwg0YPQvNC10L3RjNGI0LDRgiDQvtC60L3QviDQsdGA0LDRg9C30LXRgNCwINC4INGC0LQpXG4gIGlmIChtYXRjaE1lZGlhKSB7XG4gICAgLy8g0LjQt9C80LXQtdC90LjRjyDRjdC60YDQsNC90LBcbiAgICBtZWRpYUZ1bGxEZXNrdG9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgIC8vINC10YHQu9C4INCx0L7Qu9GM0YjQtSAxNDgwcHgsINGC0L4g0LLRi9C30L7QsiBJSUZFLCDQsiDQutC+0YLQvtGA0L7QuSDRgdCx0YDQsNGB0YvQstCw0Y7RgtGB0Y8g0LLRgdC1INC30L3QsNGH0LXQvdC40Y8g0L3QsNCy0LjQs9Cw0YbQuNC4INGH0YLQviDQvdCw0LrQuNC00LDQvdGLINCw0L3QuNC80LDRhtC40LXQuVxuICAgICAgaWYgKG1lZGlhRnVsbERlc2t0b3AubWF0Y2hlcykge1xuICAgICAgICBuYXYuc3R5bGUuekluZGV4ID0gMTtcbiAgICAgICAgc2VhcmNoLnN0eWxlLnpJbmRleCA9IDE7XG4gICAgICAgIGdzYXAuZnJvbVRvKCcuaGVhZGVyX19uYXYnLCB7IHhQZXJjZW50OiAtMTAwLCBvcGFjaXR5OiAwLjggfSwgeyBkdXJhdGlvbjogMCwgc2NhbGVYOiAxLCB4UGVyY2VudDogMCwgb3BhY2l0eTogMSB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vINC40L3QsNGH0LUg0LLQvtC30LLRgNCw0YnQsNC10Lwg0YHQvtGB0YLQvtGP0L3QuNC1INC60L7RgtC+0YDQvtC1INCx0YvQu9C+INGDINGB0YLRgNCw0L3QuNGG0YtcbiAgICAgICAgaWYgKCghYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucygnYnVyZ2VyLS1hY3RpdmUnKSkpIHtcbiAgICAgICAgICBzZWFyY2guc3R5bGUuekluZGV4ID0gNDtcbiAgICAgICAgICBuYXYuc3R5bGUuekluZGV4ID0gLTE7XG4gICAgICAgICAgZ3NhcC5mcm9tVG8oJy5oZWFkZXJfX25hdicsIHsgeFBlcmNlbnQ6IDAsIG9wYWNpdHk6IDEgfSwgeyBkdXJhdGlvbjogMCwgc2NhbGVYOiAwLCB4UGVyY2VudDogLTEwMCwgb3BhY2l0eTogMC44IH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vINCy0YvQt9C+0LIg0LDQvdC40LzQsNGG0LjQuCDQv9GA0Lgg0L3QsNC20LDRgtC40Lgg0LrQvdC+0L/QutC4XG4gICAgICAgIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5hdkFuaW0pO1xuICAgICAgICAvLyDQstGL0LfQvtCyINCw0L3QuNC80LDRhtC40Lgg0L/RgNC4INC/0LXRgNC10YXQvtC00LUg0L/QviDRgdGB0YvQu9C60LVcbiAgICAgICAgbmF2TGluay5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGJ1cmdlci5jbGFzc0xpc3QuY29udGFpbnMoJ2J1cmdlci0tYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgbmF2QW5pbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxufSk7XG5cblxuLy8gc2VhcmNoXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBidG5Ub2dnbGVTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLXRvZ2dsZScpO1xuICBjb25zdCBidG5TdmdPcGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZS1vcGVuJyk7XG4gIGNvbnN0IGJ0blN2Z0Nsb3NlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUtY2xvc2VkJyk7XG4gIGJ0blRvZ2dsZVNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgYnRuU3ZnT3Blbi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICBidG5TdmdDbG9zZWQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgLy8g0L/QvtGP0LLQu9C10L3QuNC1INC/0L7QuNGB0LrQsFxuICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAvLyDQsNC90LjQvNCw0YbQuNGPINC/0L7QuNGB0LrQsFxuICAgIGlmIChidG5Ub2dnbGVTZWFyY2guY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgZ3NhcC5mcm9tVG8oJy5oZWFkZXJfX3NlYXJjaCcsIHsgc2NhbGVYOiAwLCB4UGVyY2VudDogLTUwLCBvcGFjaXR5OiAwLjggfSwgeyBkdXJhdGlvbjogMC42LCBzY2FsZVg6IDEsIHhQZXJjZW50OiAtMCwgb3BhY2l0eTogMSB9KTtcbiAgICB9IGVsc2UgaWYgKCghYnRuVG9nZ2xlU2VhcmNoLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpKSB7XG4gICAgICBnc2FwLmZyb21UbygnLmhlYWRlcl9fc2VhcmNoJywgeyBzY2FsZVg6IDEsIHhQZXJjZW50OiAwLCBvcGFjaXR5OiAxIH0sIHsgZHVyYXRpb246IDAuNiwgc2NhbGVYOiAwLCB4UGVyY2VudDogLTUwLCBvcGFjaXR5OiAwLjggfSk7XG4gICAgfVxuICB9KTtcbn0pO1xuLy8gZHJvcGRvd25cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bl9fYnRuJykuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IHBhdGggfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcbiAgICAgIGNvbnN0IGRyb3Bkb3duQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFyZ2V0PVwiJHtwYXRofVwiXWApO1xuICAgICAgY29uc3QgZHJvcGRvd25JdGVtID0gZHJvcGRvd25Cb3gucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duX19pdGVtJylcbiAgICAgIC8vINC/0LXRgNC10LLQvtGA0LDRh9C40LLQsNC10Lwg0YHRgtGA0LXQu9C+0YfQutGDINC/0YDQuCDQutC70LjQutC1XG4gICAgICBjb25zdCBpY29uID0gYnRuLnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bl9faWNvbi1zdmcnKTtcbiAgICAgIC8vINC30LDQutGA0YvQstCw0LXQvCDQstGB0LUg0YHQv9C40YHQutC4INC4INC/0LXRgNC10LrQu9GO0YfQsNC10Lwg0L3QsNC20LDRgtGL0LlcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bl9fYm94JykuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgaWYgKGRyb3Bkb3duQm94ICE9PSBlbCkge1xuICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bl9faWNvbi1zdmcnKS5mb3JFYWNoKChqKSA9PiB7XG4gICAgICAgIGlmIChpY29uICE9PSBqKSB7XG4gICAgICAgICAgai5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wZG93bl9faWNvbi1zdmdfYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBpY29uLmNsYXNzTGlzdC50b2dnbGUoJ2Ryb3Bkb3duX19pY29uLXN2Z19hY3RpdmUnKTtcbiAgICAgIGRyb3Bkb3duQm94LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy8g0LfQsNC60YDRi9GC0LjQtSDQtNC+0YDQvtC/0LTQsNGD0L3QsCDQvdCwINC90LDQttCw0YLQuNC1INC90LUg0LLQvdGD0YLRgNC4INC00YDQvtC/0LTQsNGD0L3QsCDQuCDQvdC1INC90LAg0LrQvdC+0L/QutGDXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoaSkgPT4ge1xuICAgICAgaWYgKCFpLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Ryb3Bkb3duX19pdGVtJylcbiAgICAgICYmICFpLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Ryb3Bkb3duX19ib3gnKVxuICAgICAgJiYgIWkudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZHJvcGRvd25fX2J0bicpKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bl9fYm94JykuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcm9wZG93bl9faWNvbi1zdmcnKS5mb3JFYWNoKChqKSA9PiB7XG4gICAgICAgICAgai5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wZG93bl9faWNvbi1zdmdfYWN0aXZlJyk7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbn0pO1xuLy8gc2Nyb2xsYmFyIGRyb3Bkb3duXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd25fX3Njcm9sbGJhcicpLmZvckVhY2goKGVsKSA9PiB7XG4gIG5ldyBTaW1wbGVCYXIoZWwsIHtcbiAgICBzY3JvbGxiYXJNYXhTaXplOiA0MCxcbiAgfSk7XG59KTtcbi8vIHRvcC13cmFwLXN3aXBlclxuY29uc3Qgc3dpcGVySGVybyA9IG5ldyBTd2lwZXIoJy50b3Atd3JhcF9fc3dpcGVyJywge1xuICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXG4gIGxvb3A6IHRydWUsXG4gIGVmZmVjdDogJ2ZhZGUnLFxuICBzcGVlZDogMTAwMDAsXG4gIGF1dG9wbGF5OiB7XG4gICAgZGVsYXk6IDEwMDAwLFxuICB9LFxufSk7XG4vLyBnYWxsZXJ5XG4vLyBzd2lwZXItZ2FsbGVyeVxuY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcignLmdhbGxlcnlfX3N3aXBlcicsIHtcbiAgc2xpZGVzUGVyVmlldzogMSxcbiAgZ3JpZDoge1xuICAgIHJvd3M6IDEsXG4gICAgZmlsbDogJ3JvdycsXG4gIH0sXG4gIHNwYWNlQmV0d2VlbjogMjAsXG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogJy5nYWxsZXJ5X19wYWdpbmF0aW9uJyxcbiAgICB0eXBlOiAnZnJhY3Rpb24nLFxuICB9LFxuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiAnLmdhbGxlcnlfX2J0bi1uZXh0JyxcbiAgICBwcmV2RWw6ICcuZ2FsbGVyeV9fYnRuLXByZXYnLFxuICAgIGRpc2FibGVkQ2xhc3M6ICdzd2lwZXItYnRuLWRpc2FibGVkJyxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICA0ODA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzbGlkZXNQZXJHcm91cDogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogMTQsXG4gICAgfSxcbiAgICA3NTA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzbGlkZXNQZXJHcm91cDogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogMzQsXG4gICAgfSxcbiAgICA3Njk6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICBzbGlkZXNQZXJHcm91cDogMyxcbiAgICAgIHNwYWNlQmV0d2VlbjogMzQsXG4gICAgfSxcbiAgICAxMDE0OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDIsXG4gICAgICBzcGFjZUJldHdlZW46IDM0LFxuICAgIH0sXG4gICAgMTQ4MDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgIHNsaWRlc1Blckdyb3VwOiA2LFxuICAgICAgc3BhY2VCZXR3ZWVuOiA1MCxcbiAgICB9LFxuICB9LFxuICBhMTF5OiBmYWxzZSxcbiAga2V5Ym9hcmQ6IHRydWUsXG4gIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gIHdhdGNoU2xpZGVzVmlzaWJpbGl0eTogdHJ1ZSxcbiAgc2xpZGVWaXNpYmxlQ2xhc3M6ICdzbGlkZS12aXNpYmxlJyxcbiAgb246IHtcbiAgICBpbml0KCkge1xuICAgICAgdGhpcy5zbGlkZXMuZm9yRWFjaCgoc2xpZGUpID0+IHtcbiAgICAgICAgaWYgKCFzbGlkZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlLXZpc2libGUnKSkge1xuICAgICAgICAgIHNsaWRlLnRhYkluZGV4ID0gJy0xJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzbGlkZS50YWJJbmRleCA9ICcnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIHNsaWRlQ2hhbmdlKCkge1xuICAgICAgdGhpcy5zbGlkZXMuZm9yRWFjaCgoc2xpZGUpID0+IHtcbiAgICAgICAgaWYgKCFzbGlkZS5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlLXZpc2libGUnKSkge1xuICAgICAgICAgIHNsaWRlLnRhYkluZGV4ID0gJy0xJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzbGlkZS50YWJJbmRleCA9ICcnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICB9LFxufSk7XG4vLyBzZWxlY3QtZ2FsbGVyeVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0Jyk7XG4gIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBjaG9pY2VzID0gbmV3IENob2ljZXMoZWxlbWVudCwge1xuICAgICAgc2VhcmNoRW5hYmxlZDogZmFsc2UsXG4gICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICBzaG91bGRTb3J0OiBmYWxzZSxcbiAgICAgIGl0ZW1TZWxlY3RUZXh0OiAnJyxcbiAgICB9KTtcbiAgfSk7XG59KTtcblxuLy8gbW9kYWwgZ2FsbGVyeVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG4gIGZ1bmN0aW9uIGRpc2FibGVTY3JvbGwoKSB7XG4gICAgbGV0IHBhZ2VQb3NpdGlvbiA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZS1zY3JvbGwnKTtcbiAgICBib2R5LmRhdGFzZXQucG9zaXRpb24gPSBwYWdlUG9zaXRpb247XG4gICAgYm9keS5zdHlsZS50b3AgPSAtcGFnZVBvc2l0aW9uICsgJ3B4J1xuICB9XG4gIGZ1bmN0aW9uIGVuYWJsZVNjcm9sbCgpIHtcbiAgICBsZXQgcGFnZVBvc2l0aW9uID0gcGFyc2VJbnQoYm9keS5kYXRhc2V0LnBvc2l0aW9uLCAxMCk7XG4gICAgYm9keS5zdHlsZS50b3AgPSAnYXV0byc7XG4gICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlLXNjcm9sbCcpO1xuICAgIGlmIChpc05hTihwYWdlUG9zaXRpb24pKSB7XG4gICAgICBwYWdlUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWTtcbiAgICB9XG4gICAgY29uc29sZS5sb2cocGFnZVBvc2l0aW9uKVxuICAgIGNvbnNvbGUubG9nKGlzTmFOKHBhZ2VQb3NpdGlvbikpXG4gICAgY29uc29sZS5sb2cod2luZG93LnNjcm9sbFkpXG4gICAgd2luZG93LnNjcm9sbCh7dG9wOiBwYWdlUG9zaXRpb24sIGxlZnQ6IDB9KTtcbiAgICBib2R5LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1wb3NpdGlvbicpO1xuICB9XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYWxsZXJ5X19zbGlkZScpLmZvckVhY2goKG1vZGFsTGluaykgPT4ge1xuICAgIG1vZGFsTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXRoIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgICBjb25zdCBtb2RhbE9iZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhcmdldD1cIiR7cGF0aH1cIl1gKTtcbiAgICAgIGNvbnN0IGJ0biA9IG1vZGFsT2JnLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fYnRuJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwnKS5mb3JFYWNoKCh0YWJDb250ZW50KSA9PiB7XG4gICAgICAgIHRhYkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZGVhY3RpdmF0ZScpO1xuICAgICAgfSk7XG4gICAgICBkaXNhYmxlU2Nyb2xsKClcbiAgICAgIG1vZGFsT2JnLmNsYXNzTGlzdC5yZW1vdmUoJ2RlYWN0aXZhdGUnKTtcbiAgICAgIC8vINC30LDQutGA0YvRgtC40LUg0L3QsCDQvdCw0LbQsNGC0LjQtSDRhNC+0L3QsFxuICAgICAgbW9kYWxPYmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBtb2RhbE92ZXJsYXkgPSBtb2RhbE9iZy5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX292ZXJsYXknKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBtb2RhbE92ZXJsYXkpIHtcbiAgICAgICAgICBlbmFibGVTY3JvbGwoKVxuICAgICAgICAgIG1vZGFsT2JnLmNsYXNzTGlzdC5hZGQoJ2RlYWN0aXZhdGUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyDQt9Cw0LrRgNGL0YLQuNC1INC90LAg0L3QsNC20LDRgtC40LUg0LrQvdC+0L/QutC4XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGVuYWJsZVNjcm9sbCgpXG4gICAgICAgIG1vZGFsT2JnLmNsYXNzTGlzdC5hZGQoJ2RlYWN0aXZhdGUnKTtcbiAgICAgIH0pO1xuICAgICAgLy8g0LDQvdC40LzQsNGG0LjRjyDQv9C+0Y/QstC70LXQvdC40Y8g0L7QutC90LBcbiAgICAgIGlmICghbW9kYWxPYmcuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWFjdGl2YXRlJykpIHtcbiAgICAgICAgZ3NhcC5mcm9tVG8oJy5tb2RhbF9fYm94JywgeyBzY2FsZVg6MC41LCBzY2FsZVk6MC41LCBvcGFjaXR5OiAwLjggfSwgeyBkdXJhdGlvbjogMC42LCBzY2FsZVg6MSwgc2NhbGVZOjEsIG9wYWNpdHk6IDEgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufSk7XG4vLyBtb2RhbCBzY3JvbGxcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9fYm94JykuZm9yRWFjaCgoZWwpID0+IHtcbiAgbmV3IFNpbXBsZUJhcihlbCwge1xuICAgIHNjcm9sbGJhck1heFNpemU6IDQwLFxuICB9KTtcbn0pO1xuLy8gY2F0YWxvZ1xuLy8gdGFiXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uX19saW5rJykuZm9yRWFjaCgodGFiTGluaykgPT4ge1xuICAgIHRhYkxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHsgcGF0aCB9ID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0O1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbl9fbGluaycpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjY29yZGlvbl9fbGlua19hY3RpdmUnKTtcbiAgICAgIH0pO1xuICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY2NvcmRpb25fX2xpbmtfYWN0aXZlJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiX19pdGVtJykuZm9yRWFjaCgodGFiQ29udGVudCkgPT4ge1xuICAgICAgICB0YWJDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2RlYWN0aXZhdGUnKTtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdGFyZ2V0PVwiJHtwYXRofVwiXWApLmNsYXNzTGlzdC5yZW1vdmUoJ2RlYWN0aXZhdGUnKTtcbiAgICAgIC8vINCw0L3QuNC80LDRhtC40Y8g0LTQu9GPINC/0L7Rj9Cy0LvQtdC90LjRj1xuICAgICAgZ3NhcC5mcm9tVG8oJy50YWJfX2l0ZW0nLCB7IG9wYWNpdHk6IDAgfSwgeyBkdXJhdGlvbjogMC44LCBvcGFjaXR5OiAxIH0pO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuLy8gYWNjb3JkaW9uXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBuZXcgQWNjb3JkaW9uKCcuanMtYWNjb3JkaW9uLWNvbnRhaW5lcicsIHtcbiAgICBvcGVuT25Jbml0OiBbMF0sXG4gIH0pO1xufSk7XG4vLyBzd2lwZXItZXZlbnRzXG5jb25zdCBzd2lwZXJFdmVudHMgPSBuZXcgU3dpcGVyKCcuZXZlbnRzX19zd2lwZXInLCB7XG4gIHNsaWRlc1BlclZpZXc6IDEsXG4gIGdyaWQ6IHtcbiAgICByb3dzOiAxLFxuICAgIGZpbGw6ICdyb3cnLFxuICB9LFxuICBsb29wOiB0cnVlLFxuICBhMTF5OiBmYWxzZSxcbiAga2V5Ym9hcmQ6IHRydWUsXG4gIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gIHdhdGNoU2xpZGVzVmlzaWJpbGl0eTogdHJ1ZSxcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogJy5ldmVudHNfX2J0bi1uZXh0JyxcbiAgfSxcbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiAnLmV2ZW50c19fcGFnaW5hdGlvbicsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIDU2ODoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIHNsaWRlc1Blckdyb3VwOiAyLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAzNCxcbiAgICB9LFxuICAgIDk5Mjoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgIHNsaWRlc1Blckdyb3VwOiAzLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAyNCxcbiAgICB9LFxuICAgIDE0ODA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICBzbGlkZXNQZXJHcm91cDogMyxcbiAgICAgIHNwYWNlQmV0d2VlbjogNTIsXG4gICAgfSxcbiAgfSxcbn0pO1xuLy8gc3dpcGVyLXByb2dlY3RzXG5jb25zdCBzd2lwZXJQcm9nZWN0cyA9IG5ldyBTd2lwZXIoJy5wcm9nZWN0c19fc3dpcGVyJywge1xuICBzbGlkZXNQZXJWaWV3OiAxLFxuICBncmlkOiB7XG4gICAgcm93czogMSxcbiAgICBmaWxsOiAncm93JyxcbiAgfSxcbiAgbmF2aWdhdGlvbjoge1xuICAgIHByZXZFbDogJy5wcm9nZWN0c19fYnRuX3ByZXYnLFxuICAgIG5leHRFbDogJy5wcm9nZWN0c19fYnRuX25leHQnLFxuICAgIGRpc2FibGVkQ2xhc3M6ICdzd2lwZXItYnRuLWRpc2FibGVkLWxpZ2h0JyxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICA3NTA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzcGFjZUJldHdlZW46IDM0LFxuICAgIH0sXG4gICAgNzY5OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgc3BhY2VCZXR3ZWVuOiA1MCxcbiAgICB9LFxuICAgIDE0ODA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICBzcGFjZUJldHdlZW46IDUwLFxuICAgIH0sXG4gIH0sXG5cbn0pO1xuLy8gdG9vbHRpcFxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgdGlwcHkoJy5qcy10b29sdGlwJywge1xuICAgIG1heFdpZHRoOiAyNjQsXG4gICAgdGhlbWU6ICdjYXN0b20tdG9vbHRpcCcsXG4gIH0pO1xufSk7XG4vLyBjb250YWN0c1xuLy8gY29udGFjdHMgZm9ybVxuY29uc3Qgc2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT0ndGVsJ11cIik7XG5jb25zdCBpbSA9IG5ldyBJbnB1dG1hc2soJys3ICg5OTkpLTk5OS05OS05OScpO1xuaW0ubWFzayhzZWxlY3Rvcik7XG5uZXcgSnVzdFZhbGlkYXRlKCcuZm9ybScsIHtcbiAgcnVsZXM6IHtcbiAgICBuYW1lOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIG1pbkxlbmd0aDogMixcbiAgICAgIG1heExlbmd0aDogMjQsXG4gICAgfSxcbiAgICB0ZWw6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgc3RyZW5ndGg6IHsgY3VzdG9tOiAnW15fXSQnIH0sXG4gICAgfSxcbiAgfSxcbiAgbWVzc2FnZXM6IHtcbiAgICBuYW1lOiB7XG4gICAgICByZXF1aXJlZDogJ9Ca0LDQuiDQstCw0YEg0LfQvtCy0YPRgj8nLFxuICAgICAgbWluTGVuZ3RoOiAn0JrQvtGA0L7RgtC60L7QtSDQuNC80Y8nLFxuICAgICAgbWF4TGVuZ3RoOiAn0JTQu9C40L3QvdC+0LUg0LjQvNGPJyxcbiAgICB9LFxuICAgIHRlbDogJ9Cj0LrQsNC20LjRgtC1INCy0LDRiCDRgtC10LvQtdGE0L7QvScsXG4gIH0sXG4gIHN1Ym1pdEhhbmRsZXI6IGZ1bmN0aW9uKHRoaXNGb3JtKSB7XG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXNGb3JtKTtcblxuICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgaWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCfQntGC0L/RgNCw0LLQu9C10L3QvicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgeGhyLm9wZW4oJ1BPU1QnLCAnbWFpbC5waHAnLCB0cnVlKTtcbiAgICB4aHIuc2VuZChmb3JtRGF0YSk7XG5cbiAgICB0aGlzRm9ybS5yZXNldCgpO1xuICB9XG59KTtcbi8vIGNvbnRhY3RzIG1hcFxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgbXlNYXBMb2FkID0gdHJ1ZTtcbiAgY29uc3QgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKCdtYXAnLCB7XG4gICAgY2VudGVyOiBbNTUuNzU4NDY4LCAzNy42MDEwODhdLFxuICAgIHpvb206IDE1LFxuICAgIGNvbnRyb2xzOiBbJ2dlb2xvY2F0aW9uQ29udHJvbCcsICd6b29tQ29udHJvbCddLFxuICB9LFxuICB7XG4gICAgc3VwcHJlc3NNYXBPcGVuQmxvY2s6IHRydWUsXG4gICAgZ2VvbG9jYXRpb25Db250cm9sU2l6ZTogXCJsYXJnZVwiLFxuICAgIGdlb2xvY2F0aW9uQ29udHJvbFBvc2l0aW9uOiAgeyB0b3A6IFwiMjAwcHhcIiwgcmlnaHQ6IFwiMjBweFwiIH0sXG4gICAgZ2VvbG9jYXRpb25Db250cm9sRmxvYXQ6ICdub25lJyxcbiAgICB6b29tQ29udHJvbFNpemU6IFwic21hbGxcIixcbiAgICB6b29tQ29udHJvbEZsb2F0OiBcIm5vbmVcIixcbiAgICB6b29tQ29udHJvbFBvc2l0aW9uOiB7IHRvcDogXCIxMjBweFwiLCByaWdodDogXCIyMHB4XCIgfVxuICB9KTtcbiAgY29uc3QgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFs1NS43NTg0NjgsIDM3LjYwMTA4OF0sIHt9LCB7XG4gICAgaWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2UnLFxuICAgIGljb25JbWFnZUhyZWY6ICdpbWcvZ2VvT2JqZWN0LnN2ZycsXG4gICAgaWNvbkltYWdlU2l6ZTogWzIwLCAyMF0sXG4gIH0pO1xuICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XG4gIC8vINC+0YLQutC70Y7Rh9C40YLRjCDQt9GD0LxcbiAgbXlNYXAuYmVoYXZpb3JzLmRpc2FibGUoJ3Njcm9sbFpvb20nKTtcbn1cbi8vINC/0LvQsNCy0L3Ri9C5INGB0LrRgNC+0LvQu1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXNjcm9sbC1saW5rJykuZm9yRWFjaChsaW5rID0+IHtcbiAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGNvbnN0IGhyZWYgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpLnN1YnN0cmluZygxKTtcbiAgICAgIGNvbnN0IHNjcm9sbFRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhyZWYpO1xuICAgICAgY29uc3QgZWxlbWVudFBvc2l0aW9uID0gc2Nyb2xsVGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHdpbmRvdy5zY3JvbGxCeSh7XG4gICAgICAgICAgdG9wOiBlbGVtZW50UG9zaXRpb24sXG4gICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICB9KTtcbiAgfSk7XG59KTtcbi8vINGH0LDRgdGC0LjRh9C90L4g0L7RgtC70L7QttC10L3QvdCw0Y8g0LfQsNCz0YDRg9C30LrQsCDQutCw0YDRgtGLXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAvLyDQn9C+0LvRg9GH0LDQtdC8INC90YPQttC90YvQuSDRjdC70LXQvNC10L3RglxuY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYXAnKTtcbmxldCBteU1hcExvYWQgPSBmYWxzZTtcbmNvbnN0IFZpc2libGUgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIC8vINCS0YHQtSDQv9C+0LfQuNGG0LjQuCDRjdC70LXQvNC10L3RgtCwXG4gIGNvbnN0IHRhcmdldFBvc2l0aW9uID0ge1xuICAgICAgdG9wOiB3aW5kb3cucGFnZVlPZmZzZXQgKyB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wLFxuICAgICAgbGVmdDogd2luZG93LnBhZ2VYT2Zmc2V0ICsgdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQsXG4gICAgICByaWdodDogd2luZG93LnBhZ2VYT2Zmc2V0ICsgdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnJpZ2h0LFxuICAgICAgYm90dG9tOiB3aW5kb3cucGFnZVlPZmZzZXQgKyB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tXG4gICAgfSxcbiAgICAvLyDQn9C+0LvRg9GH0LDQtdC8INC/0L7Qt9C40YbQuNC4INC+0LrQvdCwXG4gICAgd2luZG93UG9zaXRpb24gPSB7XG4gICAgICB0b3A6IHdpbmRvdy5wYWdlWU9mZnNldCxcbiAgICAgIGxlZnQ6IHdpbmRvdy5wYWdlWE9mZnNldCxcbiAgICAgIHJpZ2h0OiB3aW5kb3cucGFnZVhPZmZzZXQgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgICBib3R0b206IHdpbmRvdy5wYWdlWU9mZnNldCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcbiAgICB9O1xuICBpZiAodGFyZ2V0UG9zaXRpb24uYm90dG9tID4gd2luZG93UG9zaXRpb24udG9wICYmIC8vINCV0YHQu9C4INC/0L7Qt9C40YbQuNGPINC90LjQttC90LXQuSDRh9Cw0YHRgtC4INGN0LvQtdC80LXQvdGC0LAg0LHQvtC70YzRiNC1INC/0L7Qt9C40YbQuNC4INCy0LXRgNGF0L3QtdC5INGH0LDQudGC0Lgg0L7QutC90LAsINGC0L4g0Y3Qu9C10LzQtdC90YIg0LLQuNC00LXQvSDRgdCy0LXRgNGF0YNcbiAgICB0YXJnZXRQb3NpdGlvbi50b3AgPCB3aW5kb3dQb3NpdGlvbi5ib3R0b20gJiYgLy8g0JXRgdC70Lgg0L/QvtC30LjRhtC40Y8g0LLQtdGA0YXQvdC10Lkg0YfQsNGB0YLQuCDRjdC70LXQvNC10L3RgtCwINC80LXQvdGM0YjQtSDQv9C+0LfQuNGG0LjQuCDQvdC40LbQvdC10Lkg0YfQsNC50YLQuCDQvtC60L3QsCwg0YLQviDRjdC70LXQvNC10L3RgiDQstC40LTQtdC9INGB0L3QuNC30YNcbiAgICB0YXJnZXRQb3NpdGlvbi5yaWdodCA+IHdpbmRvd1Bvc2l0aW9uLmxlZnQgJiYgLy8g0JXRgdC70Lgg0L/QvtC30LjRhtC40Y8g0L/RgNCw0LLQvtC5INGB0YLQvtGA0L7QvdGLINGN0LvQtdC80LXQvdGC0LAg0LHQvtC70YzRiNC1INC/0L7Qt9C40YbQuNC4INC70LXQstC+0Lkg0YfQsNGB0YLQuCDQvtC60L3QsCwg0YLQviDRjdC70LXQvNC10L3RgiDQstC40LTQtdC9INGB0LvQtdCy0LBcbiAgICB0YXJnZXRQb3NpdGlvbi5sZWZ0IDwgd2luZG93UG9zaXRpb24ucmlnaHQpIHsgLy8g0JXRgdC70Lgg0L/QvtC30LjRhtC40Y8g0LvQtdCy0L7QuSDRgdGC0L7RgNC+0L3RiyDRjdC70LXQvNC10L3RgtCwINC80LXQvdGM0YjQtSDQv9C+0LfQuNGG0LjQuCDQv9GA0LDQstC+0Lkg0YfQsNC50YLQuCDQvtC60L3QsCwg0YLQviDRjdC70LXQvNC10L3RgiDQstC40LTQtdC9INGB0L/RgNCw0LLQsFxuICAgIC8vINCV0YHQu9C4INGN0LvQtdC80LXQvdGCINC/0L7Qu9C90L7RgdGC0YzRjiDQstC40LTQvdC+LCDRgtC+INC30LDQv9GD0YHQutCw0LXQvCDRgdC70LXQtNGD0Y7RidC40Lkg0LrQvtC0XG4gICAgeW1hcHMucmVhZHkoaW5pdCk7XG4gICAgLy8g0LTQsNC10Lwg0L/QvtC90Y/RgtGMINGH0YLQviDQutCw0YDRgtCwINC30LDQs9GA0YPQttC10L3QsFxuICAgIG15TWFwTG9hZCA9IHRydWU7XG4gICAgY29uc29sZS5sb2coJ9Ca0LDRgNGC0LAg0L/QvtC00LPRgNGD0LfQuNC70LDRgdGMJyk7XG4gIH1cbn07XG4vLyDQl9Cw0L/Rg9GB0LrQsNC10Lwg0YTRg9C90LrRhtC40Y4g0L/RgNC4INC/0YDQvtC60YDRg9GC0LrQtSDRgdGC0YDQsNC90LjRhtGLXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XG4gIGlmIChteU1hcExvYWQgIT09IHRydWUpIHtcbiAgICBWaXNpYmxlIChlbGVtZW50KTtcbiAgfVxufSk7XG4vL9C30LDQv9GD0YHRgtC40Lwg0YTRg9C90LrRhtC40Y4g0YHRgNCw0LfRgy4g0JAg0YLQviDQstC00YDRg9CzLCDRjdC70LXQvNC10L3RgiDQuNC30L3QsNGH0LDQu9GM0L3QviDQstC40LTQvdC+XG5WaXNpYmxlIChlbGVtZW50KTtcbn0pOyJdLCJmaWxlIjoic2NyeXB0LmpzIn0=
