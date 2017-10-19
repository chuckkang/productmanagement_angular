import { Component, OnInit } from '@angular/core';
import { Product } from './../product';
import { ProductService } from "./../product.service";
import {Router} from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

	product: Product= new Product(); // this is the entire product
	title: string;
	price: number;
	imageUrl: string;
  constructor(private _productService: ProductService, private _router: Router) {
	  	
  }
  onsubmit(){
	  this.product.id = this._productService.allproducts[(this._productService.allproducts.length-1)].id + 1
	  this.product.title = this.title;
	  this.product.price = this.price;
	  this.product.imageUrl = this.imageUrl;
	  //console.log(this._productService.allproducts, "THis i sall the products")
	  this._productService.addNew(this.product);
	  this.product = new Product();
	  this.title='';
	  this.price = null;
	  this.imageUrl = '';

	  //redirect
	  this._router.navigate(['/'])

  }
  ngOnInit() {
  }

}
