function startGame1() {
    event.preventDefault();
    let randomNunber = Math.floor(Math.random() * 100) + 1;
    while(true) {
        let userNumber = prompt('Попробуй угадать число от 1 до 100:');
        userNumber = Number(userNumber);
        if (userNumber === randomNunber) {
            alert("Поздравляю, число угадано");
            break;
        }
        else if(userNumber < randomNunber) {
            alert("Загаданное число больше! Попробуй ещё раз");
        }
        else {
            alert("Загаданное число меньше! Попробуй ещё раз.")
        }
    }
}

