import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateTestComponent } from './ng-template-test.component';

describe('NgTemplateTestComponent', () => {
  let component: NgTemplateTestComponent;
  let fixture: ComponentFixture<NgTemplateTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTemplateTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTemplateTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
