/** for i **/
/*let i;
for (i=1; i<=3;i++){
    console.log(i)
}*/

/*** for in ***/
/*
const lang = ["Javascript", 'Java', 'Go'];
for (let index in lang){
    console.log(lang[index])
}

const user = {
    name: 'Maks',
    surname: 'Maksov',
    age: 65,
    companyName: 'Google'
}
for(let index in user){
    console.log(user[index])
}*/


/***** for of ****/
/*let users = ['Admin', 'Managaer', 'Director'];
for (const value of users) {
    console.log(value);
}*/

/*** while **/
/*const lang = ["Javascript", 'Java', 'Go'];

let index = 0;
while (index < lang.length){
    console.log(lang[index]);
    index++;
}*/

/*** breAK ****/
/*
const number = [1,2,3,4,5,12,17,6,7];
for (let i = 0; i < number.length; i++){
    if (number[i] > 10){
        break
    }
    console.log(number[i]);
}*/


/** continue **/
/*
const number = [1,2,3,4,5,12,17,6,7];
for (let i = 0; i<number.length; i++){
    if (number[i] > 10){
        continue
    }
    console.log(number[i])
}
*/

/** задачи **/
/*const numbers = [-1,0, 1,2,3,4,5,6,7,8,9,10,12,13];
for (let i=0; i<numbers.length; i++){
    if (numbers[i] > 10 | numbers[i] < 1){
        continue
    }
    console.log(numbers[i])
}

let task2 = [1,2,5,6,88,5];
let sum = 0;
for (i=0; i < task2.length; i++) {
    sum+=task2[i]
}
console.log(sum);
*/

let task3 = [1,2,3,4,5,6,7,8,9,10]
let sumTask3 = 0;
for (i=0; i<task3.length; i++){
    sumTask3+=task3[i]*task3[i]
}
console.log(sumTask3)

let task4 = [];
let task4_2=[];
for (i=0; i<task3.length; i++ ){
    if (task3[i]<6){
        task4.push(task3[i])
    } else if (task3[i]>=6){
        task4_2.push(task3[i])
    }
}
console.log(task4);
console.log(task4_2);

let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let even = [];
for (i=0; i<array.length; i++){
    if (array[i] % 2 === 0){
        even.push(array[i])
    }
} console.log(even)

let x = [];
for (i=1; i<=10; i++){
    x.push('x')
}
console.log(x)