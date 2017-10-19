import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
	message: string;

  constructor(private _productService: ProductService, private _activatedRoute: ActivatedRoute) {
	  this._activatedRoute.paramMap.subscribe(params => {
		  for(let idx=0; idx<this._productService.allproducts.length;idx++){
			  if (this._productService.allproducts[idx].id == parseInt(params.get('id'))){
				  this._productService.deleteSingle(this._productService.allproducts[idx]);
				  this.message = "Your item has been deleted";
			  }
		  }
		  
	  })
   }

  ngOnInit() {
  }

}
