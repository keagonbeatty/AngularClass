import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { ResultsComponent } from './results/results.component';

interface Form{
  initial_investment: number,
  annual_investment: number,
  expected_return: number,
  duration: number
}
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, ResultsComponent]
})
export class AppComponent {

  results = false

  onFormSubmit(form: Form){
    this.results = true;
    console.log(form)
  }
}
