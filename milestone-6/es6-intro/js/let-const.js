// break with var 
// no more use of var 
// let: let it to reassign 
// const: do not allow it to reassign 

let money = 25;
money = 35;
console.log(money);

const bird = 'jaan pakhi'
// bird ='moyna paki' 
const message = bird + ' potas potas'
console.log(message);

const numbers = [12,86,65,45]
// reassign is not allow
// numbers = [77,66,55,22,99]
numbers.push(123);
numbers[1] = 90;
console.log(numbers);

const student = {
    name: 'mofiz',
    address: 'Rongpur'
}
// student = {name: 'Mofazzol'}
student.name = 'Mofazzol';

for(let i=0; i< numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}
// total number sum 
let sum = 0;
for(let j=0; j<numbers.length; j++){
    var number = numbers[j];
    sum = sum + number;
    console.log(sum)
}