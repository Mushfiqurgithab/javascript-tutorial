function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}

/*
1. get the container element where you want to add new elements
2. create child element
3. set innerText or innerHTML
4. appendChild
*/

function displayPosts(posts){
    const postsContatiner = document.getElementById('posts-container');
    for(const post of posts ){
        console.log(post);
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `
            <h4>User- ${post.userId}</h4>
            <h5>Post : ${post.title}</h5>
            <p>Post Description : ${post.body}</p>
        `;
        postsContatiner.appendChild(postDiv);
    }
}
loadPost();

