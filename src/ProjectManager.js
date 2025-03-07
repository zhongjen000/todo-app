import Project from './Project';
import Task from './Task';

class ProjectManager {
    constructor() {
        this.projects = [];
    }

    createProject(title, description) {
        const project = new Project(title, description);
        this.projects.push(project);
        return project;
    }

    createTask(projectIndex, title, description, dueDate, priority) {
        const project = this.getProject(projectIndex);
        const task = new Task(title, description, dueDate, priority);
        project.addTask(task);
        return task;
    }

    deleteTask(projectIndex, taskIndex) {
        const project = this.getProject(projectIndex);
        project.removeTask(taskIndex);
    }

    getProject(projectIndex) {
        if (projectIndex >= 0 && projectIndex < this.projects.length) {
            return this.projects[projectIndex];
        } else {
            throw new Error('Invalid project index');
        }
    }

    getAllProjects() {
        return this.projects;
    }

    deleteProject(projectIndex) {
        if (projectIndex >= 0 && projectIndex < this.projects.length) {
            this.projects.splice(projectIndex, 1);
        } else {
            throw new Error('Invalid project index');
        }
    }
}

export default ProjectManager; 