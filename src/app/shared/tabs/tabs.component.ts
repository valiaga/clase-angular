import { Component, OnInit, Directive, TemplateRef, Input, ContentChild } from '@angular/core';

@Directive({
  selector: '[lesTabTitle]',
})
export class LesTabTitleDirective {
  constructor(private templateRef: TemplateRef<any>) { }
}

@Directive({
  selector: '[lesTabContent]',
})
export class LesTabContentDirective {
  constructor(private templateRef: TemplateRef<any>) { }
}

let nextId = 0;

@Directive({
  selector: '[lesTab]'
})
export class LesTabDirective {

  @Input() id = `les-tab-${nextId++}`;

  @Input() title: string;

  @Input() disabled = false;

  @ContentChild(LesTabContentDirective) contentTemplate: LesTabContentDirective;
  @ContentChild(LesTabTitleDirective) titleTemplate: LesTabTitleDirective;

}

@Component({
  selector: 'les-tab-group',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class LesTabGroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
