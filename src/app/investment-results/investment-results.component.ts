import { Component, computed, inject } from '@angular/core';
import { CurrencyPipe, NgFor } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [NgFor, CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  private investmentService = inject(InvestmentService);

  /** This is a computed READONLY signal that will update whenever the resultData signal 
   * in the InvestmentService is updated.
   * You can not set this signal directly.
  */
  results = computed(() => this.investmentService.resultData());
  // result =this.investmentService.resultData.asReadonly; //the same as above

}
