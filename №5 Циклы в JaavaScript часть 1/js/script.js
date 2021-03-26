//for 
//while 
//do while

/* for(start, работаем пока верно , счетчик) {

} */

/* for(let i = 0; i < 5; i = i + 2){
    console.log(i);
} */ // i = 1;
//работаем дальше

/* for(let i = 5; i > 0; i--){
     if( i == 4) break ;
    console.log(i);
} */
let a = document.querySelectorAll('.div');
console.log(a);

/* 
for(let i = 0; i < a.length; i++) {
    console.log(a[i]); 
    a[i].style.backgroundColor = "red";
    a[i].onclick = one;
}

function one() {
    console.log('work!');
}

let b = document.getElementsByClassName('div');
let c = document.getElementsByTagName('div')
console.log(b);
console.log(c);

for(let i = 0; i < b.length; i++){
    b[i].style.border = '10px solid green';
} */

let btn = document.querySelector('button').onclick = () => {
    let r = document.querySelectorAll('input[type="radio"]');
    console.log(r);
    for( let i = 0; i < r.length; i++) {
        if(r[i].checked){
            console.log(r[i].value);
        }
    }
}

let out = '';
for(let i = 0; i < 10 ; i++){
    //пропускает данную итерацию и идет дальше
    if(i == 6) continue; 
    out += i + ' ';
}
document.querySelector('#out').innerHTML = out;