const toDoForm = document.getElementById("todo-form")
const todoInput = toDoForm.querySelector("input") // document.get..id("#todo-form input")
const todoList = document.getElementById("todo-list")

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos(){
    // toDos 내용을 로컬저장소에 넣는 함수
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function delTodo(event){
    const li = event.target.parentElement; // 삭제하고자 하는 li
    li.remove();
    //li.id is string, not number
    // toDo.id is number
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos()
}

function paintToDo(newTodo){ // newTodo은 객체다.
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",delTodo);

    li.appendChild(span);// span은 li의 자식이 된다.
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleSubmit(event){
    event.preventDefault();
      //  console.log(todoInput.value)
    const newTodo = todoInput.value;
    todoInput.value = ""; // enter해주고 칸을 비워주기 위함
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    };

    toDos.push(newTodoObj); // 배열에 저장
   // paintToDo(newTodo); // 오직 text인 newTodo만 가지고있다
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY)
if(savedToDos){
    // saveToDos가 존재한다면
    const parsedToDos = JSON.parse(savedToDos);
    // parsedToDos.forEach((item)=>console.log("this is the turn of ",item));
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}