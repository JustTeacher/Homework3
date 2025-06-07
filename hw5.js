//задание 1
const min = (a, b) => (a < b) ? a : b;

console.log(min(8, 4));
console.log(min(6, 6));
  

//задание 2
const isOdd = (n) => (n % 2 === 0) ? 'Число четное' : 'Число нечетное';

console.log(isOdd(5));
console.log(isOdd(8));


//задание 3
function square(number) {
    console.log(number ** 2);
}

const up = (n) => n ** 2;

square(5);
console.log(up(5));

//задание 4
function age() {
    let age = +prompt('Сколько тебе лет?')
   if (age < 0) {
    alert('Возраст не может быть отрицательным');
   } else if (age >= 0 && age <= 12) {
    alert('Привет, друг!');
   } else if (age >= 13) {
    alert('Добро пожаловать!');
   } else {
    alert('Вы ввели неправильное значение');
   }
}

age();

//задание 5
function calc(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return 'Одно или оба значения не являются числом';
  } else {
    return a * b;
  }  
}

console.log(calc('f', 2))

//задание 6
function getNumber() {
    let f = prompt('Введите число');
    if (isNaN(f)) {
        return 'Переданный параметр не является числом';
    } else {
        return `${f} в кубе равняется ${f ** 3}`;
    }
}

console.log(getNumber());

//задание 7

function getArea() {
    return Math.PI * this.radius ** 2;
}

function getPerimeter() {
    return 2 * Math.PI * this.radius;
}

const circle1 = {
    radius: 10,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter,
}

const circle2 = {
    radius: 20,
    methodGetArea: getArea,
    methodGetPerimeter: getPerimeter,
}

console.log(circle1.methodGetArea());
console.log(circle2.methodGetArea());

