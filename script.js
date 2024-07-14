// get elements
const taskList = document.getElementById('task-list');
const addTaskBtn = document.getElementById('add-task-btn');
const taskForm = document.getElementById('task-form');
const submitTaskBtn = document.getElementById('submit-task-btn');

// task array
let tasks = [];

// render tasks
function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task) => {
    const taskHTML = `
      <li class="animate">
        <span>${task.title}</span>
        <span>${task.description}</span>
        <span>${task.dueDate}</span>
        <span>${task.status}</span>
        <button class="delete-btn">Delete</button>
      </li>
    `;
    taskList.innerHTML += taskHTML;
  });
}

// add task event listener
addTaskBtn.addEventListener('click', () => {
  taskForm.style.display = 'block';
  taskForm.classList.add('animate');
});

// submit task event listener
submitTaskBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const taskTitle = document.getElementById('task-title').value;
  const taskDescription = document.getElementById('task-description').value;
  const taskDueDate = document.getElementById('task-due-date').value;
  const taskStatus = document.getElementById('task-status').value;
  const newTask = {
    title: taskTitle,
    description: taskDescription,
    dueDate: taskDueDate,
    status: taskStatus
  };
  tasks.push(newTask);
  renderTasks();
  taskForm.style.display = 'none';
  taskForm.classList.remove('animate');
  document.getElementById('task-title').value = '';
  document.getElementById('task-description').value = '';
  document.getElementById('task-due-date').value = '';
  document.getElementById('task-status').value = 'to-do';
});

// delete task event listener
taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    const taskIndex = tasks.findIndex((task) => task.title === e.target.parentNode.children[0].textContent);
    tasks.splice(taskIndex, 1);
    renderTasks();
  }
});

// initialize task list
renderTasks();