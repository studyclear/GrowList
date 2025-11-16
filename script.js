const taskInput = document.getElementById("taskInput");


const li = document.createElement("li");
li.className = "list-group-item d-flex justify-content-between align-items-center";
li.innerHTML = `
<span class="task-text">${taskText}</span>
<div>
<button class="btn btn-sm btn-success me-2 edit-btn"><i class="bi bi-pencil"></i></button>
<button class="btn btn-sm btn-danger delete-btn"><i class="bi bi-trash"></i></button>
</div>
`;


taskList.appendChild(li);
taskInput.value = "";
refreshEmptyState();
}


addTaskBtn.addEventListener("click", addTask);


taskInput.addEventListener("keypress", e => {
if (e.key === "Enter") addTask();
});


taskList.addEventListener("click", e => {
const li = e.target.closest("li");


// Hapus
if (e.target.closest(".delete-btn")) {
li.remove();
refreshEmptyState();
}


// Edit
if (e.target.closest(".edit-btn")) {
const oldText = li.querySelector(".task-text").textContent;
const newText = prompt("Edit tugas:", oldText);
if (newText && newText.trim() !== "") {
li.querySelector(".task-text").textContent = newText;
}
}
});


// THEME TOGGLE
let isDark = true;


themeToggle.addEventListener("click", () => {
isDark = !isDark;
document.body.classList.toggle("dark-mode", isDark);
document.body.classList.toggle("light-mode", !isDark);
});


refreshEmptyState();
