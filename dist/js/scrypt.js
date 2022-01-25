// swiper-events

let swiperEvents = new Swiper(".events__swiper", {
  pagination: {
    el: ".events__pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

// swiper-progects
let swiperProgects = new Swiper(".progects__swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// swiper-gallery

var swiper = new Swiper(".gallery__swiper", {
  pagination: {
    el: ".gallery__pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".gallery__button-next",
    prevEl: ".gallery__button-prev",
  },
});

// contacts
// form

let selector = document.querySelector("input[type='tel']");
let im = new Inputmask("+7 (999)-999-99-99");
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
      strength: {custom: '[^_]$'},
    },
  },

  messages: {
    name: {
      required: 'Как вас зовут?',
      minLength: 'Короткое имя',
      maxLength: 'Длинное имя'
    },

    tel: 'Укажите ваш телефон',
  },
});

// map
ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.770624, 37.632742],
    zoom: 16,
    controls: ['']
  });

  var myPlacemark = new ymaps.Placemark([55.770624, 37.632742], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/geoObject.svg',
    iconImageSize: [12, 12],
    iconImageOffset: [1, 1]
  });

  myMap.geoObjects.add(myPlacemark);
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3J5cHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3dpcGVyLWV2ZW50c1xuXG5sZXQgc3dpcGVyRXZlbnRzID0gbmV3IFN3aXBlcihcIi5ldmVudHNfX3N3aXBlclwiLCB7XG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogXCIuZXZlbnRzX19wYWdpbmF0aW9uXCIsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIHJlbmRlckJ1bGxldDogZnVuY3Rpb24gKGluZGV4LCBjbGFzc05hbWUpIHtcbiAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCInICsgY2xhc3NOYW1lICsgJ1wiPicgKyAoaW5kZXggKyAxKSArIFwiPC9zcGFuPlwiO1xuICAgIH0sXG4gIH0sXG59KTtcblxuLy8gc3dpcGVyLXByb2dlY3RzXG5sZXQgc3dpcGVyUHJvZ2VjdHMgPSBuZXcgU3dpcGVyKFwiLnByb2dlY3RzX19zd2lwZXJcIiwge1xuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICBwcmV2RWw6IFwiLnN3aXBlci1idXR0b24tcHJldlwiLFxuICB9LFxufSk7XG5cbi8vIHN3aXBlci1nYWxsZXJ5XG5cbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLmdhbGxlcnlfX3N3aXBlclwiLCB7XG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogXCIuZ2FsbGVyeV9fcGFnaW5hdGlvblwiLFxuICAgIHR5cGU6IFwiZnJhY3Rpb25cIixcbiAgfSxcbiAgbmF2aWdhdGlvbjoge1xuICAgIG5leHRFbDogXCIuZ2FsbGVyeV9fYnV0dG9uLW5leHRcIixcbiAgICBwcmV2RWw6IFwiLmdhbGxlcnlfX2J1dHRvbi1wcmV2XCIsXG4gIH0sXG59KTtcblxuLy8gY29udGFjdHNcbi8vIGZvcm1cblxubGV0IHNlbGVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W3R5cGU9J3RlbCddXCIpO1xubGV0IGltID0gbmV3IElucHV0bWFzayhcIis3ICg5OTkpLTk5OS05OS05OVwiKTtcbmltLm1hc2soc2VsZWN0b3IpO1xuXG5uZXcgSnVzdFZhbGlkYXRlKCcuZm9ybScsIHtcbiAgcnVsZXM6IHtcbiAgICBuYW1lOiB7XG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIG1pbkxlbmd0aDogMixcbiAgICAgIG1heExlbmd0aDogMjQsXG4gICAgfSxcblxuICAgIHRlbDoge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBzdHJlbmd0aDoge2N1c3RvbTogJ1teX10kJ30sXG4gICAgfSxcbiAgfSxcblxuICBtZXNzYWdlczoge1xuICAgIG5hbWU6IHtcbiAgICAgIHJlcXVpcmVkOiAn0JrQsNC6INCy0LDRgSDQt9C+0LLRg9GCPycsXG4gICAgICBtaW5MZW5ndGg6ICfQmtC+0YDQvtGC0LrQvtC1INC40LzRjycsXG4gICAgICBtYXhMZW5ndGg6ICfQlNC70LjQvdC90L7QtSDQuNC80Y8nXG4gICAgfSxcblxuICAgIHRlbDogJ9Cj0LrQsNC20LjRgtC1INCy0LDRiCDRgtC10LvQtdGE0L7QvScsXG4gIH0sXG59KTtcblxuLy8gbWFwXG55bWFwcy5yZWFkeShpbml0KTtcbmZ1bmN0aW9uIGluaXQoKSB7XG4gIHZhciBteU1hcCA9IG5ldyB5bWFwcy5NYXAoXCJtYXBcIiwge1xuICAgIGNlbnRlcjogWzU1Ljc3MDYyNCwgMzcuNjMyNzQyXSxcbiAgICB6b29tOiAxNixcbiAgICBjb250cm9sczogWycnXVxuICB9KTtcblxuICB2YXIgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFs1NS43NzA2MjQsIDM3LjYzMjc0Ml0sIHt9LCB7XG4gICAgaWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2UnLFxuICAgIGljb25JbWFnZUhyZWY6ICdpbWcvZ2VvT2JqZWN0LnN2ZycsXG4gICAgaWNvbkltYWdlU2l6ZTogWzEyLCAxMl0sXG4gICAgaWNvbkltYWdlT2Zmc2V0OiBbMSwgMV1cbiAgfSk7XG5cbiAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xufSJdLCJmaWxlIjoic2NyeXB0LmpzIn0=
