const getData = new Promise((resolve, reject) => {
    const num = Math.random()*10;
    console.log(num);
    if(num < 5){
        resolve(5666665);
    }else{
        reject('No data available');
    }
    
})

getData
    .then(data => console.log(data + 26))
    .catch(err => console.error('ERR:', err))