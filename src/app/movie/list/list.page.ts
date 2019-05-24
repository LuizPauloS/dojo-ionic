import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Hero } from './../../shared/model/Hero';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
})
export class ListPage implements OnInit {

  heroes: Hero[];
  moviesLatest: any[];

  constructor(private router: Router,
              private sharedService: SharedService) {}

  ngOnInit() {
    this.heroes = [];
    this.moviesLatest = [];
    // this.getHeroesApi();
    this.getMoviesLatest();
  }

  getHeroesApi() {
    this.sharedService.getHeroes().subscribe(response => {
      this.heroes = response;
    });
  }

  getMoviesLatest() {
    this.sharedService.getMoviesLatest().subscribe((response: any) => {
      this.moviesLatest = response.results;
    });
  }

  alertNameHero(name: string): void {
    alert('HERO ESCOLHIDO ' + name);
  }

  teste(id: number): void {
    console.log('CLICOU NO FILME ' + id);
    //this.router.navigate(['/detail/' + id ]);
  }

}
