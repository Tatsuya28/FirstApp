import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/Product'

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    ProductArray : Product [] = []

    constructor () { }

    ngOnInit(): void {
        this.ProductArray.push(new Product(1, "Rubiks Cube", "This is a Rubik's Cube", 10, "UTBM", "./assets/img/rubikscube.jpeg"))
        this.ProductArray.push(new Product(2, "PC Fixe", "This is a PC", 1000, "WE4A", "./assets/img/pcfixe.jpeg"))
        this.ProductArray.push(new Product(3, "PC Portable", "This is a computer", 500, "WE4B", "./assets/img/pcportable.jpeg"))
        this.ProductArray.push(new Product(4, "Book", "This is a book", 10, "UTBM", "./assets/img/livre.jpeg"))
    }
}
