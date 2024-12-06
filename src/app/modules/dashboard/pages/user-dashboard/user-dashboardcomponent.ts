import { Component, OnInit } from '@angular/core';
import { FundSummary } from '../../models/FundSummary';
import { TableComponent } from '../../components/table/table.component';
import { SummaryCardComponent } from '../../components/summary-card/summary-card.component';
import { DashboardHeaderComponent } from '../../components/dashboard-header/dashboard-header.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './user-dashboard.component.html',
    standalone: true,
    imports: [
        DashboardHeaderComponent,
        SummaryCardComponent,
        TableComponent,
    ],
})
export class UserDashboardComponent implements OnInit {
  funds: Array<FundSummary>;
  today = new Date(); 
  thisWeek = this.startAndEndOfWeek(this.today)
  weekStart = this.thisWeek[0]
  weekEnd = this.thisWeek[1]
  month = this.thisWeek[2]

  constructor() {
    this.funds = [
      {
        title: 'This Week\'s Donations',
        amount: 250,
        date: `${this.weekStart} - ${this.weekEnd}`
      },
      {
        title: 'This Month\'s Donations',
        amount: 2500,
        date: `${this.month}`
      },
    ];
  }

  startAndEndOfWeek(date: any) {
    // If no date object supplied, use current date
    // Copy date so don't modify supplied date
    var now = date? new Date(date) : new Date();
  
    // set time to some convenient value
    now.setHours(0,0,0,0);
  
    // Get the previous Monday
    var monday = new Date(now);
    monday.setDate(monday.getDate() - monday.getDay() + 1);
    const formattedMonday = monday.toLocaleDateString('en-US', {
      month: 'long',
      day: '2-digit'
    });

    // Get next Sunday
    var sunday = new Date(now);
    sunday.setDate(sunday.getDate() - sunday.getDay() + 7);
    const formattedSunday = sunday.toLocaleDateString('en-US', {
      month: 'long',
      day: '2-digit'
    });

    const formattedMonthYear = now.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric'
    });
    
    // Return array of date objects
    return [formattedMonday, formattedSunday, formattedMonthYear];
  }

  ngOnInit(): void {}
}
