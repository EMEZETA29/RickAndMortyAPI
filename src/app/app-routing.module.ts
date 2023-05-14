import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './pages/home/home.component';
// import { MovieComponent } from './pages/movie/movie.component';

const routes: Routes = 
[
  {
    path:"",
    redirectTo: "home",
    pathMatch: "full"
    // component:HomeComponent
  },

  {
    path: 'home',
    loadChildren: () =>
      import('./components/pages/home/home.module').then((m) => m.HomeModule),
  },

  {
    path: 'character-list',
    loadChildren: () =>
      import(
        './components/pages/characters/character-list/character-list.module'
      ).then((m) => m.CharacterListModule),
  },

  {
    path: 'character-details/:id',
    loadChildren: () =>
      import(
        './components/pages/characters/character-details/character-details.module'
      ).then((m) => m.CharacterDetailsModule),
  },
];

  // {
  //   path:"movie/:id",
  //   // component:MovieComponent
  // }


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
