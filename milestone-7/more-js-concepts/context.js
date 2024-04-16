let a = 5; //Global context
function add(num1, num2){ // function context
    const result = num1 + num2 + a;
    return result;
}
const sum = add(4, 5);
console.log(sum);