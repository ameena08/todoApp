import { Component } from '@angular/core';

interface Task {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  tasks: Task[] = [];
  completedTasks: Task[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({ title: this.newTask, completed: false });
      this.newTask = '';
    }
  }

  toggleComplete(task: Task) {
    task.completed = !task.completed;
    if (task.completed) {
      const index = this.tasks.indexOf(task);
      if (index !== -1) {
        this.tasks.splice(index, 1);
        this.completedTasks.push(task);
      }
    } else {
      const index = this.completedTasks.indexOf(task);
      if (index !== -1) {
        this.completedTasks.splice(index, 1);
        this.tasks.push(task);
      }
    }
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(t => t !== task);
    this.completedTasks = this.completedTasks.filter(t => t !== task);
  }
}
