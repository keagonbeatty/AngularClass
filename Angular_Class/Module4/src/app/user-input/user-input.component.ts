import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() submitted = new EventEmitter<{initialInvestment: number, duration: number, expectedReturn:number, annualInvestment: number}>();

  enteredInitialInvestment = 0
  enteredAnnualInvestment = 0
  enteredDuration = 0
  enteredReturn = 0

  onSubmit(){
    this.submitted.emit({initialInvestment: +this.enteredInitialInvestment, duration: +this.enteredDuration, expectedReturn: +this.enteredReturn, annualInvestment: +this.enteredAnnualInvestment})
  }
}
