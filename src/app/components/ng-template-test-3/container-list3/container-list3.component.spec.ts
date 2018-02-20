import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerList3Component } from './container-list3.component';

describe('ContainerList3Component', () => {
  let component: ContainerList3Component;
  let fixture: ComponentFixture<ContainerList3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerList3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerList3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
