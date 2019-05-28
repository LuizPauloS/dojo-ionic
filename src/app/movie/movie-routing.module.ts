import { MovieResolverService } from './movie-resolver.service';
import { Routes } from '@angular/router';

import { NewPage } from './new/new.page';
import { ListPage } from './list/list.page';
import { DetailPage } from './detail/detail.page';

export const MovieRoutes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'new', component: NewPage },
    { path: 'list', component: ListPage },
    { path: 'detail/:id', component: DetailPage, resolve: { movieDetail: MovieResolverService } }
];