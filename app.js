
const projects = [
    { id: 1, name: "Project 1" },
    { id: 2, name: "Project 2" },
    { id: 3, name: "Project 3" },
];

const tasks = [
    { id: 1, project: 1, name: "Task 1" },
    { id: 2, project: 1, name: "Task 2" },
    { id: 3, project: 1, name: "Task 3" },
    { id: 4, project: 1, name: "Task 4" },
    { id: 1, project: 2, name: "Task 1" },
    { id: 2, project: 2, name: "Task 2" },
    { id: 3, project: 2, name: "Task 3" },
    { id: 4, project: 2, name: "Task 4" },
    { id: 1, project: 3, name: "Task 1" },
    { id: 2, project: 3, name: "Task 2" },
    { id: 3, project: 3, name: "Task 3" },
    { id: 4, project: 3, name: "Task 4" },
];


function displayTasks(projectId) {
    const taskList = document.querySelector(`#task-list-${projectId} ul`);
    taskList.innerHTML = "";

    const projectTasks = tasks.filter(task => task.project === projectId);

    projectTasks.forEach(task => {
        const taskItem = document.createElement("li");
        taskItem.textContent = task.name;
        taskList.appendChild(taskItem);
    });
}


document.querySelectorAll(".add-task-btn").forEach(button => {
    button.addEventListener("click", () => {
        const projectId = button.getAttribute("data-project");
        const projectName = projects.find(project => project.id === parseInt(projectId)).name;
        const taskName = prompt(`Add a task to ${projectName}:`);

        if (taskName) {
            const newTaskId = tasks.length + 1;
            tasks.push({ id: newTaskId, project: parseInt(projectId), name: taskName });
            displayTasks(parseInt(projectId));
        }
    });
});


projects.forEach(project => {
    displayTasks(project.id);
});
