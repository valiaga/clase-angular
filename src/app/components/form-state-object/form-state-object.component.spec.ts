import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStateObjectComponent } from './form-state-object.component';

describe('FormStateObjectComponent', () => {
  let component: FormStateObjectComponent;
  let fixture: ComponentFixture<FormStateObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormStateObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormStateObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
