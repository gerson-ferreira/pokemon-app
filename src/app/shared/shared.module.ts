import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightFavoriteDirective } from './directives/highlight-favorite.directive';

@NgModule({
  declarations: [HighlightFavoriteDirective],
  imports: [CommonModule],
  exports: [HighlightFavoriteDirective],
})
export class SharedModule {}
