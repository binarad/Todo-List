const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function myFunc() {
    let text = document.getElementById("title").innerHTML;
    document.getElementById("title").innerHTML = text.toUpperCase();
}