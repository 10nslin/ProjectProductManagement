import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
id;
product = [];
  constructor(private _productsService: ProductsService, private _router: Router, private _route: ActivatedRoute) {
    this._route.paramMap.subscribe(params => {
			this.id = params.get('id');
			this.product =_productsService.products[this.id];
		})
  }

  ngOnInit() {
  }
  update(){
		this._productsService.update(this.id, this.product);
		this._router.navigateByUrl('products');
  }
  deleteProduct(product) {
    const idx = this.product.indexOf(product);
    this.product.splice(idx, 1);
    this._router.navigateByUrl('products');
  }


}
