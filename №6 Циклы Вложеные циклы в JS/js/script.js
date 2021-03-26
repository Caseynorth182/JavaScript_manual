let out = document.querySelector('.out');

for(let i = 0; i < 5; i++){

    for(let j = 0; j < 10; j++){
        out.innerHTML += "*";

    }
    out.innerHTML += '<br>';
}


for(let i = 1; i < 10; i++){
    /* out.innerHTML += '3*'+i+'='+i*3+'<br>'; */
    out.innerHTML += `3*${i}=${3 * i}<br>`;
    for(let k = 1; k < 10;k++) {
        out.innerHTML += `${i}*${k}=${i * k}<br>`;
    }
    out.innerHTML += '<br><hr>';
}