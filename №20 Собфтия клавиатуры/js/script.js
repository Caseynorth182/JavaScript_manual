//СОБЫТИЕ ВВОДА В ИНПУТ
document.querySelector('.i-1').oninput = () => {
    console.log();
}

///////////////////////////////////////////
//СОБЫТИЕ onkeypress
/* document.querySelector('.i-1').onkeypress = (e) => {
    console.log('keypress');

    console.log(e);
    console.log('charCode: ' + e.charCode); //q113 q / Q 81
    console.log('Code: ' + e.code);
    console.log('key: ' + e.key);
    console.log('keyCode: ' + e.keyCode);
} */
//СОБЫТИЕ onkeydown - клавиша нажата но не отпущенна
document.querySelector('.i-1').onkeydown = (e) => {
    console.log('keydown');
    console.log(e);
    console.log('charCode: ' + e.charCode); //q113 q / Q 81
    console.log('Code: ' + e.code);
    console.log('key: ' + e.key);
    console.log('keyCode: ' + e.keyCode);
    if (e.key == 'CapsLock') {
        document.querySelector('.ch-1').checked = true;
    } else {
        document.querySelector('.ch-1').checked = false;

    }
}


//////////////////////////////////

document.querySelector('.i-2').onkeypress = (e) => {
    console.log('keypress');

    console.log(e);
    console.log('charCode: ' + e.charCode); //q113 q / Q 81
    console.log('Code: ' + e.code);
    console.log('key: ' + e.key);
    console.log('keyCode: ' + e.keyCode);
    ///
    const a = {
        q: 'w',
        w: 'e'
    }
    document.querySelector('.i-2').value = a[event.key];
    // когда return false  то возвращать в ИНПУТ не будет 
    return false;
}