// input과 button을 document가 아니라 loginForm 안에서 바로 찾을 수 있음.
const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function paintGreeting(username){
    greeting.innerText = "Hello " + username 
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

function loginsubmit(event){
    event.preventDefault(); // 페이지 새로고침 방지
    loginForm.classList.add(HIDDEN_CLASSNAME); // form 숨기기
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username); // localStorage에 저장
    paintGreeting(username)
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if (savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit",loginsubmit);
}else{
    // show the greetings
    // greeting 안에 text를 추가
    paintGreeting(savedUsername)
}