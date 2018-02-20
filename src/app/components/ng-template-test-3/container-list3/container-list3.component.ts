import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';
import { Card3Directive } from '../card3.directive';
import { List3Directive } from '../list3.directive';

@Component({
  selector: 'les-container-list3',
  templateUrl: './container-list3.component.html',
  styleUrls: ['./container-list3.component.css']
})
export class ContainerList3Component implements OnInit {
  @Input() items: any[] = [];

  @Input() mode: 'card' | 'list' = 'card';

  @ContentChild(Card3Directive, {read: TemplateRef}) cardTemplate;
  @ContentChild(List3Directive, {read: TemplateRef}) listTemplate;

  constructor() { }

  ngOnInit() {
  }


}
