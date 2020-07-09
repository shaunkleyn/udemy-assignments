import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authors',
  template: `
  <h2>{{authors.length}} Authors</h2>
  <ul>
  <li *ngFor="let author of authors">
    {{author}}
  </li>
  </ul>`
})
export class AuthorsComponent implements OnInit {
 authors: string[];
  constructor(service: AuthorsService) { 
    this.authors = service.getAuthors();
  }

  ngOnInit(): void {
  }
}
