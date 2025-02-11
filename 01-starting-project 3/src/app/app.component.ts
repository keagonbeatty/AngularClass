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

interface Investment{
  year: number,
  interest: number,
  valueEndOfYear: number,
  annualInvestment: number,
  totalInterest: number,
  totalAmountInvested: number,
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, ResultsComponent]
})
export class AppComponent {
  calc_results:Investment[] = []

  results = false

  onFormSubmit(form: Form){
    this.calculateInvestmentDetails(form.initial_investment, form.duration, form.expected_return, form.annual_investment)
    this.results = true;
    
  }

  calculateInvestmentDetails(initialInvestment: number, duration: number, expectedReturn: number, annualInvestment: number){
    this.calc_results = []

    const annualData = [];
    let investmentValue = initialInvestment;
  
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
  
  this.calc_results = annualData;
}
}
