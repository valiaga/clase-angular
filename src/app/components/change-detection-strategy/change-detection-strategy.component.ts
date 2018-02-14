import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'les-change-detection-strategy',
  templateUrl: './change-detection-strategy.component.html',
  styleUrls: ['./change-detection-strategy.component.css']
})
export class ChangeDetectionStrategyComponent implements OnInit {
  public foods = [
    'Leche',
    'Pan',
    'Arroz',
  ];

  constructor() { }

  ngOnInit() {
  }

  addFood(food: string) {
    this.foods = [...this.foods, food];
  }

}
