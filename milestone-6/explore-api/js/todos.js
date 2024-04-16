function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayTodos(data))
}
function displayTodos(todos){
    // get the constainer
    const todosContainer = document.getElementById('todos-container');
    for( const todo of todos){
        console.log(todo);
        // create the child element 
        const todosDiv = document.createElement('div');
        // set innerHTML 
        todosDiv.innerHTML = `
            <h3>Title : ${todo.title}</h3>
            <p>UserId : ${todo.userId}</p>
            <p>Is Completed : ${todo.completed === true? 'complete':'not complete'}</p>
        `;
        // appendChild 
        todosContainer.appendChild(todosDiv);
    }
}
loadTodos()