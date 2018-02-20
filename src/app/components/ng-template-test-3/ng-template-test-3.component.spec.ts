import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateTest3Component } from './ng-template-test-3.component';

describe('NgTemplateTest3Component', () => {
  let component: NgTemplateTest3Component;
  let fixture: ComponentFixture<NgTemplateTest3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTemplateTest3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTemplateTest3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
