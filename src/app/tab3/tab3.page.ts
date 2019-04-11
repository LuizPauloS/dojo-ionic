import { SharedService } from './../shared/shared.service';
import { Component, OnInit } from '@angular/core';

import { Hero } from './../shared/model/Hero';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  heroes: Hero[];

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.heroes = [];
    this.getHeroesApi();
  }

  getHeroesApi() {
    this.sharedService.getHeroes().subscribe(response => {
      this.heroes = response;
    });
  }

  alertNameHero(name: string): void {
    alert('HERO ESCOLHIDO ' + name);
  }
}
