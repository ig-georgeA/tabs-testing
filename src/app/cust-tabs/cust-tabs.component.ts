import { Component, OnInit } from '@angular/core';
import { NorthwindService } from '../services/northwind.service';
import { FinancialService } from '../services/financial.service';

@Component({
  selector: 'app-cust-tabs',
  templateUrl: './cust-tabs.component.html',
  styleUrls: ['./cust-tabs.component.scss']
})
export class CustTabsComponent implements OnInit {
  public northwindEmployees: any = null;
  public financialBoxOfficeRevenue: any = null;

  constructor(
    private northwindService: NorthwindService,
    private financialService: FinancialService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('Employees').subscribe(data => this.northwindEmployees = data);
    this.financialService.getData('BoxOfficeRevenue').subscribe(data => this.financialBoxOfficeRevenue = data);
  }
}
