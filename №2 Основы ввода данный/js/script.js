let a = 6;
let b = 'Hello';
console.log(b);
console.log(a);

let inputIn = document.querySelector('.in');
let btn = document.querySelector('.btn');
let div = document.querySelector('.out')



btn.onclick = function(){
    console.log("Работает");
    /* console.log(inputIn.value); //value - то что введено в input */
    let b = +inputIn.value;   // +преобразует строку в чило;
    console.log(b + 2);
    //Подчистить input после ввода и отправки данных
    inputIn.value = '';
    //показать что было отправленно в inpute;
    div.innerHTML = b;

    let as = inputIn.className;
    console.log(as);
}
/* //ANCHOR JavaScript из input получет только строку; */

