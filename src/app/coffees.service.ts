import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoffeesService {
  coffees: {id: number; name: string, image: string, price: string, rating: number, votes: number, popular: boolean, available: boolean}[] = [];
  constructor() {
    fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json").then(response => response.json())
      .then(data => {
        this.coffees = data;
      })
      .catch(error => {
        console.log(error)
      })
  }
}
