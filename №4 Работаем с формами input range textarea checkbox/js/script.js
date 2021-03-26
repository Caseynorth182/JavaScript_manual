document.querySelector('button').onclick = () => {
    let a = document.querySelector('.pass').value
    console.log(a);
    document.querySelector('button').style.backgroundColor = a;
}


document.querySelector('button').onclick = () => {
    let a = document.querySelector('.pass2').value
    console.log(a);
    document.querySelector('button').style.backgroundColor = a;
}

//СОБЫТИЕ ИЗМЕНЯЕТЬСЯ КОГДА ИЗМЕНЯЕТЬСЯ СОСТОЯНИЕ ЭЛЕМЕНТА
document.querySelector('.pass3').oninput = () => {
    let a = document.querySelector('.pass3').value
    let out = document.querySelector('.range_item');
    out.textContent = a;
    console.log(a);
}


//вешаем события на кнопку
//РАБОТА С ЧКБОКСОМ
document.querySelector('.btn-1').onclick = () => {
    let b = document.querySelector('.checkbox');
    console.log(b.checked);
    if(b.checked){
        console.log('hello');
    } else {
        console.log('no');
    }
}

//РАБОТА С TEXTAREA
document.querySelector('#btn-2').onclick = () => {
    let t = document.querySelector('#two').value;
    t = 'hello ';
    console.log(t);
}


////Рвбота с формой 
document.querySelector('#btn-3').onclick = (event) => {
    //event - (параметр) глобальный объект события
    //ему вешаем метод который отключает обычное поведение 
    event.preventDefault();
    /* let t = document.querySelector('#three').value; */
    let form = document.querySelector('form');
    /* console.log(form); */
    console.log(form.elements.n1.value);
    console.log(form.elements.n2.value);


  
}