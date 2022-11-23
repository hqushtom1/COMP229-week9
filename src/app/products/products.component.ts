import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private dataManger: DataManagerService) { }

  products: any;

  ngOnInit(): void {
    this.dataManger.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

}
