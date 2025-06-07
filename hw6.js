//задание 1
const array = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < array.length; i++) {
    if (array[i] === 10) {
        console.log(array[i]);
        break; 
    } else {
        console.log(array[i]);
    }
}

//задание 2
const array2 = [1, 5, 4, 10, 0, 3];

const index = array2.indexOf(4);

console.log(index);

//задание 3
const array3 = [1, 3, 5, 10, 20];

const result = array3.join(' ');

console.log(result); 

//задание 4

const array4 = [];

for (let i = 0; i < 3; i++) {
    const innerArray = [];
    for (let j = 0; j < 3; j++) {
        innerArray.push(1);
    }
    array4.push(innerArray);
}

console.log(array4); 

//задание 5

const array5 = [1, 1, 1];

array5.push(2, 2, 2);

console.log(array5); 

//задание 6

const array6 = [9, 8, 7, 'a', 6, 5];

const filteredArray = array6.filter(item => item !== 'a');

filteredArray.sort((a, b) => a - b);

console.log(filteredArray);

//задание 7

const array7 = [9, 8, 7, 6, 5];

const userInput = prompt('Угадайте число из массива');

if (array7.includes(Number(userInput))) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

//задание 8
const str = 'abcdef';

const arr = str.split('');

const reversedArr = arr.reverse();

const reversedStr = reversedArr.join('');

console.log(reversedStr); 

//задание 9
const array9 = [[1, 2, 3], [4, 5, 6]];


const result9 = [].concat(...array9);

console.log(result9); 


//Задание 10
const array10 = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];

for (let i = 0; i < array10.length - 1; i++) {
    const sum = array10[i] + array10[i + 1];
    console.log(sum);
}


///Задание 11
function squareArray(numbers11) {
    return numbers11.map(number => number ** 2);
}

const numbers11 = [1, 2, 3, 4, 5];
const squaredNumbers = squareArray(numbers11);
console.log(squaredNumbers); 


//Задание 12
function wordLengths(words) {
    return words.map(word => word.length);
}

const words = ['apple', 'banana', 'cherry'];
const lengths = wordLengths(words);
console.log(lengths); 

//Задание 13
function negativeNumbers(numbers) {
    return numbers.filter(number => number < 0);
}

const numbers = [1, -2, 3, -4, 5, -6];
const negatives = negativeNumbers(numbers);
console.log(negatives); 

// Задание 14

const array14 = [];

for (let i = 0; i < 10; i++) {
    array14.push(Math.floor(Math.random() * 11));
}

const evenNumbers = array14.filter(number => number % 2 === 0);

console.log(array14); 
console.log(evenNumbers); 


//Задание 15

const array15 = [];

for (let i = 0; i < 6; i++) {
    array15.push(Math.floor(Math.random() * 10) + 1);
}

const sum = array15.reduce((acc, number) => acc + number, 0);
const average = sum / array15.length;

console.log(average); 
