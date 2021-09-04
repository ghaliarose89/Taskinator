

var buttonEl= document.querySelector("#save-task");

var taskToDoEL= document.querySelector("#tasks-to-do");

var createTaskHandler = function(){
    var listItemEl=document.createElement("li");
    listItemEl.textContent="This is a new task.";
    listItemEl.className="task-item";
    taskToDoEL.appendChild(listItemEl); 
}

buttonEl.addEventListener("click",createTaskHandler);
