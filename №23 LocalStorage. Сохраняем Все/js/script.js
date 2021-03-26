window.addEventListener('storage', function (e) {
    console.log('change');
    document.querySelector('.out').textContent = localStorage.getItem('b1');
})
//Вписывание в LocalStorage 
localStorage.setItem('data', 51);
localStorage.setItem('Name', 'Sasha');

//Вывести после сохранение из LocalStarage
let a = localStorage.getItem('data');
console.log(a);

//Записываем массив в LocalStorage (он преобразуеться в строку!!!)
const b = [3, 4, 5, 6, 7];

//Парсим передаваемый массив JSON.stringify
localStorage.setItem('a', JSON.stringify(b));

//Достаем массив из LocalStorage
let c = localStorage.getItem('a');
//Парсим строку из LocalStorage в ОБЪЕКТ
c = JSON.parse(c); // вот так

console.log(typeof (c));
c.forEach(element => {
    console.log(element + 2);
});

console.log('=====================================');

const a1 = {
    hello: 5,
    k: 3,
    4: 'hi'
}

console.log(a1);

localStorage.setItem('a1', JSON.stringify(a1));

let a1_out = localStorage.getItem('a1');
console.log(a1_out);
//Парсим в JSON формат(обьект)
a1_out = JSON.parse(a1_out);

console.log('=====================================');