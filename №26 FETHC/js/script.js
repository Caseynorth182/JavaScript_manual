//DdC33D7d2C2a7


const xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', function () {
    if (this.readyState === 4 && this.status === 200) {
        callbackFunction(this.responseText);
    }
})
xhr.open('GET', 'http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=1', true);
xhr.send();

function callbackFunction(data) {
    console.log(data);
}


// 1 - параметр, адресс куда мы стучися
// 2 - обработчик результата ответа
fetch('http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=1')
    .then(data => {
        console.log(data);
        /* console.log(data.text()); */
        /*  data.text().then(data2 => {
             console.log(data2);
         }) */
        return data.text();
    })
    .then(data => {
        console.log(data);
    })


fetch('http://getpost.itgid.info/index2.php', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            //'Content-Type': 'application/json'
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'auth=DdC33D7d2C2a7&action=2&name=Sasha' // body data type must match "Content-Type" header
    })
    .then(Response => Response.text())
    .then(response => {
        console.log(response);
    })