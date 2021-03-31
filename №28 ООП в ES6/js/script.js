function myAlert(a, b, d) {
    let c = `<p class="${b}">${a}</p>`;
    document.querySelector(d).innerHTML = c;
}

myAlert('error', 'bg-green', '.test');
myAlert('hello', 'bg-orange', '.test2');



////// class !!!!!!!!!!!!!!!!!!!!!!

let m = new Alert('my message', 'bg-green', '.test');
console.log(m);
m.showAlert();

let m2 = new Alert2('my message', 'bg-green', '.test', 'favorite_border');
m2.showIconAlert();
m2.myAlert();