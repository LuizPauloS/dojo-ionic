import { SharedService } from './../shared/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  movies: Array<any>;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.movies = [];
    this.getListMoviesApi();
  }

  getListMoviesApi(): void {
    this.sharedService.getMoviesLatest().subscribe((response: any) => {
      this.movies = response.results;
    });
  }

}
