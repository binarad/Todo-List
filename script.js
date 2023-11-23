const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

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