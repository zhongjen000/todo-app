class DOMHandler {
    constructor() {
        this.projectList = document.querySelector('.project-list');
        this.taskList = document.querySelector('.task-list');
        this.projectForm = document.querySelector('.project-form');
        this.taskForm = document.querySelector('.task-form');
    }

    // Project DOM Operations
    renderProject(project) {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project-item');
        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <button class="delete-project">Delete</button>
        `;
        return projectElement;
    }

    renderProjects(projects) {
        this.projectList.innerHTML = '';
        projects.forEach((project, index) => {
            const projectElement = this.renderProject(project);
            projectElement.querySelector('.delete-project').addEventListener('click', () => {
                this.onProjectDelete(index);
            });
            this.projectList.appendChild(projectElement);
        });
    }

    // Task DOM Operations
    renderTask(task) {
        const taskElement = document.createElement('div');
        taskElement.classList.add('task-item');
        taskElement.innerHTML = `
            <h4>${task.title}</h4>
            <p>${task.description}</p>
            <p>Due: ${task.dueDate.toLocaleDateString()}</p>
            <p>Priority: ${task.priority}</p>
            <button class="edit-task">Edit</button>
            <button class="delete-task">Delete</button>
        `;
        return taskElement;
    }

    renderTasks(tasks) {
        this.taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const taskElement = this.renderTask(task);
            taskElement.querySelector('.delete-task').addEventListener('click', () => {
                this.onTaskDelete(index);
            });
            taskElement.querySelector('.edit-task').addEventListener('click', () => {
                this.onTaskEdit(task, index);
            });
            this.taskList.appendChild(taskElement);
        });
    }

    // Form Handlers
    setupProjectForm(onProjectCreate) {
        this.projectForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const title = this.projectForm.querySelector('#project-title').value;
            const description = this.projectForm.querySelector('#project-description').value;
            onProjectCreate(title, description);
            this.projectForm.reset();
        });
    }

    setupTaskForm(onTaskCreate) {
        this.taskForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const title = this.taskForm.querySelector('#task-title').value;
            const description = this.taskForm.querySelector('#task-description').value;
            const dueDate = new Date(this.taskForm.querySelector('#task-due-date').value);
            const priority = this.taskForm.querySelector('#task-priority').value;
            onTaskCreate(title, description, dueDate, priority);
            this.taskForm.reset();
        });
    }

    // Event Handlers
    onProjectDelete(index) {
        // This will be set by the main application
        if (this.handleProjectDelete) {
            this.handleProjectDelete(index);
        }
    }

    onTaskDelete(index) {
        // This will be set by the main application
        if (this.handleTaskDelete) {
            this.handleTaskDelete(index);
        }
    }

    onTaskEdit(task, index) {
        // This will be set by the main application
        if (this.handleTaskEdit) {
            this.handleTaskEdit(task, index);
        }
    }

    // Setter methods for event handlers
    setProjectDeleteHandler(handler) {
        this.handleProjectDelete = handler;
    }

    setTaskDeleteHandler(handler) {
        this.handleTaskDelete = handler;
    }

    setTaskEditHandler(handler) {
        this.handleTaskEdit = handler;
    }
}

export default DOMHandler; 