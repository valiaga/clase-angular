import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'les-ng-template-test-3',
  templateUrl: './ng-template-test-3.component.html',
  styleUrls: ['./ng-template-test-3.component.css']
})
export class NgTemplateTest3Component implements OnInit {
  mode = 'list';
  items = [
    {
      header: 'Creating Reuseable Components with NgTemplateOutlet in Angular',
      content: 'The single responsibility principle...'
    } // ... more items
  ];

  constructor() { }

  ngOnInit() {
  }


}
