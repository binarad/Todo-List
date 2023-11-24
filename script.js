const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");

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
