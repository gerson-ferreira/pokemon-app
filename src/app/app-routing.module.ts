import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'pokemon-list',
    loadChildren: () =>
      import('./features/pokemon-list/pokemon-list.module').then(
        (m) => m.PokemonListModule
      ),
  },
  {
    path: 'pokemon/:id',
    loadChildren: () =>
      import('./features/pokemon-detail/pokemon-detail.module').then(
        (m) => m.PokemonDetailModule
      ),
  },
  {
    path: '',
    redirectTo: '/pokemon-list',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
