import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private api: ApiService, private cartService:CartService) { }
  public productList:any;

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.productList=res;

      this.productList.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price})
      })
    })
  }
addToCart(x:any){
this.cartService.addToCart(x);
}
}
