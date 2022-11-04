import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { CustTabsComponent } from './cust-tabs.component';

describe('CustTabsComponent', () => {
  let component: CustTabsComponent;
  let fixture: ComponentFixture<CustTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustTabsComponent ],
      imports: [ NoopAnimationsModule, FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
