import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentService } from '../investment-results';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { type InvestmentResults } from './investment-results/investment-results.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false
})
export class AppComponent {
  investmentResults?: { year: number; interest: number; valueEndOfYear: number; annualInvestment: number; totalInterest: number; totalAmountInvested: number; }[];
  constructor(private investmentService: InvestmentService) {}
  onSubmitted(data : {initialInvestment: number, duration: number, expectedReturn:number, annualInvestment: number}){
    this.investmentResults = this.investmentService.calculateInvestmentResults(data)
    console.log(this.investmentResults)
  }
}
