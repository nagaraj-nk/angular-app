import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessErrorAlertsComponent } from './success-error-alerts.component';

describe('SuccessErrorAlertsComponent', () => {
  let component: SuccessErrorAlertsComponent;
  let fixture: ComponentFixture<SuccessErrorAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessErrorAlertsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessErrorAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
