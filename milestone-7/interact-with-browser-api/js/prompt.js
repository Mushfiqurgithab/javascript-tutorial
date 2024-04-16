// alert 
// confirm 
// prompt 

// alert('How are you')
const showalert = () =>{
    alert('Dosto, taka ase dhar dite parbi, Just 500?')
}

const lendMoney = () => {
    const result = confirm('Will you lend me 500 Taka?')
    console.log(result);
    if(result === true){
        alert('Tui amar jan er dosto!!!');
    }
    else{
        console.log('DGM... toke ajke Block maira dimu.');
    }
}

const getInfo = () =>{
    // alert
    // confirm 
    const name = prompt('Tell me your name');
    console.log(name);
    if(name === null){
        alert('Naam na dile kaam nai!! Ja fooooot');
    }
    else{
        console.log(name, 'Welcome to this world');
    }
}