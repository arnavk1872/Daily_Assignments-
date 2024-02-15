//get Data
async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    data = data.slice(0, 5);
    return data;
}

async function fetchposts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    data = data.slice(0, 5);
    return data;
}
async function fetchtodos() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await response.json();
    data = data.slice(0, 5);
    return data;
}

async function fetchData() {
    const usersPromise = fetchUsers();
    const postsPromise = fetchposts();
    const todosPromise = fetchtodos();

    const [users, posts, todos] = await Promise.all([usersPromise, postsPromise, todosPromise]);

    renderData(users, posts, todos);
}

fetchData();

function renderData(users, posts, todos) {
    const appElement = document.getElementById('app');

    // Render Users
    const usersList = document.createElement('ul');
    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `User: ${JSON.stringify(user)}`;
        usersList.appendChild(listItem);
    });
    appElement.appendChild(usersList);

    // Render Posts
    const postsList = document.createElement('ul');
    posts.forEach(post => {
        const listItem = document.createElement('li');
        listItem.textContent = `Post: ${post.title}- Body:${post.body}`;
        postsList.appendChild(listItem);
    });
    appElement.appendChild(postsList);

    // Render Todos
    const todosList = document.createElement('ul');
    todos.forEach(todo => {
        const listItem = document.createElement('li');
        listItem.textContent = `Todo: ${todo.title} - Completed ${todo.completed}`;
        todosList.appendChild(listItem);
    });
    appElement.appendChild(todosList);
}