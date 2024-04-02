document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Access the input value and create a new task item
    const taskInput = document.getElementById("new-task-description");
    const taskDescription = taskInput.value;

    // Create a new task item and append it to the task list
    const taskList = document.getElementById("tasks");
    const newTaskItem = document.createElement("li");
    newTaskItem.textContent = taskDescription;
    taskList.appendChild(newTaskItem);

    // Clear the input field after adding the task
    taskInput.value = "";
  });
});
