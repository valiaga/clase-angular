import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerTest3Component } from './container-test3.component';

describe('ContainerTest3Component', () => {
  let component: ContainerTest3Component;
  let fixture: ComponentFixture<ContainerTest3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerTest3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerTest3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
