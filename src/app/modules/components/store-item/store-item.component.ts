import { Component, Input, OnInit } from '@angular/core';
import { StoreItem } from 'src/app/models/storeitem.model';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css']
})
export class StoreItemComponent implements OnInit {
  @Input() item: StoreItem;

  constructor() { }

  ngOnInit(): void {
  }

}
