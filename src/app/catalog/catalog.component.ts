import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/item';
import { ITEMS } from '../shared/items';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  titleCatalog = 'Catalog';

  items = ITEMS;

  selectedItem: Item = null as any;

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

  ngOnInit(): void {}

  onSelect(item: Item) {
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
