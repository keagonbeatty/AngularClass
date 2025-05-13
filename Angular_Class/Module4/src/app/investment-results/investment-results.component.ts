import { Component, Input } from '@angular/core';
import { type InvestmentResults } from './investment-results.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: false,
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  @Input() investmentResults?: {
    year: number,
      interest: number,
      valueEndOfYear: number,
      annualInvestment: number,
      totalInterest: number,
      totalAmountInvested: number,
  }[];
}
