import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  foundPagesParent: any[] = []; //Not good practice to use 'any'
  constructor(private wikipediaService: WikipediaService) {}

  onSearchTerm(appSearchTerm: string) {
    //Not good practice to use 'any'
    this.wikipediaService.search(appSearchTerm).subscribe( (response: any) => {
      this.foundPagesParent = response.query.search;
    });
  }
}
