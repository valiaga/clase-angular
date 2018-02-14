import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'les-childs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './childs.component.html',
  styleUrls: ['./childs.component.css']
})
export class ChildsComponent implements OnInit {
  @Input() foods: string;
  constructor() { }

  ngOnInit() {
  }

}
