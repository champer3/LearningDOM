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
const todoNr = document.querySelector('.todo-nr b');
const mainTitle = document.querySelector('.main-title');
const nameInput = document.querySelector('.name-text');
const itemList = items.children;


// // Automatically adds new items and update the number of items. 

button.addEventListener('click', function(e){
    e.preventDefault();
    const addNewItem = document.createElement('li');
    addNewItem.className = 'item';
    addNewItem.innerText = nameInput.value;
    items.appendChild(addNewItem);
    nameInput.value = "";
    todoNr.innerText = itemList.length;
    addNewItem.addEventListener('click', function(e){
        e.target.remove();
    })
})







// button.addEventListener('click', newItem)

// // function newItem() {
// //     console.log("New Item Added");
// // }

// button.addEventListener('keydown', function(e){
//     if (e.keyCode === 68){
//         mainTitle.classList.toggle('spectacular');
//     }
// })