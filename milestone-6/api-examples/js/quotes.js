const loadQuote = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQoute(data))
    .catch(error => console.log(error))
}

const loadQuote2 = async() =>{
    try{
        const res = await fetch('https://api.kanye.rest/')
        const data = await res.json();
        displayQoute(data);
    }
    catch(error){
        console.log(error)
    }
}

const displayQoute = quote =>{
    const blockQuote = document.getElementById('quote')
    console.log(quote)
    blockQuote.innerHTML = quote.quote;
}
loadQuote()