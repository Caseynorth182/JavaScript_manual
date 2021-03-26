let a = 5;
a = a * 2;
//TRY - попробовать что-то выполнить
//если блок выполнится то CATCH пропускаеться
try {
    document.querySelector('.test').innerHTML = a;

    //ЕСЛИ БЛОК НЕ ВЫПОЛНИТСЯ ТО СРАБОТАЕТ CATCH
} catch (error) {
    alert('Ошибка')
    console.log(error);

    //ЭТОТ БЛОК ВЫПОЛНИТСЯ ПОЛЮБОМУ
} finally {
    console.log('Выполняется гарантировано');
}
console.log(a);
t1();

function t1() {
    console.log(123);
}