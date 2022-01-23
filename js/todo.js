const ToDoForm = document.querySelector("#todo-form");
const ToDoList = document.querySelector("#todo-list");
const ToDoInput = ToDoForm.querySelector("input");

const TODOS_KEY = "todos";
let ToDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(ToDos));
}

function deleteToDo(event){
    const target = event.target.parentElement;
    target.remove();
    ToDos = ToDos.filter(element => element.id !== parseInt(target.id));
    saveToDos();
}

function paintToDo(ToDo){
    const li = document.createElement("li");
    li.id = ToDo.id;
    const span = document.createElement("span");
    span.innerText = ToDo.text;
    const button = document.createElement("button");
    button.innerText = "Delete";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    ToDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = {
        id: Date.now(),
        text: ToDoInput.value
    };
    ToDoInput.value = "";
    ToDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

ToDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDo = localStorage.getItem(TODOS_KEY);

if(savedToDo !== null){
    const parsedToDos = JSON.parse(savedToDo);
    ToDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}