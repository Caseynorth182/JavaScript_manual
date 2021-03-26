/* СЕТЫ - могут содержать только уникальные значения */
//Это новые обьекты которые ввели в ES6


//Создаем новый обьект - SET
let a = new Set();

//ДОБОВЛЕНИЕ В SET
a.add(1)
a.add(12)
a.add(33)
a.add('Hello')
a.add('1') // При добовлении в SET происходит такая проверка ===
// очистить SET 
/* a.clear(); */

// УДАЛЯЕТ ВЫБРАНЫЙ ЭЛЕМЕНТ ИЗ НАБОРА 
a.delete(12);
///// ПРОВЕРЯЕТ ЕСТЬ ЛИ ЭЛЕМЕНТ В НАБОРЕ (вернет true/false)
console.log(a.has(0)); // false
console.log(a.has(1)); // true
console.log(a);
console.log(a[0]); // ОСОБЕНОСТИ SET 
console.log(a.length); // не работает как с массивом
console.log(a.size); // КОЛИЧЕСТВО ЭЛЕМЕНТОВ ПОЛОЖЕННЫХ В SET

console.log("------------------------------------");

//ДЛЯ ПЕРЕБОРА ИСПОЛЬЗОВАТЬ СПЕЦИАЛЬНЫЙ ЦИКЛ For Of
for (let key of a) {
    console.log(key);
}

console.log("---------------------------------------");
//Делаем элементы уникальными
let arr = [
    1, 2, 3, 1, 4, 2, 1, 2, 'hello', 'world'
];
/// Создаем новый обьект SET  и передаем в него массив
let b = new Set(arr);
// Он выводит массив без дубляжа, только с уникальными элементами
console.log(b);
console.log(b.size);

console.log("---------------------------------------");
////// Преобразовывает SET в Массив(ARRAY)
let bArr = Array.from(b);
console.log(bArr);
console.log(bArr.length);