// split('') - РАЗБИАЕТ СТРОКУ НА МАССИВ 
let a = 'hello world , hi ';

console.log(a.split(' '));

// JOIN() - ОБЪЕДЕНЯЕТ ЭЛЕМЕНТЫ МАССИВА В СТРОКУ

let b = ['hello', 1, 2, 3, 'boob'];

console.log(b.join(' '));

// forEach() - принимает функцию один раз к указаному эелементу
// он не возвращает сам
b.forEach(function (elem, index) {
    console.log(elem * 2);
    console.log(index);
    console.log('--');
})