// Normal fetch function 
function getFetch1(getURL){
    fetch(getURL)
        .then(resp => resp.json())
        .then(data => {console.log(data)})
        .catch(error => {console.log(err.message)})
}

// Async/Await fetch function 
async function getFetch2(getURL){
    try{
        const resp = await fetch(getURL)
        const data = await resp.json()
        console.log(data)
    }
    catch(err){
        console.log(err);
    }
}