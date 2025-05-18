//задание 1
let password = 'password';
let userPassword = prompt ('Введите пароль');
if (password === userPassword) {
   alert('Пароль введен верно');
} else {
   alert('Пароль введен неверно');
}
//задание 2
let c = 150;
if (c > 0 && c < 10) {
   console.log('Верно');
} else {
   console.log('Неверно');
}
//задание 3
let d = 114;
let e = 12;
if (d > 100 || e > 100) {
   console.log('Верно');
} else {
   console.log('Неверно');
}

//задание 4
let a = '2';
let b = '3';

alert(Number(a) + Number(b));

//задание 5
let monthNumber = 15;
switch (monthNumber) {
   case 1:
   case 2:
   case 12:
      alert('Зима');      
      break;
   case 3:
   case 4:
   case 5:
      alert('Весна');
      break;
   case 6:
   case 7:
   case 8:
      alert('Лето');
      break;
   case 9:
   case 10:
   case 11:
      alert('Осень');
      break;
   default:
      alert('Неверно')
      break;
}

//дополнительное задание 1
let f = prompt('Пожалуйста, введите любое число');
if (f === "") {
    alert("Поле не должно быть пустым");
} else {
    let result = Number(f);
    if (isNaN(result)) {
        alert("Не является числом");
    } else {
        alert("Является числом");
        if (result % 2 === 0) {
            alert("Четное число");
        } else {
            alert("Нечетное число");
        }
      }
   }

//дополнительное задание 2
let clientOS = Number(prompt('Какая у Вас операционная система?(Если у Вас iOS, то введите 0, если Android - 1)'));
if (clientOS === 0) {
   console.log('Установите версию приложения для iOS по ссылке');
} else {
   console.log('Установите версию приложения для Android по ссылке');  
}

//дополнительное задание 3
let clientOS2 = Number(prompt('Какая у Вас операционная система?(Если у Вас iOS, то введите 0, если Android - 1)'));
let clientDeviceYear = Number(prompt('Введите год выпуска вашего смартфона'))
if (clientOS2 === 0 && clientDeviceYear < 2015) {
   console.log('Установите облегченную версию приложения для iOS по ссылке');
} else if (clientOS2 === 0) {
   console.log('Установите версию приложения для iOS по ссылке'); 
} else if (clientOS2 === 1 && clientDeviceYear < 2015) {
   console.log('Установите облегченную версию приложения для Android по ссылке');  
} else {
   console.log('Установите версию приложения для Android по ссылке');  
}
