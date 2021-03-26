/* function one() {
    console.log('hello');
    document.querySelector('.out').innerHTML += 'Привет';
}
document.querySelector('button').onclick = one; */
/* let one_btn = document.querySelector('.one-btn'); */


function one(){
    console.log("work");
}
//ЕСЛИ ВЫЗВАТЬ ФУНКЦИЮ С СКОБКАМИ ТО ОНА ОТРАБОТАЕТ И ВЕРНЕТ РЕЗУЛЬТАТ В ПЕРЕМеННУЮ
/* one_btn.onclick = one(); */
/* console.log(one_btn); */
//ЕСЛИ ВЫЗВАТЬ БЕЗ СКОБОК ТО ФУНКЦИЯ ОТРАБОТАЕТ СРАЗУ
/* one_btn.onclick = one; */



console.log(1 + one());

function two() {
    console.log('work 222');
    return 54;
}

two();

console.log(1 + two());

let a = 8;
let b = 9;
 
function multi(){
    console.log(a*b);
    //RETURN возвращает результат функции в место вызова функции
    return a * b;
}
//Вот сюда 
let c1 = multi();
//И ВОТ СЮДА в multi();
let c2 = 10 * multi();

console.log(c1 , c2);
//ФУНКЦИИ НАПИСАНИЕ В СКОБКАХ ФУНКЦИИ НАЗЫВЕЮТСЯ ПАРАМЕТРЫ!
//ИМИ МАНИПУЛИРУЕШЬ ВНУТРИ ФУНКЦИИ 
//ИХ ОБЯЗАН УКАЗАТЬ ПРи ВЫВОДЕ ФУНКЦИИ
function multi2(x,y){
    return x * y;
}
console.log(multi2(52,4));
console.log(multi2(52,a));

//В ES 6 ПОЯВИЛАСЬ ВОЗМОЖНОСТЬ ПРИСВАИВАТЬ ПАРАМЕТРАМ - ЗНАЧЕНИЯ ПО УМОЛЧАНИЮ;
function multi22(x = 4, y = 10){
    return x * y;
    //ПОСЛЕ RETURN  ФУНКЦИЯ ВЫПОЛНЯТЬСЯ НЕ БУДЕТ
}

console.log(multi22(1,4));

//__________АНОНИМНЫЕ ФУНКЦИИ________________________________//

let one_btn = document.querySelector('.one-btn');
console.log(one_btn);
//СТРЕЛОЧНАЯ ФУНКЦИЯ КЛАССИЧЕСКАЯ
one_btn.onclick = () => {
    console.log('hello');
}


document.querySelector('.f2').onclick = function () {
    console.log('hello 2');
}

document.querySelector('.f3').onclick = () => {
    console.log('hello 3');
}

function (a,b){
    
}
//СТРЕЛОЧНАЯ ФУНКЦИЯ 
(a,b) => {

}
//СТРЕЛОЧНАЯ ФУНКЦИЯ ЕСЛИ ОДИН ПАРАМЕТР ТО МОЖНО ПИСАТЬ ТАК
a => {
    
}

//СТРЕЛОЧНАЯ ФУНКЦИЯ С return
() => 'hello';