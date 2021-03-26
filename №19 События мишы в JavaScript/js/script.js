document.querySelector('.one').onclick = function (event) {
    //event - это ГЛОБАЛЬНЫЙ ОБЪЕКТ события
    console.log(event);
    console.log('click');
}

/* document.querySelector('.two').onclick = function () {
    console.log('click2');
} */

// ДАБЛ КЛИК

document.querySelector('.two').ondblclick = function (e) {
    console.log('click');
}

// КЛИК ПКМ

document.querySelector('.two').oncontextmenu = function (e) {
    console.log('clic3');
    return false;
}

// Движение мыши - каждое движение это 1 раз срабатывание, при двиге курсора срабатывает сразу много EVENT

let w = 75;
document.querySelector('.three').onmousemove = function (e) {
    document.querySelector('.three').style.width = w + 'px';
    w++;
}

// Наведение на блок - событие НАВЕДЕНИЕ НА ВНУТРЬ БЛОКА

document.querySelector('.four').onmouseenter = function (e) {
    document.querySelector('.four').style.backgroundColor = 'green';
    console.log(1);
}

// Наведение из блок - событие НАВЕДЕНИЕ ИЗ ВНУТРЬ БЛОКА

document.querySelector('.four').onmouseleave = function (e) {
    document.querySelector('.four').style.backgroundColor = 'aqua';
    console.log(2);
}

//Наведение мыишки на блок нажали и держим, тогда срабатывает ЕВЕНТ

document.querySelector('.five').onmousedown = function (e) {
    document.querySelector('.five').style.backgroundColor = 'orange';
    console.log(3);
}

// ONMOUSEUP

document.querySelector('.five').onmouseup = function (e) {
    document.querySelector('.five').style.backgroundColor = 'pink';
    console.log(4);
}


///////////////////////////////////////////
let p = 10;
document.querySelector('button').onclick = function () {
    p++;
    document.querySelector('progress').value = p;
    console.log(1232);
}