import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateTest2Component } from './ng-template-test-2.component';

describe('NgTemplateTest2Component', () => {
  let component: NgTemplateTest2Component;
  let fixture: ComponentFixture<NgTemplateTest2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTemplateTest2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTemplateTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
