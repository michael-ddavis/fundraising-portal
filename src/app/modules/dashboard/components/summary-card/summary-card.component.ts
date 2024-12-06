import { Component, Input, OnInit } from '@angular/core';
import { FundSummary } from '../../models/FundSummary';
import { NgStyle, CurrencyPipe } from '@angular/common';

@Component({
    selector: '[summary-card]',
    templateUrl: './summary-card.component.html',
    standalone: true,
    imports: [NgStyle, CurrencyPipe],
})
export class SummaryCardComponent implements OnInit {
  @Input() fundSummary: FundSummary = <FundSummary>{};

  constructor() {}

  ngOnInit(): void {}
}
