import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {

  productData:undefined | product;
  productMassage:undefined | string;

  constructor(private rout :ActivatedRoute , private product:ProductService) { }

  ngOnInit(): void {
    let productId=this.rout.snapshot.paramMap.get('id')
   productId && this.product.getProduct(productId).subscribe((data)=>{
  console.warn(data);
  this.productData=data;
    });

  }

  submit(data:product){
    console.warn(data)
    if(this.productData){
      data.id=this.productData.id;
    }
 this.product.updateProduct(data).subscribe((result)=>{

  if(result){
    this.productMassage="Product has updated"

  }
 });
 setTimeout(()=>{
  this.productMassage=undefined
 },3000)
  }
}
