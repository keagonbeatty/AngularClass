import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() close = new EventEmitter<void>();
  @Input({required: true}) userId! : string;

  private tasksService = inject(TasksService)

  enteredTitle = ''
  enteredSummary = ''
  enteredDueDate = ''

  onCancel(){
    this.close.emit()
  }

  onSubmit(){

    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDueDate
    }, this.userId)

    this.close.emit()
  }

}
