import ProjectManager from './ProjectManager';
import DOMHandler from './DOMHandler';

const projectManager = new ProjectManager();
const domHandler = new DOMHandler();

// Set up event handlers
domHandler.setProjectDeleteHandler((index) => {
    projectManager.deleteProject(index);
    domHandler.renderProjects(projectManager.getAllProjects());
});

domHandler.setTaskDeleteHandler((index) => {
    projectManager.deleteTask(0, index); // Assuming we're working with the first project for now
    domHandler.renderTasks(projectManager.getProject(0).getAllTasks());
});

domHandler.setTaskEditHandler((task, index) => {
    // Implement task editing logic here
    console.log('Edit task:', task, index);
});

// Set up form handlers
domHandler.setupProjectForm((title, description) => {
    projectManager.createProject(title, description);
    domHandler.renderProjects(projectManager.getAllProjects());
});

domHandler.setupTaskForm((title, description, dueDate, priority) => {
    projectManager.createTask(0, title, description, dueDate, priority); // Assuming we're working with the first project for now
    domHandler.renderTasks(projectManager.getProject(0).getAllTasks());
});

// Initial render
domHandler.renderProjects(projectManager.getAllProjects());
