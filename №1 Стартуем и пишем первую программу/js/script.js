console.log('hello world');
console.log('hello world2');

console.log('2');
console.log(3);
console.log('hello' + ' ' + 'world');

console.info('Привет');

/* alert('hello'); */
/* alert('hello'); */
/* alert('hello'); */
/* alert('hello'); */
/* alert('hello'); */
/* alert('hello'); */
/* alert('hello'); */

//обращение к элементу через ID
document.getElementById('out').innerHTML = 'привет';
document.getElementById('out').innerHTML = 'Всем';
document.getElementById('out').innerHTML = '<b>2021<b>';

//Обращение через css селекторы
document.querySelector('.header').innerHTML = 'привет прпипиипип';
document.querySelector('#id').innerHTML = 'Привет враолывр';


let a = document.querySelector('.text');
console.log(a);

let text = document.querySelector('#id');

text.innerHTML = ' тут уже не ломе';