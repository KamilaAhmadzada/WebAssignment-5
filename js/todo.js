let tasks = [];

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

function render() {
    taskList.innerHTML = "";

    tasks.forEach(function (task, index) {
        const li = document.createElement("li");
        li.textContent = task.text;

        if (task.done) {
            li.classList.add("done");
        }

        li.addEventListener("click", function () {
            task.done = !task.done;
            render();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function (event) {
            event.stopPropagation();
            tasks.splice(index, 1);
            render();
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

addTaskBtn.addEventListener("click", function () {
    const text = taskInput.value.trim();

    if (text === "") {
        return;
    }

    tasks.push({ text: text, done: false });
    taskInput.value = "";
    render();
});