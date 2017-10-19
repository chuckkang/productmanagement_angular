import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Product } from './product';
@Injectable()
export class ProductService {
	allproducts: Array<Product>=[];
  constructor() {
	this.createInitial();
  }

  getProducts(){
	  return this.allproducts;
  }
  
  getSingle(productId){
	  var idx: number;
	  for (let x=0; x < this.allproducts.length; x++){
		if (this.allproducts[x].id==productId){
			idx = x;
			break;
		}
	  }
	// console.log(this.allproducts[idx], "-this is the single product")
	return this.allproducts[idx];
  }
  updateSingle(updatedProduct: Product){
	  var idx = this.allproducts.indexOf(updatedProduct);
	  this.allproducts[idx].title = updatedProduct.title;
	  this.allproducts[idx].price = updatedProduct.price;
	  this.allproducts[idx].imageUrl = updatedProduct.imageUrl;
  }
  addNew(product){
	  this.allproducts.push(product);
	  console.log(this.allproducts);
  }

  deleteSingle(deleteProduct: Product){
	  console.log(this.allproducts, "THIS IS THE DELETE")
	  var idx = this.allproducts.indexOf(deleteProduct);
	  console.log(idx)
	  this.allproducts.splice(idx, 1);
	  console.log(this.allproducts, "THIS IS THE DELETE")
  }
  createInitial(){
	 var initialproduct = new Product();
	 initialproduct.id = 1;
	 initialproduct.title="motoboat";
	 initialproduct.price = 100.00;
	 initialproduct.imageUrl = "website";
	 this.allproducts.push(initialproduct);
	  initialproduct = new Product();
	  initialproduct.id = 2;
	 initialproduct.title = "car";
	 initialproduct.price = 1000.00;
	 initialproduct.imageUrl = "website 2";
	 this.allproducts.push(initialproduct);
	  initialproduct = new Product();
	  initialproduct.id = 3;
	 initialproduct.title = "laptop";
	 initialproduct.price = 500.00;
	 initialproduct.imageUrl = "website 3";
	 this.allproducts.push(initialproduct);

  }
}
