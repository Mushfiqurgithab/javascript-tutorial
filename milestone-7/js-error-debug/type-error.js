const numbs = 5;
numbs.push(45);//type error

// let address ={} ;
// console.log(address.home);//type error
let address ={ city: 'bBaria',postCode: 4560};
// console.log(address.home.building);//type error
console.log(address?.home?.building);

const a = 'abul';
a = 'babul';//type error