import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'les-ng-template-test-2',
  templateUrl: './ng-template-test-2.component.html',
  styleUrls: ['./ng-template-test-2.component.css']
})
export class NgTemplateTest2Component implements OnInit {

  @ViewChild('miTemplate') miTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
   }
}
