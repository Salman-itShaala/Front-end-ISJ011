const todoInput = document.getElementById("todo-input-box");
const todosContainer = document.querySelector(".todos");

const todosArray = [];

function handleClick() {
  todosArray.push(todoInput.value);
  // task 1
  //   ["taks 1", "task 2", "task 3"]
  todoInput.value = "";
}

function remove(index) {
  // to remove todo from array
  todosArray.splice(index, 1);

  displayTodos();
}

function displayTodos() {
  todosContainer.innerHTML = "";

  for (let i = 0; i < todosArray.length; i++) {
    // create todo p element
    const todoPara = document.createElement("p");

    todoPara.innerHTML = `${todosArray[i]} <button onclick="remove(${i})">Remove</button>`;

    // append para to todo container div
    todosContainer.appendChild(todoPara);
  }
}
