import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'les-ng-template-test',
  templateUrl: './ng-template-test.component.html',
  styleUrls: ['./ng-template-test.component.css'],
})
export class NgTemplateTestComponent implements OnInit {

  public ctx = { limit: 5 };

  constructor() { }

  ngOnInit() {
  }

}


