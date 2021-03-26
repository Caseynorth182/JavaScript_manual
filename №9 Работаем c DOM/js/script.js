
const one = document.querySelector('.one');

one.style.width = '150px';
console.log(one.style);


//так можно добовлять КЛАССЫ ТЕГАМ
one.classList.add('two', 'three');

//УДАЛИТЬ КЛАСС
one.classList.remove('three');

const toogle = document.querySelector('.btn');

toogle.onclick = function () {
    //this - это действие именно к этому элементу с которым взаимодействие напряму
    this.classList.toggle('three');
    this.classList.toggle('two');
}

///АТРИБУТЫ - ВАЖНО
//ЕСТЬ ДВА ПОЛОЖЕНИЯ, ПОЛУЧАТЬ АТТРИБУТ И ПИСАТЬ АТРИБУТ
// - ЭТО ЧИТАТЬ АТРИБУТ
const attr = one.getAttribute('data');
const attr_meta = document.querySelectorAll('meta')[2].getAttribute('name');
console.log(attr);
console.log(attr_meta);

one.setAttribute('data-num', 6);
console.log(one.getAttribute('data-num'));

///////////////////////////////////////////////////////
let gas = document.querySelectorAll('.gas');
for(let i = 0; i < gas.length;i++){
    gas[i].onclick = function () {
        let gallons = +document.querySelector('.gallons').value;
        //this - обращение к самой себе
        amount = this.getAttribute('data');
        console.log(gallons * amount);
    }
}

///////////////////////////////

let a = document.createElement('div');
a.innerHTML = 'Hello';
a.classList.add('two', 'three');
console.log(a);

let out = document.querySelector('.out');

out.appendChild(a);

a.onclick = function () {
    alert('tap me');
}



var parent = document.createElement("div");
var p = document.createElement("p");
out.append(p);
p.innerHTML = 'привет это я'

console.log(parent.childNodes); // NodeList [ <p> ]



/////////////////////////////////////////////////
let pp = document.createElement('p');
console.log(pp);

pp.innerHTML = 'Привет ffffffffffffffffffffffffffffff';

pp.classList.add('one','three');
pp.style.borderRadius = '25%';
const two2 = document.querySelector('script');
console.log(two2);
document.querySelector('body').insertBefore(p, two2);


//////////////////////////////////////////////////////////////
console.log(out.childNodes);