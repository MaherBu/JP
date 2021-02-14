import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-create-store',
  templateUrl: './create-store.component.html',
  styleUrls: ['./create-store.component.css']
})
export class CreateStoreComponent implements OnInit {
  themes = new FormControl();
  themesList: string[] = ['Dark Blue', 'Green', 'Blue', 'Light', 'Dark', 'Pink'];
  products = new FormControl();
  productsList: string[] = ['Beats Headphones', 'Iphone 7 Case', 'Iphone 7 Case'];
  constructor() { }

  ngOnInit(): void {
  }

}
