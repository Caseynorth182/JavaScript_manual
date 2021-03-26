let arr = ['a', 2, 3, 'aa', 22, 2, 3, 4, 1, 2, 3, 2];
let all_p = document.getElementsByTagName('p');

let qP = document.querySelectorAll('p');

console.log(qP);

/* console.log(all_p);
console.log(all_p.length);
console.log(all_p[1]);

let kit = new Set(arr);

console.log(kit); */

/* for (let key of kit) {
    console.log(key);
} */
console.log('=============================');
1 /////////////////////////
let a = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < qP.length; i++) {
    console.log(qP[i]);
}
console.log('=============================');


2 ////////////////////////
for (let key in qP) {
    console.log(qP[key]);
}

console.log('=============================');

3 ///!!!!////////////////////////

for (let item of qP) {
    console.log(item);
}