import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private Http:HttpClient) { }


  addProduct(data:product){
  return  this.Http.post('http://localhost:3000/products',data);
  }

  productList(){
    return this.Http.get<product[]>('http://localhost:3000/products');
  }

  deleteProducr(id:number){
return this.Http.delete(`http://localhost:3000/products/${id}`)
  }

  getProduct(id:string){
return this.Http.get<product>(`http://localhost:3000/products/${id}`)
  }

  updateProduct(product:product){
    return this.Http.put<product>(`http://localhost:3000/products/${product.id}`,product)
  }
  popularProduct(){
    return this.Http.get<product>(`http://localhost:3000/products?_limit=3`);
  }

  trendyProduct(){
    return this.Http.get<product>(`http://localhost:3000/products?_limit=8`);
  }

  searchProducts(query:string){
    return this.Http.get<product>(`http://localhost:3000/products?q=${query}`);
  }
}
