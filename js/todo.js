const ToDoForm = document.querySelector("#todo-form");
const ToDoList = document.querySelector("#todo-list");
const ToDoInput = ToDoForm.querySelector("input");

const TODOS_KEY = "todos";
const ToDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(ToDos));
}

function deleteToDo(event){
    const target = event.target.parentElement;
    target.remove();
}

function paintToDo(ToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = ToDo;
    const button = document.createElement("button");
    button.innerText = "Delete";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    ToDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = ToDoInput.value;
    ToDoInput.value = "";
    ToDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

ToDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDo = localStorage.getItem(TODOS_KEY);
if(saveToDos !== null){
    const parsedToDos = JSON.parse(saveToDos);
}