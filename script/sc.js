
const tasks = [];

const addform = document.getElementById("sec02__form");
const titletask = document.getElementById("Title__task");
const tasksContainer = document.getElementById("task__list");
const titleDescription = document.getElementById("Title__des");
const emptyMessage = document.getElementById("empty-message");
const taskDate = document.getElementById("Title__date");

// عرض المهام
function renderTasks() {
  tasksContainer.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskElement = document.createElement("div");
    if (task.completed) {
    taskElement.style.backgroundColor = "#10b9819a";
    taskElement.style.borderRadius = "5px";
    taskElement.style.padding = "10px";
    taskElement.style.marginBottom = "20px";
    taskElement.style.boxShadow = "0 0 0 3px rgba(16, 185, 129, 0.15)";
    
}
    const taskText = document.createElement("p");
    const but_delete = document.createElement("button");
    but_delete.classList.add("delete-btn");
    const but_complete = document.createElement("button");
    but_complete.classList.add("complete-btn");


    taskText.textContent =
      task.title + " " +
      task.description + " " +
      task.date;

    but_delete.textContent = "Delete";
    but_complete.textContent = "Complete";


    but_complete.addEventListener("click", () => {
      task.completed = !task.completed;
      renderTasks();
    });

    but_delete.addEventListener("click", () => {
      tasks.splice(index, 1);
      renderTasks();
    });

    taskElement.appendChild(taskText);
    taskElement.appendChild(but_delete);  
    tasksContainer.appendChild(taskElement);
    taskElement.appendChild(but_complete);

  });

  if (tasks.length === 0) {
    emptyMessage.style.display = "block";
  } else {
    emptyMessage.style.display = "none";
  }
}

// إضافة مهمة
addform.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = titletask.value;

  /* التحقق من أن المهمة غير فارغة  */
  /* if(title === ""){
      title.trim();
      return ;
    } */
  const description = titleDescription.value;
  const date = taskDate.value;

  tasks.push({
    title: title,
    description: description,
    date: date,
    completed: false,
  });

  renderTasks();

  titletask.value = "";
  titleDescription.value = "";
  taskDate.value = "";

});

// إظهار رسالة القائمة الفارغة عند فتح الصفحة
renderTasks();
