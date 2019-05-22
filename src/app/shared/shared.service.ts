import { Hero } from './model/Hero';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment, apiKeyV3, portuguesBR } from 'src/environments/environment';

@Injectable()
export class SharedService {

  constructor(private httpClient: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(environment.heroes.all);
  }

  getMoviesLatest(): Observable<any[]> {
    return this.httpClient.get<any[]>(environment.movies.popular);
  }

  findMovieById(id: number): Observable<any> {
    const urlMovie = `${environment.movies.movie}/${id}${apiKeyV3}${portuguesBR}`;
    console.log('URL -> ' + urlMovie);
    return this.httpClient.get<any>(urlMovie);
  }
}
