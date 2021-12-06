import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/item';
import { ITEMS } from '../shared/items';
import * as _ from 'lodash';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  titleCatalog = 'Catalog';

  titleCategory = 'Category';

  items = ITEMS;

  selectedItem: Item = null as any;

  sortByAllCategory = _.sortBy(this.items, ['category']);

  sortByUniqCategory = _.uniqBy(this.sortByAllCategory, 'category');

  groupBy = _.groupBy(this.sortByAllCategory, 'category');
  // selectedItem: Item = this.items[0];

  // items: Item[] = [
  //   {
  //     id: '0',
  //     name: 'Item A-1',
  //     image: '../assets/images/A/A-1.png',
  //     category: 'A',
  //     featured: true,
  //     label: 'L-1',
  //     price: '4.99',
  //     description: 'Lorem20',
  //   },
  //   {
  //     id: '0',
  //     name: 'Item A-1',
  //     image: '../assets/images/A/A-1.png',
  //     category: 'A',
  //     featured: true,
  //     label: 'L-1',
  //     price: '4.99',
  //     description: 'Lorem20',
  //   },
  //   {
  //     id: '0',
  //     name: 'Item A-1',
  //     image: '../assets/images/A/A-1.png',
  //     category: 'A',
  //     featured: true,
  //     label: 'L-1',
  //     price: '4.99',
  //     description: 'Lorem20',
  //   },
  //   {
  //     id: '0',
  //     name: 'Item A-1',
  //     image: '../assets/images/A/A-1.png',
  //     category: 'A',
  //     featured: true,
  //     label: 'L-1',
  //     price: '4.99',
  //     description: 'Lorem20',
  //   },
  //   {
  //     id: '0',
  //     name: 'Item A-1',
  //     image: '../assets/images/A/A-1.png',
  //     category: 'A',
  //     featured: true,
  //     label: 'L-1',
  //     price: '4.99',
  //     description: 'Lorem20',
  //   },
  // ];

  constructor() {}

  ngOnInit() {
    const sortBy1 = _.sortBy(this.items, ['category']);
    console.log(sortBy1);

    const sortBy2 = _.uniqBy(sortBy1, 'category');
    console.log(sortBy2);

    const groupBy2 = _.groupBy(sortBy1, 'category');
    console.log(groupBy2);
  }

  onSelect(item: Item) {
    this.selectedItem = item;
  }

  onSelectCategory(item: Item) {
    this.selectedItem = item;
  }

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
