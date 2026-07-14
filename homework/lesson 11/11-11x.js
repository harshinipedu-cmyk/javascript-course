const todoList = JSON.parse(localStorage.getItem('todoList')) || []; //Save the data

renderTodoList();

function renderTodoList(){
  let todoListHTML = ''; 
  for(let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const {name, dueDate} = todoObject;
    const html = `
      <div> ${name} </div>
      <div> ${dueDate} </div>
      <button onclick = "
        todoList.splice(${i}, 1);
        renderTodoList();
        saveToStorage();
      " class = "delete-todo-button"> Delete </button>
    `; //generating the HTML.
    todoListHTML += html;
    
  }
  
  document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;
}

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateElement = document.querySelector('.js-date-input');
  const dueDate = dateElement.value;
  
  todoList.push({name, dueDate});

  inputElement.value = "";

  renderTodoList();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}
