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

    let taskLabel = document.createElement('label');
    taskLabel.textContent = inputBox.value;

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

    inputBox.value = '';
    saveData();

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

function showTask(taskList) {
    taskList = localStorage.getItem("data");
}

showTask();