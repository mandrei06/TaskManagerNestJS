import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }

  @Get(':id')
  getTaskById(@Param('id') id: string): Task {
    return this.taskService.getTaskById(parseInt(id, 10));
  }

  @Post()
  createTask(@Body() body: { title: string, description: string }): Task {
    return this.taskService.createTask(body.title, body.description);
  }

  @Put(':id')
  updateTask(@Param('id') id: string, @Body() body: Partial<Task>): Task {
    return this.taskService.updateTask(parseInt(id, 10), body);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string): void {
    this.taskService.deleteTask(parseInt(id, 10));
  }
}
