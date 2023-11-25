const inputBox = document.querySelector("#input-box");
function addTask(){
if(inputBox.value === "") {
    alert("Please write the task!")
    return;
}

let taskList = document.getElementById("todo-list");
let taskItem = document.createElement("div")
taskItem.className = 'task';

let checkbox = document.createElement("input")
checkbox.type = 'checkbox';
checkbox.className ='check'
checkbox.addEventListener('change', function(){
    toggleTaskCompletion(this);
})

let editButton = document.createElement("button")
editButton.textContent = 'Edit';
editButton.className = 'edit';
editButton.addEventListener('click', function(){
    editTask(checkbox);
})

let taskLabel = document.createElement('label');
taskLabel.textContent = inputBox.value;

let deleteButton = document.createElement("button");
deleteButton.textContent = 'Delete';
deleteButton.className = 'del';
deleteButton.addEventListener('click', function(){
    deleteTask(taskItem);
})

taskItem.appendChild(checkbox);
taskItem.appendChild(taskLabel);
taskItem.appendChild(deleteButton);
taskItem.appendChild(editButton);

taskList.appendChild(taskItem);

inputBox.value = '';
}
function toggleTaskCompletion(checkbox) {
    let taskLabel = checkbox.nextElementSibling;
    if(checkbox.checked) {
        taskLabel.style.textDecoration = 'line-through';
    }
    else {
        taskLabel.style.textDecoration = 'none';
    }
}

function deleteTask(taskItem) {
    let taskList = document.getElementById("todo-list");
    taskList.removeChild(taskItem);
}

function editTask(checkbox) {
    let newText = prompt("Write new text: ", checkbox.value);
    if(newText != null){
        checkbox.value = newText;
    }
}