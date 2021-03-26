let a = 6;

/* if(a !== 9) {
    console.log('hello');
} else {
    console.log('world');
}; */
\

const button = document.querySelector('button');
const input  = document.querySelector('.age');

//ANCHOR СОБЫТИЕ !!!! Вешаем событие .onclick (Нажатие) на кнопку, то есть когда нажмет на кнопку выполниться действие
//а именно функция 
//ANCHOR СТРЕЛОЧНАЯ ФУНКЦИЯ
button.onclick = () => {
    let num = +input.value;
    if(num >= 16 && num < 59){
        console.log('Welcome');
    } else if(num > 60){
        console.log("Хаха привет старость");
    } else {
        console.log('You Shell not pass');
    }
    input.value = '';


    switch(num){
        case 15:
            console.log('Терпи');
            break;
        case 16:
            console.log('еще немного');
            break;
        default:
            console.log('ok');
    }   
};

let b = 5;
console.log(b > 4 && b < 7);
console.log(b > 7 || b == 6);

/* && оператор  И */
// || оператор ИЛИ


let a = +document.querySelector('.age').value;

