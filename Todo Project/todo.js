// Tüm elementleri seçme işlemi
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventlisteners();

function eventlisteners() // Tüm event listenerlar
{
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAlltodosToUI);
    secondCardBody.addEventListener("click",deleteTodo);
    filter.addEventListener("keyup",filterTodos);
    clearButton.addEventListener("click",clearAllTodos);
}

function clearAllTodos(e){

    if (confirm("Tüm Todo'ları temizlemek istediğinize emin misiniz?")){

           // todoList.innerHTML = ""; // Yavaş yöntemi

           while (todoList.firstElementChild != null){

            todoList.removeChild(todoList.firstElementChild);
        }
        
        localStorage.removeItem("todos");
    }
}

function filterTodos (e) {

    const filterValue = e.target.value.toLowerCase();
    const Listitems = document.querySelectorAll(".list-group-item");

    Listitems.forEach(function(listItem){

        const Text = listItem.textContent.toLowerCase();

        if (Text.indexOf(filterValue) === -1)
        //Bulamadı

        listItem.setAttribute("style","display : none !important");

        else {

            listItem.setAttribute("style", "display: block !important")
        }

    })
}

function deleteTodo(e)
{
    if (e.target.className === "fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        showalert("success", "Todo Başarıyla Silindi")
        deleteTodosFromStorage(e.target.parentElement.parentElement.textContent);
    }
}

function deleteTodosFromStorage(deletetodo) // Storage'dan todo siler
{
    let todos = getTodosFromStorage();

    todos.forEach(function(todo,index){
        if (todo === deletetodo){
            todos.splice(index,1); //Arrayden değeri silebiliriz.
        }
    });

    localStorage.setItem("todos",JSON.stringify(todos));
}

function loadAlltodosToUI() // Storage'daki todoların arayüzde kalmasını sağlar.
{
    let todos = getTodosFromStorage();

    todos.forEach(function(todo){
    addTodoToUI(todo);
    })

}

function addTodo(e)
{
    const newTodo = todoInput.value.trim();

    let sameTodo = false;
    todos.forEach(function(todo){

        if (todo === newTodo){

            sameTodo = true;
            return sameTodo;
        }
    })

    if (newTodo === ""){

        showalert("danger","Lütfen bir todo girin.");
    } else if (sameTodo === true) {

        showalert("warning","Girdiğiniz todo listede bulunuyor.");
    }

    else {
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        showalert("success","Başarıyla Eklendi.")
    }

    e.preventDefault();
}

function getTodosFromStorage() // Storage'dan todo'ları alma
{
    if (localStorage.getItem("todos") === null)
    todos = [];

    else {

        todos = JSON.parse(localStorage.getItem("todos"));
    }

    return todos;

}

function addTodoToStorage(newTodo) // Storage'a todo ekleme
{
    let todos = getTodosFromStorage();

    todos.push(newTodo);

    localStorage.setItem("todos", JSON.stringify(todos));
}



function showalert (type,message){
    
    const alert = document.createElement("div");

    alert.className = `alert alert-${type}`;
    
    alert.textContent = message;
    firstCardBody.appendChild(alert);

    //setTimeout

    setTimeout(function(){
        alert.remove();
    }, 2000);
} 

function addTodoToUI(newTodo) //Alınan string değerini arayüze ekler. 
{
    /*
    <li class="list-group-item d-flex justify-content-between">
                            Todo 1
                            <a href = "#" class ="delete-item">
                                <i class = "fa fa-remove"></i>
                            </a>

                        </li>
    */

    // List Item Oluşturma
    const listItem = document.createElement("li");

    //Link oluşturma
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>";

    listItem.className = "list-group-item d-flex justify-content-between";

    //Text Node Ekleme
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    //TodoList'e List Item Ekleme

    todoList.appendChild(listItem);
    todoInput.value = "";
}