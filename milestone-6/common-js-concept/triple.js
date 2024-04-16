// always use ===
// equal comparison doesn't work for non-premitive

const first = 2;  //const first = '2'; const first = {x : 5}; const first = []; 
const second = true; //const second = '2'; const second = false;const second = {x : 5}; const second = []; 
// const first = [];
// const second = first;
// const first = [45, 54, 98];
// const second = [45, 54, 98];
if(first == second){
    console.log('value are equal');
}
else{
    console.log('value are not equal');
}

if(first === second){
    console.log('value are equal');
}
else{
    console.log('value are not equal');
}

// type coercion
// type conversion
// type casting