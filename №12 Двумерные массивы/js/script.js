console.log("hello world");
let a = [4, 5, 6];
let b = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

console.log(b);

/* for (let i = 0; i < b.length; i++) {
    c = b[i];
    for (let k = c.length - 1; k >= 0; k--) {
        console.log(c[k]);
    }
} */
let out = '';

for (let i = 0; i < b.length; i++) {
    for (let k = 0; k < b[i].length; k++) {
        console.log(b[i][k]);
        out += b[i][k] + ' ';
    }
    out += '<br>';
}


out = '';
for (let i = 0; i < b.length; i++) {
    for (let k = 0; k < b[i].length; k++) {
        if (b[i][k] > 4) {
            out += b[i][k] + ' ';
        }
    }
    out += '<br>';
}
document.querySelector('.out1').innerHTML = out;




let d = [1, 0, 0, 0, 0, 0];
let k = 0;
document.querySelector('button').onclick = () => {
    d[k] = 0;
    d[k + 1] = 1;
    k++;
    document.querySelector('.out').innerHTML = d;
}