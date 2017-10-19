import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	allproducts: Product[];

	constructor(private _productService: ProductService) {
		this.allproducts = this._productService.getProducts();
	}

	ngOnInit() {
	}

}