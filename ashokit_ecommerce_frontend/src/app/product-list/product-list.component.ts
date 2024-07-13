import { Component, OnInit } from '@angular/core';
import{ProductService}from '../service/product.service'
import { Product } from '../common/product';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
   products:Product[]=[];

  constructor(private ProductService:ProductService){}

  ngOnInit(): void {
    this.getProducts();
}



  getProducts()
  {
    this.ProductService.getProducts().subscribe(data =>{
      //console.log(data);
      this.products=data;
  
      })
  }


}
