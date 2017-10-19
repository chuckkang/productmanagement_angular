import { Component, OnInit } from '@angular/core';
import { ProductService} from '../product.service';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
	product: Product = new Product(); // this is the entire product
	id: number;
	title: string;
	price: number;
	imageUrl: string;
	constructor(private _productService: ProductService, private _route: ActivatedRoute) {
		this._route.paramMap.subscribe(params => {
			// console.log(params.get('id'));
			this.product = this._productService.getSingle(params.get('id'));
			this.id = this.product.id;
			this.title = this.product.title;
			this.price = this.product.price;
			this.imageUrl = this.product.imageUrl;
		})
   }

   onsubmit (){
	   this.product.title = this.title;
	   this.product.price = this.price;
	   this.product.imageUrl = this.imageUrl;
	   this._productService.updateSingle(this.product);
   }
  ngOnInit() {
  }

}
