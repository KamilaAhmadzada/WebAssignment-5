const hoverBox = document.getElementById("hoverBox");

hoverBox.addEventListener("mouseover", function () {
    hoverBox.style.backgroundColor = "orange";
});

hoverBox.addEventListener("mouseout", function () {
    hoverBox.style.backgroundColor = "lightgray";
});

const myInput = document.getElementById("myInput");
const output = document.getElementById("output");

myInput.addEventListener("keyup", function () {
    output.textContent = myInput.value;
});

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

function calculate(operation) {
    if (num1.value === "" || num2.value === "") {
        result.textContent = "Please enter both numbers";
        return;
    }

    const a = Number(num1.value);
    const b = Number(num2.value);

    if (operation === "+") {
        result.textContent = a + b;
    } else if (operation === "-") {
        result.textContent = a - b;
    } else if (operation === "*") {
        result.textContent = a * b;
    } else if (operation === "/") {
        if (b === 0) {
            result.textContent = "Cannot divide by zero";
        } else {
            result.textContent = a / b;
        }
    }
}

document.getElementById("addBtn").addEventListener("click", function () { calculate("+"); });
document.getElementById("subBtn").addEventListener("click", function () { calculate("-"); });
document.getElementById("mulBtn").addEventListener("click", function () { calculate("*"); });
document.getElementById("divBtn").addEventListener("click", function () { calculate("/"); });