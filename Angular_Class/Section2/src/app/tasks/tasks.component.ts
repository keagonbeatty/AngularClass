import { Component, inject, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
@Input({required: true}) id!: string
@Input({required: true}) name!:string | undefined;
newTaskBool: boolean = false;

constructor(private tasksService: TasksService){
}


get selectedUserTasks(){
  return this.tasksService.getUserTasks(this.id)
}

onNewTask(){
  this.newTaskBool = true;
}

onCancelled(){
  this.newTaskBool = false
}

}
