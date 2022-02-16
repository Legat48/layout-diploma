// console.log('Init!');

// // inputmask
// const form = document.querySelector('.form');
// const telSelector = form.querySelector('input[type="tel"]');
// const inputMask = new Inputmask('+7 (999) 999-99-99');
// inputMask.mask(telSelector);

// const validation = new JustValidate('.form');

// validation
//   .addField('.input-name', [
//     {
//       rule: 'minLength',
//       value: 3,
//     },
//     {
//       rule: 'maxLength',
//       value: 30,
//     },
//     {
//       rule: 'required',
//       value: true,
//       errorMessage: 'Введите имя!'
//     }
//   ])
//   .addField('.input-mail', [
//     {
//       rule: 'required',
//       value: true,
//       errorMessage: 'Email обязателен',
//     },
//     {
//       rule: 'email',
//       value: true,
//       errorMessage: 'Введите корректный Email',
//     },
//   ])
//   .addField('.input-tel', [
//     {
//       rule: 'required',
//       value: true,
//       errorMessage: 'Телефон обязателен',
//     },
//     {
//       rule: 'function',
//       validator: function() {
//         const phone = telSelector.inputmask.unmaskedvalue();
//         return phone.length === 10;
//       },
//       errorMessage: 'Введите корректный телефон',
//     },
//   ]).onSuccess((event) => {
//     console.log('Validation passes and form submitted', event);

//     let formData = new FormData(event.target);

//     console.log(...formData);

//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//           console.log('Отправлено');
//         }
//       }
//     }

//     xhr.open('POST', 'mail.php', true);
//     xhr.send(formData);

//     event.target.reset();
//   });

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnNvbGUubG9nKCdJbml0IScpO1xuXG4vLyAvLyBpbnB1dG1hc2tcbi8vIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybScpO1xuLy8gY29uc3QgdGVsU2VsZWN0b3IgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJ0ZWxcIl0nKTtcbi8vIGNvbnN0IGlucHV0TWFzayA9IG5ldyBJbnB1dG1hc2soJys3ICg5OTkpIDk5OS05OS05OScpO1xuLy8gaW5wdXRNYXNrLm1hc2sodGVsU2VsZWN0b3IpO1xuXG4vLyBjb25zdCB2YWxpZGF0aW9uID0gbmV3IEp1c3RWYWxpZGF0ZSgnLmZvcm0nKTtcblxuLy8gdmFsaWRhdGlvblxuLy8gICAuYWRkRmllbGQoJy5pbnB1dC1uYW1lJywgW1xuLy8gICAgIHtcbi8vICAgICAgIHJ1bGU6ICdtaW5MZW5ndGgnLFxuLy8gICAgICAgdmFsdWU6IDMsXG4vLyAgICAgfSxcbi8vICAgICB7XG4vLyAgICAgICBydWxlOiAnbWF4TGVuZ3RoJyxcbi8vICAgICAgIHZhbHVlOiAzMCxcbi8vICAgICB9LFxuLy8gICAgIHtcbi8vICAgICAgIHJ1bGU6ICdyZXF1aXJlZCcsXG4vLyAgICAgICB2YWx1ZTogdHJ1ZSxcbi8vICAgICAgIGVycm9yTWVzc2FnZTogJ9CS0LLQtdC00LjRgtC1INC40LzRjyEnXG4vLyAgICAgfVxuLy8gICBdKVxuLy8gICAuYWRkRmllbGQoJy5pbnB1dC1tYWlsJywgW1xuLy8gICAgIHtcbi8vICAgICAgIHJ1bGU6ICdyZXF1aXJlZCcsXG4vLyAgICAgICB2YWx1ZTogdHJ1ZSxcbi8vICAgICAgIGVycm9yTWVzc2FnZTogJ0VtYWlsINC+0LHRj9C30LDRgtC10LvQtdC9Jyxcbi8vICAgICB9LFxuLy8gICAgIHtcbi8vICAgICAgIHJ1bGU6ICdlbWFpbCcsXG4vLyAgICAgICB2YWx1ZTogdHJ1ZSxcbi8vICAgICAgIGVycm9yTWVzc2FnZTogJ9CS0LLQtdC00LjRgtC1INC60L7RgNGA0LXQutGC0L3Ri9C5IEVtYWlsJyxcbi8vICAgICB9LFxuLy8gICBdKVxuLy8gICAuYWRkRmllbGQoJy5pbnB1dC10ZWwnLCBbXG4vLyAgICAge1xuLy8gICAgICAgcnVsZTogJ3JlcXVpcmVkJyxcbi8vICAgICAgIHZhbHVlOiB0cnVlLFxuLy8gICAgICAgZXJyb3JNZXNzYWdlOiAn0KLQtdC70LXRhNC+0L0g0L7QsdGP0LfQsNGC0LXQu9C10L0nLFxuLy8gICAgIH0sXG4vLyAgICAge1xuLy8gICAgICAgcnVsZTogJ2Z1bmN0aW9uJyxcbi8vICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgIGNvbnN0IHBob25lID0gdGVsU2VsZWN0b3IuaW5wdXRtYXNrLnVubWFza2VkdmFsdWUoKTtcbi8vICAgICAgICAgcmV0dXJuIHBob25lLmxlbmd0aCA9PT0gMTA7XG4vLyAgICAgICB9LFxuLy8gICAgICAgZXJyb3JNZXNzYWdlOiAn0JLQstC10LTQuNGC0LUg0LrQvtGA0YDQtdC60YLQvdGL0Lkg0YLQtdC70LXRhNC+0L0nLFxuLy8gICAgIH0sXG4vLyAgIF0pLm9uU3VjY2VzcygoZXZlbnQpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZygnVmFsaWRhdGlvbiBwYXNzZXMgYW5kIGZvcm0gc3VibWl0dGVkJywgZXZlbnQpO1xuXG4vLyAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldCk7XG5cbi8vICAgICBjb25zb2xlLmxvZyguLi5mb3JtRGF0YSk7XG5cbi8vICAgICBsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbi8vICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuLy8gICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4vLyAgICAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcbi8vICAgICAgICAgICBjb25zb2xlLmxvZygn0J7RgtC/0YDQsNCy0LvQtdC90L4nKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgIHhoci5vcGVuKCdQT1NUJywgJ21haWwucGhwJywgdHJ1ZSk7XG4vLyAgICAgeGhyLnNlbmQoZm9ybURhdGEpO1xuXG4vLyAgICAgZXZlbnQudGFyZ2V0LnJlc2V0KCk7XG4vLyAgIH0pO1xuIl0sImZpbGUiOiJmb3JtLmpzIn0=
