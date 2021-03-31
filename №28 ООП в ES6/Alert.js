/*
    описание класса
*/
class Alert {

    constructor(a, c, d) {
        //свойства 
        this.message = a;
        this.cssClass = c;
        this.out = d;
    }

    //метод - это функции ынутри класса
    showAlert() {
        document.querySelector(this.out).innerHTML =
            `<p class="${this.cssClass}">${this.message}</p>`;

    }
    myAlert() {
        alert(this.message);
    }
}