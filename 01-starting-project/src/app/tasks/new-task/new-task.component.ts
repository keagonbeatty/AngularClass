import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancelled = new EventEmitter<void>()
  enteredTitle = ''
  enteredDueDate = ''
  
  onCancel(){
    this.cancelled.emit()
  }

}
