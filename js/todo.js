const ToDoForm = document.querySelector("#todo-form");
const ToDoList = document.querySelector("#todo-list");
const ToDoInput = ToDoForm.querySelector("input");

function paintToDo(ToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");

    li.appendChild(span);
    span.innerText = ToDo;
    ToDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = ToDoInput.value;
    ToDoInput.value = "";
    paintToDo(newTodo);
}