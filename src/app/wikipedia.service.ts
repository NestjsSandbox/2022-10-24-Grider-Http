import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pluck } from 'rxjs';

interface WikipediaResponse{
  query: {
    search: [{
      title: string,
      pageid: number,
      snippet: string,
    }]
  }
}

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor(private httpClient: HttpClient) {}

  search(serviceSearchTerm: string) {
    const wikipediaHeaderUrl = 'https://en.wikipedia.org/w/api.php';
    return this.httpClient
    .get<WikipediaResponse>(wikipediaHeaderUrl, {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: serviceSearchTerm,
        origin: '*',
      },
    })
    // The pluck operator is deprectaed .pipe( pluck('query','search') );
    .pipe( map(x => x?.query?.search) );
  }
}
