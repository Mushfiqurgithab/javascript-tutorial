// argument is array like object but Not array.
function sum(a,b,c)/*Parameters*/{
    // console.log(arguments)
    const args = [...arguments];
    // console.log(args);
    const result = a+b+c;
    return result;
}

// console.log(arguments);
const total = sum(45,89,12,45,98,56)/*Arguments*/
// console.log(total);
console.log(sum.length);