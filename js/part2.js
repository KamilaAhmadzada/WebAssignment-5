const text = document.getElementById("text");
const changeTextBtn = document.getElementById("changeTextBtn");

changeTextBtn.addEventListener("click", function () {
    text.textContent = "The text has been changed!";
});

const styleBox = document.getElementById("styleBox");
const colorBtn = document.getElementById("colorBtn");
const sizeBtn = document.getElementById("sizeBtn");

colorBtn.addEventListener("click", function () {
    styleBox.style.backgroundColor = "lightblue";
});

sizeBtn.addEventListener("click", function () {
    styleBox.style.fontSize = "28px";
});

const itemList = document.getElementById("itemList");
const addItemBtn = document.getElementById("addItemBtn");
const removeItemBtn = document.getElementById("removeItemBtn");

addItemBtn.addEventListener("click", function () {
    const li = document.createElement("li");
    li.textContent = "Item " + (itemList.children.length + 1);
    itemList.appendChild(li);
});

removeItemBtn.addEventListener("click", function () {
    if (itemList.lastElementChild) {
        itemList.lastElementChild.remove();
    }
});