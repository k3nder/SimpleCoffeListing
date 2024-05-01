import { Component } from '@angular/core';
import {CoffeeListComponent} from "../coffee-list/coffee-list.component";

@Component({
  selector: 'app-our-collection-list',
  standalone: true,
  imports: [
    CoffeeListComponent
  ],
  templateUrl: './our-collection-list.component.html',
  styleUrl: './our-collection-list.component.css'
})
export class OurCollectionListComponent {

}
