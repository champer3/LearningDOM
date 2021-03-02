// const todoList = document.querySelector("#todo-list");
// const item = todoList.children;

// const todoNr = document.querySelector(".todo-nr");

// const newItem = document.createElement('li');
// newItem.className = 'item';
// newItem.id = 'll'
// newItem.innerText = 'item 3';
// console.log(newItem)


// todoList.appendChild(newItem);

// todoNr.innerText = item.length;

const button = document.querySelector('#submit');
const items = document.querySelector('#todo-list');
const todoNr = document.querySelector('.todo-nr b')
const itemList = items.children;


// Automatically adds new items and update the number of items. 

button.addEventListener('click', function(){
    const addNewItem = document.createElement('li');
    addNewItem.className = 'item';
    addNewItem.innerText = `item ${itemList.length + 1}`;
    items.appendChild(addNewItem);
    todoNr.innerText = itemList.length;
})
// button.addEventListener('click', newItem)

// function newItem() {
//     console.log("New Item Added");
// }