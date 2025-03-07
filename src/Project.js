import Task from './Task';

class Project {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.tasks = [];
    }

    addTask(task) {
        if (task instanceof Task) {
            this.tasks.push(task);
        } else {
            throw new Error('Invalid task object');
        }
    }

    removeTask(taskIndex) {
        if (taskIndex >= 0 && taskIndex < this.tasks.length) {
            this.tasks.splice(taskIndex, 1);
        } else {
            throw new Error('Invalid task index');
        }
    }

    getTask(taskIndex) {
        if (taskIndex >= 0 && taskIndex < this.tasks.length) {
            return this.tasks[taskIndex];
        } else {
            throw new Error('Invalid task index');
        }
    }

    getAllTasks() {
        return this.tasks;
    }
}

export default Project; 