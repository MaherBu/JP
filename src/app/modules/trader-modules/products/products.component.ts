import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { ProductItem } from 'src/app/models/productItem.model';
import { products } from 'src/app/models/static-data/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = products;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  editProduct(product: ProductItem): void {
    console.log(product);
    this.router.navigateByUrl(`/pages/update-product/${product.id}`).then();
   // this.router.navigateByUrl('/pages/update-product/' + product.id).then();
  }

  removeProduct(id: number): void {
    const idx = this.products.findIndex((item) => item.id === id);
    this.products.splice(idx, 1);
  }
}
