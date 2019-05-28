import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { SharedService } from './../../shared/shared.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
})
export class DetailPage implements OnInit {

  movie: any = {};

  constructor(private sharedService: SharedService,
              private activatedRoute: ActivatedRoute) { 
                this.movie = this.activatedRoute.snapshot.data['movieDetail'];
              }

  ngOnInit() {
    //this.initMovieById();
  }

  initMovieById(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.sharedService.findMovieById(id).subscribe(response => {
      this.movie = response;
      console.log('Filme encontrado');
      console.log(response);
    }, err => {
      console.error('ERRO: ' + err);
    });
  }

}
