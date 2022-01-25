// swiper-events

let swiperEvents = new Swiper(".events__swiper", {
  pagination: {
    el: ".events__pagination",
    clickable: true,
  },
});

// swiper-progects
let swiperProgects = new Swiper(".progects__swiper", {
  navigation: {
    prevEl: ".progects__button_prev",
    nextEl: ".progects__button_next",
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
  let myMap = new ymaps.Map("map", {
    center: [55.758468, 37.601088],
    zoom: 15,
  });

  let myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/geoObject.svg',
    iconImageSize: [20, 20],
  });

  myMap.geoObjects.add(myPlacemark);
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3J5cHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3dpcGVyLWV2ZW50c1xuXG5sZXQgc3dpcGVyRXZlbnRzID0gbmV3IFN3aXBlcihcIi5ldmVudHNfX3N3aXBlclwiLCB7XG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogXCIuZXZlbnRzX19wYWdpbmF0aW9uXCIsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICB9LFxufSk7XG5cbi8vIHN3aXBlci1wcm9nZWN0c1xubGV0IHN3aXBlclByb2dlY3RzID0gbmV3IFN3aXBlcihcIi5wcm9nZWN0c19fc3dpcGVyXCIsIHtcbiAgbmF2aWdhdGlvbjoge1xuICAgIHByZXZFbDogXCIucHJvZ2VjdHNfX2J1dHRvbl9wcmV2XCIsXG4gICAgbmV4dEVsOiBcIi5wcm9nZWN0c19fYnV0dG9uX25leHRcIixcbiAgfSxcbn0pO1xuXG4vLyBzd2lwZXItZ2FsbGVyeVxuXG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcihcIi5nYWxsZXJ5X19zd2lwZXJcIiwge1xuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6IFwiLmdhbGxlcnlfX3BhZ2luYXRpb25cIixcbiAgICB0eXBlOiBcImZyYWN0aW9uXCIsXG4gIH0sXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6IFwiLmdhbGxlcnlfX2J1dHRvbi1uZXh0XCIsXG4gICAgcHJldkVsOiBcIi5nYWxsZXJ5X19idXR0b24tcHJldlwiLFxuICB9LFxufSk7XG5cbi8vIGNvbnRhY3RzXG4vLyBmb3JtXG5cbmxldCBzZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPSd0ZWwnXVwiKTtcbmxldCBpbSA9IG5ldyBJbnB1dG1hc2soXCIrNyAoOTk5KS05OTktOTktOTlcIik7XG5pbS5tYXNrKHNlbGVjdG9yKTtcblxubmV3IEp1c3RWYWxpZGF0ZSgnLmZvcm0nLCB7XG4gIHJ1bGVzOiB7XG4gICAgbmFtZToge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBtaW5MZW5ndGg6IDIsXG4gICAgICBtYXhMZW5ndGg6IDI0LFxuICAgIH0sXG5cbiAgICB0ZWw6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgc3RyZW5ndGg6IHtjdXN0b206ICdbXl9dJCd9LFxuICAgIH0sXG4gIH0sXG5cbiAgbWVzc2FnZXM6IHtcbiAgICBuYW1lOiB7XG4gICAgICByZXF1aXJlZDogJ9Ca0LDQuiDQstCw0YEg0LfQvtCy0YPRgj8nLFxuICAgICAgbWluTGVuZ3RoOiAn0JrQvtGA0L7RgtC60L7QtSDQuNC80Y8nLFxuICAgICAgbWF4TGVuZ3RoOiAn0JTQu9C40L3QvdC+0LUg0LjQvNGPJ1xuICAgIH0sXG5cbiAgICB0ZWw6ICfQo9C60LDQttC40YLQtSDQstCw0Ygg0YLQtdC70LXRhNC+0L0nLFxuICB9LFxufSk7XG5cbi8vIG1hcFxueW1hcHMucmVhZHkoaW5pdCk7XG5mdW5jdGlvbiBpbml0KCkge1xuICBsZXQgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKFwibWFwXCIsIHtcbiAgICBjZW50ZXI6IFs1NS43NTg0NjgsIDM3LjYwMTA4OF0sXG4gICAgem9vbTogMTUsXG4gIH0pO1xuXG4gIGxldCBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzU1Ljc1ODQ2OCwgMzcuNjAxMDg4XSwge30sIHtcbiAgICBpY29uTGF5b3V0OiAnZGVmYXVsdCNpbWFnZScsXG4gICAgaWNvbkltYWdlSHJlZjogJ2ltZy9nZW9PYmplY3Quc3ZnJyxcbiAgICBpY29uSW1hZ2VTaXplOiBbMjAsIDIwXSxcbiAgfSk7XG5cbiAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xufSJdLCJmaWxlIjoic2NyeXB0LmpzIn0=
