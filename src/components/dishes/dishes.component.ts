import { Component, Input, OnInit } from '@angular/core';
import { Dish } from 'src/shared/dish';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss'],
})
export class DishesComponent implements OnInit {
  catalogTitle = 'Catalog';

  @Input() dishes: Dish[] = [];

  constructor() {}

  ngOnInit() {}
  // Для адаптиву cols(tsconfig.json додано рядок "noImplicitAny": false,)
  colAadaptive: any = 3;
  onResize(event) {
    const element = event.target.innerWidth;
    console.log(element);

    if (element < 950) {
      this.colAadaptive = 2;
    }

    if (element > 950) {
      this.colAadaptive = 3;
    }

    if (element < 750) {
      this.colAadaptive = 1;
    }
  }
}
