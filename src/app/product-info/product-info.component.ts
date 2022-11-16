import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})


export class ProductInfoComponent implements OnInit {
  productName = "TV";
  test = true;
  productType = ["Type1", "Type2", "Type3"];

  productObj = new Product("Product 1", this.productType[0], "$300");

  productSubmit = new Product("", this.productType[0], "");
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    this.productSubmit.name = f.value.name;
    this.productSubmit.price = f.value.price;
    this.productSubmit.type = f.value.type;
  }
}

export class Product {
  constructor(
    public name: String,
    public type: String,
    public price: String
  ) { }
}
  