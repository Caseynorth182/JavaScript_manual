//////////////////////// GET /////////////////////////////

// DdC33D7d2C2a7
let xhttp = new XMLHttpRequest();

let a = 0;

//при изменении состояния запроса, вызываем функцию
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        //responseText - ответ c СЕРВЕРА в виде строки
        myFunc(this.responseText)
    }
}

// open()
// 1 параметр - это способ отправки GET/POST
// 2 параметр - это куда отправлять запрос
// 3 параметр Опциональный - как выполнить запрос, синхроно или асинхронно true/false
xhttp.open('GET', 'http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=1');
xhttp.send();

function myFunc(data) {
    a = data;
    console.log(data);
}

console.log(a);

//////////////// POST /////////////////////////////////
let xhttp2 = new XMLHttpRequest();

xhttp2.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        //responseText - ответ c СЕРВЕРА в виде строки
        myFunc2(this.responseText)
    }
}

xhttp2.open('POST', 'http://getpost.itgid.info/index2.php');
//Обработать заголовки для POST запроса обязательно
xhttp2.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
// потом отправка( c указаными параметрами)
xhttp2.send('auth=DdC33D7d2C2a7&action=1');


function myFunc2(data) {
    console.log('POST');
    a = data;
    console.log(a);
}