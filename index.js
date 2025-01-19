// Створити таймер, який буде починати відлік з 10 секунд
// та зменшувати час кожну мілісекунду. При досягненні 5 секунд,
// таймер повинен змінювати колір фону сторінки на червоний.
let seconds = 10;

let delay = 1000;

let timer = setInterval(() => {
  seconds -= 1;
  console.log(seconds);
  if (seconds <= 0) {
    clearInterval(timer);
  }
}, delay);
