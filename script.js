const inputBox = document.querySelector("#input-box");
function addTask(text, done){

    let taskList = document.getElementById("todo-list");
    let taskItem = document.createElement("div")
    taskItem.className = 'task';

    let checkbox = document.createElement("input")
    checkbox.type = 'checkbox';
    checkbox.className ='check'
    checkbox.checked = done;
    checkbox.addEventListener('change', function(){
        toggleTaskCompletion(this);
    })

    let taskLabel = document.createElement('label');
    taskLabel.textContent = text;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = ''
    deleteButton.className = 'del';
    deleteButton.addEventListener('click', function(){
        deleteTask(taskItem);
    })

    let editButton = document.createElement('button')
		editButton.textContent = ''
		editButton.className = 'edit'
		editButton.addEventListener('click', function () {
			editTask(taskLabel)
		})


    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskLabel);
    taskItem.appendChild(deleteButton);
    taskItem.appendChild(editButton);

    taskList.appendChild(taskItem);
    
}
function toggleTaskCompletion(checkbox) {
    let taskLabel = checkbox.nextElementSibling;
    if(checkbox.checked) {
        taskLabel.style.textDecoration = 'line-through';
    }
    else {
        taskLabel.style.textDecoration = 'none';
    }
    saveData();
}

function deleteTask(taskItem) {
    let taskList = document.getElementById("todo-list");
    taskList.removeChild(taskItem);
    saveData();
}

function editTask(taskLabel) {
    let newText = prompt("Write new text:", taskLabel.textContent);
    if(newText != null){
        taskLabel.textContent = newText;
    }
    saveData()
}

function saveData(taskList){
    localStorage.setItem("data", taskList)
}

function prepareTasks() {
    let tasks = localStorage.getItem("data");
    if (!tasks){
        return;
    }
    tasks.forEach(task => {
       addTask(task.text, task.done); 
    });
}

function createTask(){
    if (inputBox.value === '') {
			alert('Please write the task!')
			return
		}
    addTask(inputBox.value, false)
    inputBox.value = ''
	saveData()
}

window.onload =()=>{prepareTasks()}