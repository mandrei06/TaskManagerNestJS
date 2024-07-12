import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  private tasks: Task[] = [];
  private idCounter = 1;

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: number): Task {
    return this.tasks.find(task => task.id === id);
  }

  createTask(title: string, description: string): Task {
    const newTask = {
      id: this.idCounter++,
      title,
      description,
      completed: false,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  updateTask(id: number, updatedTask: Partial<Task>): Task {
    const task = this.getTaskById(id);
    if (task) {
      Object.assign(task, updatedTask);
    }
    return task;
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
