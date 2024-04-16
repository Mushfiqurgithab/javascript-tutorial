const hello = localStorage.get('hello')
console.log(hello);

const setAge = () =>{
    // localStorage.setItem('age', 31);
    window.localStorage.setItem('age', 31);
}