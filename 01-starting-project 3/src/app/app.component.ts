import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';

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
  imports: [HeaderComponent, UserInputComponent]
})
export class AppComponent {

  onFormSubmit(form: Form){
    console.log(form)
  }
}
