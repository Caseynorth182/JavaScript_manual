let a = [13, 21, 55, 2323, 76, 'hello', 45];


//// map. выполняет действие над каждым элементом
//передается callback ФУНКЦИЯ С ПАРАМЕТРАМИ(ITEM, INDEX, [ARR-опционально] )
let b = a.map((item, index) => {
    return item * 5;
})
console.log(b);

/////////////////////////////////////////////////////
// .filter() проверяет , если улвоие над каждым элементов TRUE то возвращает;

let c = a.filter(function (item, index) {
    if (typeof (item) == Number) {
        return item;
    }
});
console.log(c);