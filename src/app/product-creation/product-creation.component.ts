import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.css'],

})
export class ProductCreationComponent implements OnInit {

product: Product = new Product();
  constructor(private _productService: ProductsService, private _router: Router) {

   }

  ngOnInit() {

  }

  onSubmit(event){

    this._productService.add(this.product);
    event.preventDefault();
    console.log(this.product);
    this.product = new Product ();
    this._router.navigateByUrl('products');
  }

}
