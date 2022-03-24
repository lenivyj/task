/*let k = 0;
let a;
while (a != 99) {
    k = k + 1;
    a = prompt('Введите число');
}
alert(('кол-во чисел - ') + (k));*/

let b = 0;
let s = 0;
let y;
y = Number(prompt('Введите число'));
while (y != 999) {
    b = b + 1;
    s = s += y;
    y = Number(prompt('Введите число'));
}
alert(('кол-во чисел - ') + (b));
alert(('сумма = ') + (s));