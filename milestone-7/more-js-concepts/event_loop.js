console.log("synchronous_1");

setTimeout(function timeout(){
    console.log("asynchronous_1");
}, 5000);

console.log("synchronous_1");

setTimeout(function timeout(){
    console.log("asynchronous_2");
}, 10000);

console.log("synchronous_1");