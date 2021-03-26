const a = {
    'a': 5,
    'b': 'Hello',
    'z2': 'hi',
    'villa de': 'hello',
    d12: 'eminem',
};

console.log(a);

console.log(a.z2);

let k = 'y43';
a.yyy = 555,
    console.log(a);

let out = '';
/* document.querySelector('.out1'); */
out.innerHTML = a;

/// Перебор ассоциативного массива FOR IN /////////////
for (let key in a) {
    out += key + " --- " + a[key] + " ";

}
document.querySelector('.out1').innerHTML = out;