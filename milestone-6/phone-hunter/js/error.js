// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json());
// .then(data => console.log(data))
// .catch(error => console.log(error));

// try{
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();
//     console.log(data)
// }

// document.getElementById('abc')

// synchronous asynchronous 

console.log(1);
setTimeout(() => {
    console.log(2);
}, 3000);
console.log(3)