import { Component, Input } from '@angular/core';
import { CurrencyPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [NgFor, CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  @Input() results?: {
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number,
  }[];

}
