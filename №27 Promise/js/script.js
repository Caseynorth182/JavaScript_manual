//DdC33D7d2C2a7
// resolve - параметр который возращаеться правильный, как мы задумали

// reject - когда не получаеться это сделать


let a = new Promise((resolve, reject) => {
    fetch('http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=1')
        .then(data => {
            resolve(data.text());
        })
    /* .then(data => {
        console.log(data);
    }) */
})

let b = new Promise((resolve, reject) => {
    fetch('http://getpost.itgid.info/index2.php?auth=DdC33D7d2C2a7&action=2&name=Sasha')
        .then(data => {
            resolve(data.text());
        })
    /* .then(data => {
        console.log(data);
    }) */
})

a.then(data => {
    console.log(data);
    //action
})

b.then(data => {
    console.log(data);
})

console.log('=============');
/////////////// PROMISE ALL////////////////
// ОБЬЕДЕНЯЕТ ВСЕ ПЕРЕМЕННЫЕ ПРОМИСЫ И СОЗДАЕТ ИЗ НИХ МАСИИВ

Promise.all([a, b]).then(value => {
    console.log(value);
    console.log(value[0]);
    console.log(value[1]);
})