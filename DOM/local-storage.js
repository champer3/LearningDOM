//Local Storage

// localStorage.setItem("todo", "feed teh cat");
// localStorage.setItem("todo", "feed teh cat");
// localStorage.setItem("user", "sleep time");

//Session Storage

// sessionStorage.setItem("TodoList", "Cat care");

//Geting Stuff back
// const user = localStorage.getItem("user")
// console.log(typeof user);
localStorage.clear();

const TodoList = {
    todo1: "hit the gym",
    todo2: "fuck yourself"
}
localStorage.setItem("todos", JSON.stringify(TodoList));

//Retrieve what we set

const retrieve =JSON.parse(localStorage.getItem("todos"));
console.log(retrieve);