const todoList = document.querySelector("#todo-list");
const item = todoList.children;

const todoNr = document.querySelector(".todo-nr");

const newItem = document.createElement('li');
newItem.className = 'item';
newItem.id = 'll'
newItem.innerText = 'item 3';
console.log(newItem)


todoList.appendChild(newItem);

todoNr.innerText = item.length;
