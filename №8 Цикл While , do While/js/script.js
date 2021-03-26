for(let i = 0; i < 6; i++){
    console.log(i);
}
let k = 0;
/* while(k < 5){
    console.log('k: '+k);
    if( k == 3) continue;
    k++
} */

let sum = 0;
let counter = 0;
while(counter <= 10){
    sum = sum + counter;
    console.log("sum = " +sum);
    counter++;
}

let out = document.querySelector('.out');
let str = '';
let flag = 3;
p = 0;
while(p < 4){
    let p1 = 0;
    while( p1 < 4) {
        if(p1 < flag){
            str += '&nbsp';
            p1++;
        } else {
            str +='*'
            p1++;
        }
    }
    flag--;
    str += '<br>';
    p++;
}
out.innerHTML = str;