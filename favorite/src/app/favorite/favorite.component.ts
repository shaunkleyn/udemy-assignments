import { Component } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  active: boolean;
  constructor() { }

  onClick() {
    this.active = !this.active;
  }
}
