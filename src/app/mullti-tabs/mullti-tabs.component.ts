import { Component, OnInit } from '@angular/core';
import { NorthwindService } from '../services/northwind.service';
import { FinancialService } from '../services/financial.service';

@Component({
  selector: 'app-mullti-tabs',
  templateUrl: './mullti-tabs.component.html',
  styleUrls: ['./mullti-tabs.component.scss']
})
export class MulltiTabsComponent implements OnInit {
  public northwindEmployees: any = null;
  public northwindCategories: any = null;
  public financialBoxOfficeRevenue: any = null;

  constructor(
    private northwindService: NorthwindService,
    private financialService: FinancialService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindService.getData('Employees').subscribe(data => this.northwindEmployees = data);
    this.northwindService.getData('Categories').subscribe(data => this.northwindCategories = data);
    this.financialService.getData('BoxOfficeRevenue').subscribe(data => this.financialBoxOfficeRevenue = data);
  }
}
