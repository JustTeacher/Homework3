//задание 1
for (let i = 0; i < 2; i++) {
   console.log ('Привет!') 
}
//задание 2
for (let i = 1; i <= 5; i++) {
   console.log(i);  
}
//задание 3
for (let i = 7; i <= 22; i++) {
   console.log(i);  
}

//задание 4
const obj = {
   "Коля" : '200',
   "Вася" : '300',
   "Петя" : '400'
}

for (const key in obj) {
   console.log(`${key} - ${obj[key]}`)
}
//задание 5
let n = 1000;
let num = 0;

while (n > 50) {
   n /= 2; 
   console.log(n);
   num++;
}

console.log(`Количество циклов: ${num}`)

//задание 6
let dayFriday = 2;

let allDay = 31;

for (let i = dayFriday; i <= allDay; i += 7) {
   console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
   
}


//дополнительное задание 1
let k = 100;
let iterations = 0;

while (k > 0) {
   k -= 7; 
   console.log(k);
   iterations++;
}

console.log(`Количество итераций: ${iterations}`)




