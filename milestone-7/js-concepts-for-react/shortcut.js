// true type variable: 'abc', 5, true, {}, [] 
// false type variable: '', 0, false, null, undefined 
// check truthy
let myVar = 5;
//check any truthy
if(myVar){
    myVar = myVar * 100;
}
else{
    myVar = 0;
}

let myMoney = 50;
// you check negative of falsy anything
if(!myMoney){
    // 
}

const money = 800;
let food;
if(money > 100){
    food = 'biryani';
}
else{
    food = 'cha biscuit';
}

// ternary
let food1 = money> 100? 'biryani': 'cha biscuit';
// console.log(food1);
let drink = (money > 100 && myVar > 100)? 'coke' : 'filter Water';
// console.log(drink);

// number to string conversion
const num1 = 52;
// console.log(num1);
const numStr = num1 + '';
// console.log(numStr)

// string to number 
const input = '560';
const inputNum = +input;
// console.log(inputNum);

//
const isActive = true;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');
// isActive ? showUser() : hideUser();
isActive && showUser(); // use && if the left side is true then right side will be executed
isActive || hideUser(); // use || if the left side is false then right side will be executed
isActive = !isActive // toggle boolean