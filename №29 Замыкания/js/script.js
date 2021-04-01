// замыкание это следствие работы функции

//Это глобальная переменная
let a = 10;

function one() {
    let a = 8;
    return a * 12;
}
console.log(one());
//вывод глобальной переменной 
console.log(a);
//переменные которые обьявлены внутри блока называеются ЛОКАЛЬНЫМИ
console.log('=================');



function t1() {
    let a = 8;
    return function () {
        a = a + 1
        return a;
    }
}

let b = t1();
let c = t1();
console.log(b);
console.log(b());
console.log(b());
console.log('=========');
console.log(c());
console.log(c());
console.log(c());
/* console.log(one());
console.log(one());
console.log(one()); */