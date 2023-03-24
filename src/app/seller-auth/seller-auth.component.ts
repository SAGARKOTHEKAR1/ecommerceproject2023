import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {

  constructor() { }
  showLogin=false



  ngOnInit(): void {
  }
  signUp(data:object): void {
console.log(data)
  }

  openLogin(){
    this.showLogin=true

  }

  openSignUp(){
    this.showLogin=false
  }

}
