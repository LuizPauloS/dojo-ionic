import { Hero } from './model/Hero';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class SharedService {

  constructor(private httpClient: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(environment.heroes.all);
  }

  getMoviesLatest(): Observable<any[]> {
    return this.httpClient.get<any[]>(environment.movies.popular);
  }
}
