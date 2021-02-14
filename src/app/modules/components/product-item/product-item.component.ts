import {Component, Input, OnInit, Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ProductItem } from 'src/app/models/productItem.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() item: ProductItem;
  @Output() removed = new EventEmitter<any>();
  @Output() edit = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  editItem(): void {
    this.edit.emit('edit');
  }

  delete(): void {
    this.removed.emit('removed');
  }
}
