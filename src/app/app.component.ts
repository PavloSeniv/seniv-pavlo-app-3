import { Component } from '@angular/core';
import { Dish } from 'src/shared/dish';
import * as _ from 'lodash';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'seniv-pavlo-app-3';
  dishes: Dish[] = [];
  filtredDishes: Dish[] = [];
  groups: any[] = [];

  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit() {
    this.spinner.show();

    for (let i = 1; i < 10; i++) {
      let dish = {
        id: i,
        name: 'Item ' + i,
        image: 'https://picsum.photos/600/430',
        description:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.',
        weight: i * Math.floor(Math.random() * 12),
        category: 'Category ' + (1 + Math.floor(Math.random() * 4)),
        price: i * Math.floor(Math.random() * 22),
      };
      this.dishes.push(dish);
    }

    this.groups = _(this.dishes)
      .groupBy((x) => x.category)
      .map((value, key) => ({ category: key, dishes: value }))
      .value();

    setTimeout(() => {
      this.filtredDishes = this.dishes;
      this.spinner.hide();
    }, 2000);
  }

  filterDishes(dishes: Dish[]) {
    this.spinner.show();

    setTimeout(() => {
      this.filtredDishes = dishes;
      this.spinner.hide();
    }, 1500);
  }
}
