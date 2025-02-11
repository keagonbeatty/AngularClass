import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Form{
  initial_investment: number,
  annual_investment: number,
  expected_return: number,
  duration: number
}

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() form = new EventEmitter<Form>();
  init_invest = 0
  ann_invest = 0
  duration = 0
  return = 0

  onSubmit(){
    this.form.emit({
      initial_investment: this.init_invest,
      annual_investment: this.ann_invest,
      expected_return: this.return,
      duration: this.duration
    })
    console.log(this.init_invest)
  }
}
