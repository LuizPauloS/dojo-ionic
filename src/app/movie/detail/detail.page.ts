import { SharedService } from './../../shared/shared.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
})
export class DetailPage implements OnInit {

  movie: any = {};

  constructor(private sharedService: SharedService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.initMovieById();
  }

  initMovieById(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.sharedService.findMovieById(id).subscribe(response => {
      this.movie = response;
      console.log('Filme encontrado');
      console.log(response);
    });
  }

}
