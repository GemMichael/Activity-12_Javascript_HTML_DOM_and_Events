document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", () => {
      const taskValue = taskInput.value.trim();

      if (taskValue !== "") {
        const li = document.createElement("li");

        const checkBtn = document.createElement("button");
        checkBtn.textContent = "✓";
        checkBtn.classList.add("check-btn", "btn", "btn-success", "btn-sm", "me-2");
        checkBtn.addEventListener("click", () => {
          li.classList.toggle("done");
        });

        const taskText = document.createElement("span");
        taskText.textContent = taskValue;
        li.appendChild(checkBtn);
        li.appendChild(taskText);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.classList.add("delete-btn", "btn", "btn-danger", "btn-sm", "ms-2");
        deleteBtn.addEventListener("click", () => {
          li.remove();
          hr.remove(); 
        });

        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        const hr = document.createElement("hr");
        taskList.appendChild(hr);

        taskInput.value = "";
      } else {
        alert("Please enter a task.");
      }
    });
  });