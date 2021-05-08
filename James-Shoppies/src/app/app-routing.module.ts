import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponentComponent } from './movies-component/movies-component.component';
import { SearchComponentComponent } from './search-component/search-component.component';

const routes: Routes = [
  {path: '', component: SearchComponentComponent,
    children: [{
      path: '', component: MoviesComponentComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
