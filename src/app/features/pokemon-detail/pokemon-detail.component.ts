import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '@app/core/services/pokemon.service';



@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css'],
})
export class PokemonDetailComponent implements OnInit {
  pokemonId?: number;
  pokemon: any;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.pokemonId = Number(id);
      this.getPokemonDetails();
    }
  }

  getPokemonDetails(): void {
    if (this.pokemonId) {
      this.pokemonService.getPokemonById(this.pokemonId).subscribe(
        (data) => {
          this.pokemon = data;
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
  }
}
``
