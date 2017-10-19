import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	allproducts: Product[];

  constructor(private _productService: ProductService) {
	this.allproducts = this._productService.getProducts();
   }

  ngOnInit() {
  }

}
