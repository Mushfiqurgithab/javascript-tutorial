// Synchronous 
console.log("I");
console.log("eat");
console.log("Ice Cream");

// Asynchronous 
console.log("I")
// This will be shown after 2 second
setTimeout(() => {console.log("eat")}, 2000);
console.log("Ice Cream");