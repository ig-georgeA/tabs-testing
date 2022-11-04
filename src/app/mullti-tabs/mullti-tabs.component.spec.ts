import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MulltiTabsComponent } from './mullti-tabs.component';

describe('MulltiTabsComponent', () => {
  let component: MulltiTabsComponent;
  let fixture: ComponentFixture<MulltiTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MulltiTabsComponent ],
      imports: [ NoopAnimationsModule, FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MulltiTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
