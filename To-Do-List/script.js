const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a task to the list
function addTask() {
    if (inputBox.value.trim() === '') {
        alert("You must write something!");
        return;
    }

    // Create a new list item
    const li = document.createElement("li");
    li.textContent = inputBox.value;

    // Create a delete button
    const span = document.createElement("span");
    span.textContent = "\u00d7";
    li.appendChild(span);

    listContainer.appendChild(li);

    inputBox.value = "";
    saveData();
}

// Handle clicks on the list (marking as done or deleting)
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

// Save tasks to local storage
function saveData() {
    const tasks = [];
    listContainer.querySelectorAll("li").forEach(li => {
        tasks.push({
            text: li.firstChild.textContent,
            checked: li.classList.contains("checked")
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from local storage
function showTask() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task.text;
        if (task.checked) li.classList.add("checked");

        const span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);

        listContainer.appendChild(li);
    });
}

// Initialize the task list on page load
showTask();
