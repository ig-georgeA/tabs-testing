import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { LabelTabComponent } from './label-tab.component';

describe('LabelTabComponent', () => {
  let component: LabelTabComponent;
  let fixture: ComponentFixture<LabelTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelTabComponent ],
      imports: [ NoopAnimationsModule, FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
