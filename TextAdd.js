const button = document.getElementById("Button");
const clearBut = document.getElementById("clearBut");
const field = document.getElementById("Field");
const list = document.getElementById("List")

button.addEventListener('click', addText);
clearBut.addEventListener('click', clearList);

field.addEventListener("keyup", function(event) {
    if(event.code === 'Enter') {
        button.click();
    }

});

function addText () {
    const item = document.createElement("li");
    item.innerText = field.value;
    list.appendChild(item);
    console.log(list);
    field.value = "";
}

function clearList () {
    list.innerText = "";
    console.log(list);
}