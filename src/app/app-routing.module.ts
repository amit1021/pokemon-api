import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from '../app/favorites/favorites.component';

import { Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  { path:'favorites', component:FavoritesComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
