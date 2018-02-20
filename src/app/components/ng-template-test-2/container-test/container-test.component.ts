import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'les-container-test',
  templateUrl: './container-test.component.html',
  styleUrls: ['./container-test.component.css']
})
export class ContainerTestComponent implements OnInit {

  @Input() miTemplate: TemplateRef<any>;
  constructor() { }

  ngOnInit() {
  }

}
