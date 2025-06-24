//Задание 1
const str = 'js';
const upperCaseStr = str.toUpperCase();
console.log(upperCaseStr); // Выведет 'JS'


//Задание 2
function filterByPrefix(array, prefix) {
    const lowerCasePrefix = prefix.toLowerCase();
    return array.filter(item => item.toLowerCase().startsWith(lowerCasePrefix));
}


//Задание 3
const number = 32.58884;

const floorNumber = Math.floor(number);
console.log(floorNumber); 

const ceilNumber = Math.ceil(number);
console.log(ceilNumber);

const roundNumber = Math.round(number);
console.log(roundNumber); 


//Задание 4
const numbers = [52, 53, 49, 77, 21, 32];

const minValue = Math.min(...numbers);
console.log(minValue); 

const maxValue = Math.max(...numbers);
console.log(maxValue); 


//Задание 5
function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber);
}
generateRandomNumber();


//Задание 6
function generateRandomArray(maxNumber) {
    const arrayLength = Math.floor(maxNumber / 2); 
    const randomArray = [];

    for (let i = 0; i < arrayLength; i++) {
        const randomNumber = Math.floor(Math.random() * (maxNumber + 1)); 
        randomArray.push(randomNumber);
    }

    console.log(randomArray);
    return randomArray;
}


//Задание 7
function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//Задание 8
const currentDate1 = new Date();
console.log(currentDate1);


//Задание 9

const currentDate = new Date(); 
const futureDate = new Date(currentDate.getTime() + 73 * 24 * 60 * 60 * 1000);
console.log(futureDate); 

//Задание 10
function formatDate(date) {
    const daysOfWeek = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const weekDay = daysOfWeek[date.getDay()];

    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return `Дата: ${day} ${month} ${year} — это ${weekDay}.\nВремя: ${hours}:${minutes}:${seconds}`;
}