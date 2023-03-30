import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {

  productList:undefined | product[]
  productMassage:undefined|string;
  constructor(private product:ProductService) { }

  ngOnInit(): void {
this.list();
  }

  deleteProducr(id:number){
this.product.deleteProducr(id).subscribe((result)=>{
  if(result){
this.productMassage="Product is deleted";
this.list();
  }
})

setTimeout(()=>{this.productMassage=undefined},3000);
  }

  list(){
    this.product.productList().subscribe((result)=>{
      console.warn(result)
      this.productList=result;
    })
  }

}
