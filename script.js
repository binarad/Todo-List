const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");

<<<<<<< HEAD
function addtask(){
    if(inputBox.value == ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerText = inputBox.value;
        listContainer.appendChild(li);
    }
}
=======
function addTask(){
    if(inputBox.value === ''){
        alert("giga niga!")
    }
    else{
        let li = document.createElement("li")
        li.innerText = inputBox.value;
        listContainer.appendChild(li);         
    }
    inputBox.value = '';
}
>>>>>>> f5067a24c71ee09c9fef9a4ecda5f3f60bd33a6f
