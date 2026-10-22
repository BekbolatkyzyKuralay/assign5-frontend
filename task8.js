const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const todoList = document.getElementById("todoList");
const todoMessage = document.getElementById("todoMessage");

const tasks = [];
let nextTaskId = 1;

function renderTasks() {
  todoList.innerHTML = "";

  tasks.forEach(function (task) {
    const li = document.createElement("li");
    const taskText = document.createElement("span");
    taskText.textContent = task.text;
    if (task.completed) taskText.classList.add("completed");

    taskText.style.cursor = "pointer";
    taskText.title = "Click to mark complete or incomplete";
    taskText.addEventListener("click", function () {
      task.completed = !task.completed;
      renderTasks();
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      const index = tasks.findIndex(function (item) {
        return item.id === task.id;
      });
      if (index !== -1) tasks.splice(index, 1);
      renderTasks();
      todoMessage.textContent = "Task deleted.";
    });

    li.appendChild(taskText);
    li.appendChild(document.createTextNode(" "));
    li.appendChild(deleteButton);
    todoList.appendChild(li);
  });
}

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const text = taskInput.value.trim();

  if (text === "") {
    todoMessage.textContent = "Please enter a task first.";
    return;
  }

  tasks.push({ id: nextTaskId++, text: text, completed: false });
  taskInput.value = "";
  todoMessage.textContent = "Task added. Click its text to mark it complete.";
  renderTasks();
  taskInput.focus();
});