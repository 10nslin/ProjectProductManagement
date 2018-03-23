import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

products =[];

  constructor(private _productService: ProductsService) {
    this.products = this._productService.products;
  }

  ngOnInit() {
  }
  deleteProduct(product) {
    const idx = this.products.indexOf(product);
    this.products.splice(idx, 1);
  }

}
