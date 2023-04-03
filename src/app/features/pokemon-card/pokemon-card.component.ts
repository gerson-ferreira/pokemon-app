import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {
  @Input()
  pokemon!: Pokemon;
  @Output() toggleFavorite = new EventEmitter<Pokemon>();

  onToggleFavorite(): void {
    this.toggleFavorite.emit(this.pokemon);
  }
}
