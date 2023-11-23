const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");

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
