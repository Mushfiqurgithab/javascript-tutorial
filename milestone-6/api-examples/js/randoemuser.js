const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data))
}

const displayUser = user => {
    const name = user.results[0].name.title +' '+  user.results[0].name.first +' '+ user.results[0].name.last
    document.getElementById('name').innerHTML = name;
    
    const genderTag = document.getElementById('gender')
    genderTag.innerHTML = user.results[0].gender

    const locationTag  =  user.results[0].location.street.number + ', '+ user.results[0].location.street.name +', '+ user.results[0].location.city +', ' + user.results[0].location.state +', '+ user.results[0].location.country
    document.getElementById('loaction').innerHTML = locationTag;

    const imageDiv = document.getElementById('image');
    const todoDiv = document.createElement('div')
    todoDiv.innerHTML =  `
    <img src="${user.results[0].picture.large}" alt="image" id="image" style="width:128px;height:128px;">
    `;
    imageDiv.appendChild(todoDiv)
    
    console.log(user)
    console.log(user.results[0].picture.large);
}

loadUser();