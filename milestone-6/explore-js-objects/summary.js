/*
Ways to create Object
Ways to clone Object
Obj. method property
Delete object property
Object Immutability
*/

/*
1. Object Literal syntax
const person = {
    firstName = "John",
    lastName = "Doe"
}

2. Object constructor
const person1 = new Object();

//Adding the properties on persona1  Object
person1.firstName = "John";
person1.lastName = "doe";

3. Constructor Function
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}
const person1 = new Person('John', 'Doe');
const person2 = new Person('Jane', 'Due');

4. Es6 classes
class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const person1 = new Person('John', 'Doe');
const person2 = new Person('Jane', 'Due');

5.Object.create()
const person1 = {
    name: "John Doe"
    const person2 = Object.create(person1);
    console.log(person2);  //name: 'John Doe'
}
*/

/*
1. Clone Object
const data = {name: "Alice", age: 23}
const dataCopy = data

2. Shallow Copy/Clone Object
const data = {name: 'Alice', age: 23}
const dataCopy = {...data};

3.Deep Copy/Clone Object
const data = {name: 'Alice', age: 23}
const dataCopy = JSON.parse(JSON.stringify(data))
data.age = 1000;

console.log(data);
console.log(dataCopy);
*/ 

/*
Object Method property

var person1 = {
    name: 'Jim',
    DOB: 1997,
    age: function() {
        return  2020 - this.DOB;
    }
}
*/

/*
1. Compare Object, referential integrity
2. JavaScript call(), apply() and bind() methods
3. this keyword in javascript
*/

/*
What is "this" in JS?
In JavaScript , the this keyword refers to an Object.It's not any variable. We can not 
change the value of it. Which object depends on how this is being invoked(used or called).

The this keyword refers to different objects depending on how it is used:

- In an object method, this refers to object.
- Alone, this refers to the global object.
-In a function, this refers to the global object.
-In an event, this refers to the element that received the event.
-Methods like call(), apply(), and bind() can refer this to any object.
*/