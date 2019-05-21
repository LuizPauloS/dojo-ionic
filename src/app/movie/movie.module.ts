import { DetailPage } from './detail/detail.page';
import { ListPage } from './list/list.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DetailPage,
    ListPage
  ],
  imports: [
    CommonModule
  ],
})
export class MovieModule { }
