/*let k = 0;
let a;
while (a != 99) {
    k = k + 1;
    a = prompt('Введите число');
}
alert(('кол-во чисел - ') + (k));*/

function numberCount(){
    let b = 0;
    let s = 0;
    let y;
    y = Number(prompt('Введите число'));
    while (y != 999) {
        b = b + 1;
        s = s += y;
        y = Number(prompt('Введите число'));
    }
    return b, s;
}

function numberAmount() {
    let k = -1;
    let a;
    while (a != 99) {
        k = k + 1;
        a = prompt('Введите число');
    }
    return k;
}

function result() {
    console.log(numberAmount());
    console.log(numberCount());
}
result();