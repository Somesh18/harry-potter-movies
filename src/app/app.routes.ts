import { Routes } from '@angular/router';
import { ViewMovieDetailsComponent } from './view-movie-details/view-movie-details.component';
import { ViewMovieListComponent } from './view-movie-list/view-movie-list.component';

export const routes: Routes = [
    {path: '', redirectTo: '/index.html', pathMatch: 'full'},
    {path: 'movies', component: ViewMovieListComponent},
    {path: 'movies/:id', component: ViewMovieDetailsComponent},
    {path: '**', redirectTo: '/index.html', pathMatch: 'full'}
];
