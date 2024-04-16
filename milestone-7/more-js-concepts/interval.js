/// setTimeout(), setInterval() -> Async
// i++ vs ++i
// x++ vs ++x
console.log(1);
console.log(2);
let num = 0;
const intervalId = setInterval(()=>{
    console.log(++num)
    if(num === 10){
        clearInterval(intervalId);
    }
}, 1000)
console.log(4);
console.log(5);
console.log(6);
// setInterval(()=>{console.log(3)}, 1000)

// let num = 0;
// const intervalId = setInterval(()=>{
//     console.log(num++)
// }, 1000)

// let num = 0;
// const intervalId = setInterval(()=>{
//     console.log(num++)
//     if(num === 10){
//         clearInterval(intervalId);
//     }
// }, 1000)

// let num = 0;
// const intervalId = setInterval(()=>{
//     console.log(++num)
//     if(num === 10){
//         clearInterval(intervalId);
//     }
// }, 1000)


//clearInterval(intervalId)
// use this code when u want to stop execution.