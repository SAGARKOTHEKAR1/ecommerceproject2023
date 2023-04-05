import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { cart, product } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  cartData= new EventEmitter<product []|[]>();


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

  localAddToCart(data:product){
  let cartData = [];
  let localCart = localStorage.getItem('localCart');
  if(!localCart){
    localStorage.setItem('localCart',JSON.stringify([data]));

  }else{
    cartData=JSON.parse(localCart);
    cartData.push(data)
    localStorage.setItem('localCart',JSON.stringify(cartData));
  }
  this.cartData.emit(cartData);
  }

  removeItemFormCart(productId:number){
    let cartData= localStorage.getItem('localCart');
    if(cartData){
let items:product[]=JSON.parse(cartData);
items = items.filter((item:product)=>productId!==item.id
)

localStorage.setItem('localCart',JSON.stringify(items));
this.cartData.emit(items);

}
    }
    addToCart(cartData:cart){
   return   this.Http.post('http://localhost:3000/cart',cartData);
    }
  }

