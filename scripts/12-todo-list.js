const todoList = []; //Save the data



renderTodoList();
function renderTodoList(){
  let todoListHTML = '';
  todoList.forEach((todoObject, index) => {
    const {name, dueDate} = todoObject;
    const html = `
      <div> ${name} </div>
      <div> ${dueDate} </div>
      <button class = "delete-todo-button js-delete-todo-button"> Delete </button>
    `; //generating the HTML.
    todoListHTML += html;
  });
  document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton,index) => {
      deleteButton.addEventListener('click',() => {
        todoList.splice(index, 1);
        renderTodoList();
      })
    })
}

document.querySelector('.js-add-todo-button').addEventListener('click',() => addTodo());

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateElement = document.querySelector('.js-date-input');
  const dueDate = dateElement.value;
  
  todoList.push({name, dueDate});

  inputElement.value = "";

  renderTodoList();
}
