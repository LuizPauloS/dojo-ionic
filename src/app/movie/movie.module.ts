import { NewPage } from './new/new.page';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ListPage } from './list/list.page';
import { MovieRoutes } from './movie-routing.module';
import { DetailPage } from './detail/detail.page';

@NgModule({
  declarations: [
    NewPage,
    DetailPage,
    ListPage
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(MovieRoutes)
  ],
})
export class MovieModule { }
