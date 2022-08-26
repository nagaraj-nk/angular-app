import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchDepartmensComponent } from './fetch-departmens.component';

describe('FetchDepartmensComponent', () => {
  let component: FetchDepartmensComponent;
  let fixture: ComponentFixture<FetchDepartmensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchDepartmensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FetchDepartmensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
