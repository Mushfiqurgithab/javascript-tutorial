/*
Truthy:
1. true
2. any number(+ve, -ve) will be truthy other then 0
3. any string other than empty string
4. '0', 'false'
5. {} (empty object)
6. [] (empty array)

Falsy:
1. false
2. 0
3. '' (empty string)
4. undefined
5. null
*/


// const x = false;
// let x = null;
// let x = {a: 5, b:56};
// let x = {};
let x = [];
console.log(x);
if(x){
    console.log('value of x is truth');
}
else{
    console.log('value x is falsy');
}

// Optional
//check falsy
/*
if(x === false){}
if(!x){}
*/

const y = null;
if(!y){
    console.log('value is falsy');
}

//check true
const z = ' ';
if(!!z){
    console.log('value is truthy');
}