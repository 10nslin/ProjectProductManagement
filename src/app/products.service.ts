import { Injectable } from '@angular/core';


@Injectable()
export class ProductsService {
products = [];
  constructor() { }

	add(product){
		this.products.push(product);
  }


  update(id, product){
		this.products[id]= product;
	}
}

