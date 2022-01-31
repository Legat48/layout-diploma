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
      gsap.fromTo('.nav__box', { x: -500, opacity: 0 }, { duration: 0.6, x: 0, opacity: 1 });
    } else if ((!burger.classList.contains('burger--active'))) {
      search.style.zIndex = 4;
      gsap.fromTo('.nav__box', { x: 0, opacity: 1 }, { duration: 0.6, x: -500 });
      clearTimeout(setTimeout(()=>{nav.style.zIndex = -1;}, 600))
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3J5cHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG5cbi8vIGhlYWRlcnNcbi8vIG5hdlxuLy8g0LDQvdC40LzQsNGG0LjRjyDQutC90L7Qv9C60Lgg0LHRg9GA0LPQtdGA0LBcbmNvbnN0IGJ1cmdlckFuaW0gPSAoKCkgPT4ge1xuICBjb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyJyk7XG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYnKTtcbiAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC10b2dnbGUnKTtcbiAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnYnVyZ2VyLS1hY3RpdmUnKTtcbiAgICBpZiAoYnVyZ2VyLmNsYXNzTGlzdC5jb250YWlucygnYnVyZ2VyLS1hY3RpdmUnKSkge1xuICAgICAgc2VhcmNoLnN0eWxlLnpJbmRleCA9IDE7XG4gICAgICBuYXYuc3R5bGUuekluZGV4ID0gMjtcbiAgICAgIGdzYXAuZnJvbVRvKCcubmF2X19ib3gnLCB7IHg6IC01MDAsIG9wYWNpdHk6IDAgfSwgeyBkdXJhdGlvbjogMC42LCB4OiAwLCBvcGFjaXR5OiAxIH0pO1xuICAgIH0gZWxzZSBpZiAoKCFidXJnZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdidXJnZXItLWFjdGl2ZScpKSkge1xuICAgICAgc2VhcmNoLnN0eWxlLnpJbmRleCA9IDQ7XG4gICAgICBnc2FwLmZyb21UbygnLm5hdl9fYm94JywgeyB4OiAwLCBvcGFjaXR5OiAxIH0sIHsgZHVyYXRpb246IDAuNiwgeDogLTUwMCB9KTtcbiAgICAgIGNsZWFyVGltZW91dChzZXRUaW1lb3V0KCgpPT57bmF2LnN0eWxlLnpJbmRleCA9IC0xO30sIDYwMCkpXG4gICAgfVxuICB9KTtcbn0pKCk7XG4vLyAvLyBzZWFyY2hcbmNvbnN0IHNlYXJjaEFuaW0gPSAoKCkgPT4ge1xuICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLXRvZ2dsZScpO1xuICBjb25zdCBzZWFyY2hTdmdPcGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZS1vcGVuJyk7XG4gIGNvbnN0IHNlYXJjaFN2Z0Nsb3NlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUtY2xvc2VkJyk7XG4gIHNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgc2VhcmNoU3ZnT3Blbi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICBzZWFyY2hTdmdDbG9zZWQuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgIGlmIChzZWFyY2guY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgZ3NhcC5mcm9tVG8oJy5zZWFyY2gnLCB7IHk6IC0xMDAsIG9wYWNpdHk6IDAgfSwgeyBkdXJhdGlvbjogMC42LCB5OiAwLCBvcGFjaXR5OiAxIH0pO1xuICAgIH0gZWxzZSBpZiAoKCFzZWFyY2guY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkpIHtcbiAgICAgIGdzYXAudG8oJy5zZWFyY2gnLCB7IGR1cmF0aW9uOiAwLjYsIHk6IC0xMDAsIG9wYWNpdHk6IDAgfSk7XG4gICAgfVxuICB9KTtcbn0pKCk7XG5cbi8vIGRyb3Bkb3duXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd25fX2J0bicpLmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXRoIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgICBjb25zdCBkcm9wZG93bkJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXRhcmdldD1cIiR7cGF0aH1cIl1gKTtcbiAgICAgIC8vINC/0LXRgNC10LLQvtGA0LDRh9C40LLQsNC10Lwg0YHRgtGA0LXQu9C+0YfQutGDINC/0YDQuCDQutC70LjQutC1XG4gICAgICBjb25zdCBpY29uID0gYnRuLnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bl9faWNvbi1zdmcnKTtcbiAgICAgIGljb24uY2xhc3NMaXN0LnRvZ2dsZSgnZHJvcGRvd25fX2ljb24tc3ZnX2FjdGl2ZScpO1xuICAgICAgLy8g0LfQsNC60YDRi9Cy0LDQtdC8INCy0YHQtSDRgdC/0LjRgdC60Lgg0Lgg0L/QtdGA0LXQutC70Y7Rh9Cw0LXQvCDQvdCw0LbQsNGC0YvQuVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duX19ib3gnKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBpZiAoZHJvcGRvd25Cb3ggIT09IGVsKSB7XG4gICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZHJvcGRvd25Cb3guY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG5cbi8vIHNjcm9sbGJhclxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd25fX3Njcm9sbGJhcicpLmZvckVhY2goKGVsKSA9PiB7XG4gIG5ldyBTaW1wbGVCYXIoZWwsIHtcbiAgICBzY3JvbGxiYXJNYXhTaXplOiA0MCxcbiAgfSk7XG59KTtcblxuLy8gc3dpcGVyLWhlcm9cbmNvbnN0IHN3aXBlckhlcm8gPSBuZXcgU3dpcGVyKCcuaGVyb19fc3dpcGVyJywge1xuICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXG4gIGxvb3A6IHRydWUsXG4gIGVmZmVjdDogJ2ZhZGUnLFxuICBzcGVlZDogMTAwMDAsXG4gIGF1dG9wbGF5OiB7XG4gICAgZGVsYXk6IDEwMDAwLFxuICB9LFxufSk7XG5cbi8vIGdhbGxlcnlcbi8vIHN3aXBlci1nYWxsZXJ5XG5jb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuZ2FsbGVyeV9fc3dpcGVyJywge1xuICBzbGlkZXNQZXJWaWV3OiAxLFxuICBncmlkOiB7XG4gICAgcm93czogMSxcbiAgICBmaWxsOiAncm93JyxcbiAgfSxcbiAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiAnLmdhbGxlcnlfX3BhZ2luYXRpb24nLFxuICAgIHR5cGU6ICdmcmFjdGlvbicsXG4gIH0sXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6ICcuZ2FsbGVyeV9fYnV0dG9uLW5leHQnLFxuICAgIHByZXZFbDogJy5nYWxsZXJ5X19idXR0b24tcHJldicsXG4gIH0sXG5cbiAgYnJlYWtwb2ludHM6IHtcbiAgICA1NzY6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzbGlkZXNQZXJHcm91cDogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogMzQsXG4gICAgfSxcbiAgICAxMDI0OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDYsXG4gICAgICBzcGFjZUJldHdlZW46IDUwLFxuICAgIH0sXG4gIH0sXG4gIGExMXk6IGZhbHNlLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgd2F0Y2hTbGlkZXNWaXNpYmlsaXR5OiB0cnVlLFxuICBzbGlkZVZpc2libGVDbGFzczogJ3NsaWRlLXZpc2libGUnLFxuICBvbjoge1xuICAgIGluaXQoKSB7XG4gICAgICB0aGlzLnNsaWRlcy5mb3JFYWNoKChzbGlkZSkgPT4ge1xuICAgICAgICBpZiAoIXNsaWRlLmNsYXNzTGlzdC5jb250YWlucygnc2xpZGUtdmlzaWJsZScpKSB7XG4gICAgICAgICAgc2xpZGUudGFiSW5kZXggPSAnLTEnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNsaWRlLnRhYkluZGV4ID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc2xpZGVDaGFuZ2UoKSB7XG4gICAgICB0aGlzLnNsaWRlcy5mb3JFYWNoKChzbGlkZSkgPT4ge1xuICAgICAgICBpZiAoIXNsaWRlLmNsYXNzTGlzdC5jb250YWlucygnc2xpZGUtdmlzaWJsZScpKSB7XG4gICAgICAgICAgc2xpZGUudGFiSW5kZXggPSAnLTEnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNsaWRlLnRhYkluZGV4ID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gIH0sXG59KTtcbi8vIHNlbGVjdC1nYWxsZXJ5XG5jb25zdCBleGFtcGxlU2VsZWN0ID0gKCgpID0+IHtcbiAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0Jyk7XG4gIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBjaG9pY2VzID0gbmV3IENob2ljZXMoZWxlbWVudCwge1xuICAgICAgc2VhcmNoRW5hYmxlZDogZmFsc2UsXG4gICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICBzaG91bGRTb3J0OiBmYWxzZSxcbiAgICAgIGl0ZW1TZWxlY3RUZXh0OiAnJyxcbiAgICB9KTtcbiAgfSk7XG59KSgpO1xuXG4vLyBjYXRhbG9nXG4vLyB0YWJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hY2NvcmRpb25fX2xpbmsnKS5mb3JFYWNoKCh0YWJMaW5rKSA9PiB7XG4gICAgdGFiTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXRoIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWNjb3JkaW9uX19saW5rJykuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWNjb3JkaW9uX19saW5rX2FjdGl2ZScpO1xuICAgICAgfSk7XG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjY29yZGlvbl9fbGlua19hY3RpdmUnKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJfX2l0ZW0nKS5mb3JFYWNoKCh0YWJDb250ZW50KSA9PiB7XG4gICAgICAgIHRhYkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZGVhY3RpdmF0ZScpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXJnZXQ9XCIke3BhdGh9XCJdYCkuY2xhc3NMaXN0LnJlbW92ZSgnZGVhY3RpdmF0ZScpO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuLy8gYWNjb3JkaW9uXG4oKCkgPT4ge1xuICBuZXcgQWNjb3JkaW9uKCcuanMtYWNjb3JkaW9uLWNvbnRhaW5lcicsIHtcbiAgICBvcGVuT25Jbml0OiBbMF0sXG4gIH0pO1xufSkoKTtcblxuLy8gc3dpcGVyLWV2ZW50c1xuY29uc3Qgc3dpcGVyRXZlbnRzID0gbmV3IFN3aXBlcignLmV2ZW50c19fc3dpcGVyJywge1xuICBzbGlkZXNQZXJWaWV3OiAxLFxuICBncmlkOiB7XG4gICAgcm93czogMSxcbiAgICBmaWxsOiAncm93JyxcbiAgfSxcbiAgbG9vcDogdHJ1ZSxcbiAgYTExeTogZmFsc2UsXG4gIGtleWJvYXJkOiB0cnVlLFxuICB3YXRjaFNsaWRlc1Byb2dyZXNzOiB0cnVlLFxuICB3YXRjaFNsaWRlc1Zpc2liaWxpdHk6IHRydWUsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6ICcuZXZlbnRzX19idXR0b24tbmV4dCcsXG4gIH0sXG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogJy5ldmVudHNfX3BhZ2luYXRpb24nLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICA1NzY6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzbGlkZXNQZXJHcm91cDogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogMzQsXG4gICAgfSxcbiAgICA5OTI6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICBzbGlkZXNQZXJHcm91cDogMyxcbiAgICAgIHNwYWNlQmV0d2VlbjogNTAsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG4vLyBzd2lwZXItcHJvZ2VjdHNcbmNvbnN0IHN3aXBlclByb2dlY3RzID0gbmV3IFN3aXBlcignLnByb2dlY3RzX19zd2lwZXInLCB7XG4gIGxvb3A6IHRydWUsXG4gIG5hdmlnYXRpb246IHtcbiAgICBwcmV2RWw6ICcucHJvZ2VjdHNfX2J1dHRvbl9wcmV2JyxcbiAgICBuZXh0RWw6ICcucHJvZ2VjdHNfX2J1dHRvbl9uZXh0JyxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICA1NzY6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzbGlkZXNQZXJHcm91cDogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogMzQsXG4gICAgfSxcbiAgICAxMDI0OiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDYsXG4gICAgICBzcGFjZUJldHdlZW46IDUwLFxuICAgIH0sXG4gIH0sXG4gIGExMXk6IGZhbHNlLFxuICBrZXlib2FyZDogdHJ1ZSxcbiAgd2F0Y2hTbGlkZXNQcm9ncmVzczogdHJ1ZSxcbiAgd2F0Y2hTbGlkZXNWaXNpYmlsaXR5OiB0cnVlLFxuICBzbGlkZVZpc2libGVDbGFzczogJ3NsaWRlLXZpc2libGUnLFxuICBvbjoge1xuICAgIGluaXQoKSB7XG4gICAgICB0aGlzLnNsaWRlcy5mb3JFYWNoKChzbGlkZSkgPT4ge1xuICAgICAgICBpZiAoIXNsaWRlLmNsYXNzTGlzdC5jb250YWlucygnc2xpZGUtdmlzaWJsZScpKSB7XG4gICAgICAgICAgc2xpZGUudGFiSW5kZXggPSAnLTEnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNsaWRlLnRhYkluZGV4ID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgc2xpZGVDaGFuZ2UoKSB7XG4gICAgICB0aGlzLnNsaWRlcy5mb3JFYWNoKChzbGlkZSkgPT4ge1xuICAgICAgICBpZiAoIXNsaWRlLmNsYXNzTGlzdC5jb250YWlucygnc2xpZGUtdmlzaWJsZScpKSB7XG4gICAgICAgICAgc2xpZGUudGFiSW5kZXggPSAnLTEnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNsaWRlLnRhYkluZGV4ID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gIH0sXG59KTtcblxuLy8gdG9vbHRpcFxuXG4oKCkgPT4ge1xuICB0aXBweSgnLmpzLXRvb2x0aXAnLCB7XG4gICAgbWF4V2lkdGg6IDI2NCxcbiAgICB0aGVtZTogJ2Nhc3RvbS10b29sdGlwJyxcbiAgfSk7XG59KSgpO1xuXG4vLyBjb250YWN0c1xuLy8gY29udGFjdHMgZm9ybVxuY29uc3Qgc2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbdHlwZT0ndGVsJ11cIik7XG5jb25zdCBpbSA9IG5ldyBJbnB1dG1hc2soJys3ICg5OTkpLTk5OS05OS05OScpO1xuaW0ubWFzayhzZWxlY3Rvcik7XG5uZXcgSnVzdFZhbGlkYXRlKCcuZm9ybScsIHtcbiAgcnVsZXM6IHtcbiAgICBuYW1lOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIG1pbkxlbmd0aDogMixcbiAgICAgIG1heExlbmd0aDogMjQsXG4gICAgfSxcblxuICAgIHRlbDoge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBzdHJlbmd0aDogeyBjdXN0b206ICdbXl9dJCcgfSxcbiAgICB9LFxuICB9LFxuICBtZXNzYWdlczoge1xuICAgIG5hbWU6IHtcbiAgICAgIHJlcXVpcmVkOiAn0JrQsNC6INCy0LDRgSDQt9C+0LLRg9GCPycsXG4gICAgICBtaW5MZW5ndGg6ICfQmtC+0YDQvtGC0LrQvtC1INC40LzRjycsXG4gICAgICBtYXhMZW5ndGg6ICfQlNC70LjQvdC90L7QtSDQuNC80Y8nLFxuICAgIH0sXG4gICAgdGVsOiAn0KPQutCw0LbQuNGC0LUg0LLQsNGIINGC0LXQu9C10YTQvtC9JyxcbiAgfSxcbn0pO1xuXG4vLyBjb250YWN0cyBtYXBcbnltYXBzLnJlYWR5KGluaXQpO1xuZnVuY3Rpb24gaW5pdCgpIHtcbiAgY29uc3QgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKCdtYXAnLCB7XG4gICAgY2VudGVyOiBbNTUuNzU4NDY4LCAzNy42MDEwODhdLFxuICAgIHpvb206IDE1LFxuICAgIGNvbnRyb2xzOiBbJ2dlb2xvY2F0aW9uQ29udHJvbCcsICd6b29tQ29udHJvbCddLFxuICB9LFxuICB7XG4gICAgc3VwcHJlc3NNYXBPcGVuQmxvY2s6IHRydWUsXG4gICAgZ2VvbG9jYXRpb25Db250cm9sU2l6ZTogXCJsYXJnZVwiLFxuICAgIGdlb2xvY2F0aW9uQ29udHJvbFBvc2l0aW9uOiAgeyB0b3A6IFwiMjAwcHhcIiwgcmlnaHQ6IFwiMjBweFwiIH0sXG4gICAgZ2VvbG9jYXRpb25Db250cm9sRmxvYXQ6ICdub25lJyxcbiAgICB6b29tQ29udHJvbFNpemU6IFwic21hbGxcIixcbiAgICB6b29tQ29udHJvbEZsb2F0OiBcIm5vbmVcIixcbiAgICB6b29tQ29udHJvbFBvc2l0aW9uOiB7IHRvcDogXCIxMjBweFwiLCByaWdodDogXCIyMHB4XCIgfVxuICB9KTtcbiAgY29uc3QgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFs1NS43NTg0NjgsIDM3LjYwMTA4OF0sIHt9LCB7XG4gICAgaWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2UnLFxuICAgIGljb25JbWFnZUhyZWY6ICdpbWcvZ2VvT2JqZWN0LnN2ZycsXG4gICAgaWNvbkltYWdlU2l6ZTogWzIwLCAyMF0sXG4gIH0pO1xuICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XG59XG4iXSwiZmlsZSI6InNjcnlwdC5qcyJ9
