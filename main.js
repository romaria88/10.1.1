// Калькулятор
let Calc = function() {
    this.get = function() {
        this.a = +prompt('Введите число а');
        this.b = +prompt('Введите число b');
        this.oper = prompt('Введите операцию: +, -, *, /');
        this.operation();
    }
    this.operation = function() { 
        switch(this.oper) {
            case '+':
                this.result = this.a + this.b;
            break;
            case '-':
                this.result = this.a - this.b;
            break;
            case '/':
                this.result = this.a / this.b;
            break;
            case '*':
                this.result = this.a * this.b;
            break;
            default: this.result = 0;
        }
        this.show();
    }
    this.show = function() {
        alert(this.a + ' ' + this.oper + ' ' + this.b + ' = ' + this.result);
    }
}
let calc = new Calc();
calc.get();


//Наследование
let Calc1 = function () {
    Calc.apply(this);
    let show1 = this.show;
    this.show = function() {
        show1.call(this);
    }
}
let calc1 = new Calc1();
console.log(calc1);

// Контакты

let Contacts = function () {
    this.get = function () {
        this.name = prompt('Введите ФИО');
        this.age = +prompt('Введите возраст');
        this.phone = +prompt('Введите номер телефона');
        this.email = prompt('Введите email');
        this.info();
    }
    this.info = function() {
        if (this.age >= 18) {
            alert('Ваш возраст подходит')
            this.information();
        } else {
            alert('Ваш возраст не подходит, вам нет 18')
        } 
    }
    this.information = function() {
        alert(this.name + ' Мой возраст: ' + this.age + ' Мой телефон: ' + this.phone + ' Мой электронный адрес: ' + this.email);
    }
} 
let contacts = new Contacts();
contacts.get();

//Наследование
let Contacts1 = function () {
    Contacts.apply(this, arguments);
    let info1 = this.info;
    this.info = function() {
        info1.call(this);
    }
}
let contacts1 = new Contacts1();
console.log(contacts1);