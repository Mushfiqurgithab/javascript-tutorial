const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
      {
        name: {
          common: "John",
          fullName: ["John", "Doe"]
        },
        age: 32,
        isMale: false,
        address: {
          street: "13/A St Joseph",
          house: 10,
        },
      },
      {
        name: {
          common: "Humayoun",
          fullName: ["Humayoun", "Kabir"]
        },
        age: 33,
        isMale: false,
        address: {
          street: "13/A St Lucia",
          house: 11,
        },
      },
    ]
  };



// document.getElementById("demo").innerHTML = person.result[0].address.street; 

// step-1 : Select Container Element 
const divContainer = document.getElementById('div-container');


// step-2 : create child for each element 
const divPerson = document.createElement("div");

// step-3 : set container of child
divPerson.innerHTML = `
<div class="row" >     
<div class="col-sm-6">
    <div class="card">
      <div class="card-header">Person Name: ${person.result[0].name.common}</div>
      <div class="card-body">
          <p class="card-text">age:${person.result[0].age}</p>
          <p class="card-text">Street:${person.result[0].address.street} House No: ${person.result[0].address.house}</p>
      </div>
    </div>
    </div>
    <div class="col-sm-6">
      <div class="card">
          <div class="card-header">Person Name: ${person.result[1].name.common}</div>
          <div class="card-body">
              <p class="card-text">age: ${person.result[1].age}</p>
              <p class="card-text">Street: ${person.result[1].address.street} House No: ${person.result[1].address.house}</p>
          </div>
      </div>
    </div>
</div>
`;

// Step-4 : append Child 

divContainer.appendChild(divPerson)