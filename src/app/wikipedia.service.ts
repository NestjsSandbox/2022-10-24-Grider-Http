import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor( private httpClient: HttpClient) { }

  search(serviceSearchTerm: string){
    const wikipediaHeaderUrl = 'https://en.wikipedia.org/w/api.php';
    return this.httpClient.get(wikipediaHeaderUrl,{
      params:{
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: serviceSearchTerm,
        origin: '*',
      }
    });
  }
}
