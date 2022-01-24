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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3J5cHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3dpcGVyLWV2ZW50c1xuXG5sZXQgc3dpcGVyRXZlbnRzID0gbmV3IFN3aXBlcihcIi5ldmVudHNfX3N3aXBlclwiLCB7XG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogXCIuZXZlbnRzX19wYWdpbmF0aW9uXCIsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIHJlbmRlckJ1bGxldDogZnVuY3Rpb24gKGluZGV4LCBjbGFzc05hbWUpIHtcbiAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCInICsgY2xhc3NOYW1lICsgJ1wiPicgKyAoaW5kZXggKyAxKSArIFwiPC9zcGFuPlwiO1xuICAgIH0sXG4gIH0sXG59KTtcblxuLy8gc3dpcGVyLXByb2dlY3RzXG5sZXQgc3dpcGVyUHJvZ2VjdHMgPSBuZXcgU3dpcGVyKFwiLnByb2dlY3RzX19zd2lwZXJcIiwge1xuICBuYXZpZ2F0aW9uOiB7XG4gICAgbmV4dEVsOiBcIi5zd2lwZXItYnV0dG9uLW5leHRcIixcbiAgICBwcmV2RWw6IFwiLnN3aXBlci1idXR0b24tcHJldlwiLFxuICB9LFxufSk7XG5cbi8vIGNvbnRhY3RzXG4vLyBmb3JtXG5cbmxldCBzZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPSd0ZWwnXVwiKTtcbmxldCBpbSA9IG5ldyBJbnB1dG1hc2soXCIrNyAoOTk5KS05OTktOTktOTlcIik7XG5pbS5tYXNrKHNlbGVjdG9yKTtcblxubmV3IEp1c3RWYWxpZGF0ZSgnLmZvcm0nLCB7XG4gIHJ1bGVzOiB7XG4gICAgbmFtZToge1xuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBtaW5MZW5ndGg6IDIsXG4gICAgICBtYXhMZW5ndGg6IDI0LFxuICAgIH0sXG5cbiAgICB0ZWw6IHtcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgc3RyZW5ndGg6IHtjdXN0b206ICdbXl9dJCd9LFxuICAgIH0sXG4gIH0sXG5cbiAgbWVzc2FnZXM6IHtcbiAgICBuYW1lOiB7XG4gICAgICByZXF1aXJlZDogJ9Ca0LDQuiDQstCw0YEg0LfQvtCy0YPRgj8nLFxuICAgICAgbWluTGVuZ3RoOiAn0JrQvtGA0L7RgtC60L7QtSDQuNC80Y8nLFxuICAgICAgbWF4TGVuZ3RoOiAn0JTQu9C40L3QvdC+0LUg0LjQvNGPJ1xuICAgIH0sXG5cbiAgICB0ZWw6ICfQo9C60LDQttC40YLQtSDQstCw0Ygg0YLQtdC70LXRhNC+0L0nLFxuICB9LFxufSk7XG5cbi8vIG1hcFxueW1hcHMucmVhZHkoaW5pdCk7XG5mdW5jdGlvbiBpbml0KCkge1xuICB2YXIgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKFwibWFwXCIsIHtcbiAgICBjZW50ZXI6IFs1NS43NzA2MjQsIDM3LjYzMjc0Ml0sXG4gICAgem9vbTogMTYsXG4gICAgY29udHJvbHM6IFsnJ11cbiAgfSk7XG5cbiAgdmFyIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhbNTUuNzcwNjI0LCAzNy42MzI3NDJdLCB7fSwge1xuICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcbiAgICBpY29uSW1hZ2VIcmVmOiAnaW1nL2dlb09iamVjdC5zdmcnLFxuICAgIGljb25JbWFnZVNpemU6IFsxMiwgMTJdLFxuICAgIGljb25JbWFnZU9mZnNldDogWzEsIDFdXG4gIH0pO1xuXG4gIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcbn0iXSwiZmlsZSI6InNjcnlwdC5qcyJ9
