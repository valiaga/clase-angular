import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLocalVariableComponent } from './form-local-variable.component';

describe('FormLocalVariableComponent', () => {
  let component: FormLocalVariableComponent;
  let fixture: ComponentFixture<FormLocalVariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLocalVariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLocalVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
