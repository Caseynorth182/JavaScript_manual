let a = 'Иван';
let b = '37';
let z7 = 'Овен';

let c = ['Иван', 37, 'Овен'];

let d = [];

console.log(c[0]);
console.log(c[1]);
console.log(c[5]); // JS возвращает undefined

console.log(c);
console.log(c.length);


////////////////////////////////////////////////////////////////////////


let zodiac = ['Козерог', 1, 2, 19];
let man = ['Ivan', 'male', 176, 93];
console.log(zodiac);
console.log(man);
man[4] = 'hi';
console.log(man);

/////////////////////////////////////////////////////////////
let a2 = [1, 2, 3, 4];
console.log(a2);
let t = a2[0];
a2[0] = a2[a2.length - 1];
a2[a2.length - 1] = t;
console.log(a2);

let out = '';

for (let i = 0; i < a2.length; i++) {
    if (a2[i] % 2 === 0) {
        out += a2[i] + '_ _';
    }
}
document.querySelector('.out1').innerHTML = out;

///////////////////////////////////////////////////
//НАЙТИ МИНИМАЛЬНЫЙ ИЛИ МАКСИМАЛЬНЫЙ ЭЛЕМЕНТ В МАССИВЕ


let x = [4, 2, 5, 11, 3];
let max = x[0];

for (let i = 0; i < x.length; i++) {
    if (x[i] > max) {
        max = x[i];
    }
}
console.log(max);

let sum = 0;
for (let i = 0; i < x.length; i++) {
    sum = sum + x[i];
}
console.log(sum);