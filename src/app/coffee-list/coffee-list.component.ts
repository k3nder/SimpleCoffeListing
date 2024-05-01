import { Component } from '@angular/core';
import {CoffeesService} from "../coffees.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-coffee-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './coffee-list.component.html',
  styleUrl: './coffee-list.component.css'
})
export class CoffeeListComponent {
  constructor(public CoffeesService: CoffeesService) {
  }
}
