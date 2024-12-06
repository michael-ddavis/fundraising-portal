import { Component, OnInit } from '@angular/core';
import { FundSummary } from '../../models/FundSummary';
import { TableItemComponent } from '../table-item/table-item.component';
import { NgFor } from '@angular/common';
import { Funds } from '../../models/Funds';

@Component({
    selector: '[dashboard-table]',
    templateUrl: './table.component.html',
    standalone: true,
    imports: [NgFor, TableItemComponent],
})
export class TableComponent implements OnInit {
  public individualFunds: Funds[] = [];

  constructor() {
    this.individualFunds = [
      {
        name: 'User',
        amount: 250,
        dateGiven: 'January 1st, 2025',
        fundType: 'recurring',
        status: 'pending'
      },
      {
        name: 'User',
        amount: 250,
        dateGiven: 'January 1st, 2025',
        fundType: 'recurring',
        status: 'pending'
      },
      {
        name: 'User',
        amount: 250,
        dateGiven: 'January 1st, 2025',
        fundType: 'recurring',
        status: 'pending'
      },
      {
        name: 'User',
        amount: 250,
        dateGiven: 'January 1st, 2025',
        fundType: 'recurring',
        status: 'pending'
      },
    ];
  }

  ngOnInit(): void {}
}
