const number  = 23;
// string, number, boolean
if(typeof number === 'number'){
    console.log('value is a number');
}
else{
    console.log('value is not a number');
}

const numbers = [3, 12, 78, 90];
const student = {name: 'Rongila Rafsan', job: 'khawadawa kora'}
console.log(typeof numbers);
// console.log(Array.isArray(numbers));
console.log(typeof student);

const a = isNaN('ab');
console.log(a);
const b = isNaN(7);
console.log(b);
const c =isNaN('7');
console.log(c);