import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { PokemonFilterComponent } from './features/pokemon-filter/pokemon-filter.component';
import { PokemonCommentsComponent } from './features/pokemon-comments/pokemon-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonFilterComponent,
    PokemonCommentsComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
