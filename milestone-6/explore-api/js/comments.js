function loadComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data))
}
function displayComments(datas){
    const commentContainer = document.getElementById('comments-container');
    for(const data of datas){
        console.log(data)
        const divComments = document.createElement('div');
        divComments.innerHTML = `
            <h3>PostID : ${data.postId}</h3>
            <p>Id : ${data.id}</p>
            <p>Name : ${data.name}</p>
            <p>Email : ${data.email}</p>
            <p>Body : ${data.body}</p>
        `;
        commentContainer.appendChild(divComments)
    }
}
loadComments()