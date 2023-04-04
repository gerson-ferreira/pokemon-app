import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

interface PokemonResult {
  name: string;
  id: number;
  url: string;
}

interface PokemonListResponse {
  count: number;
  next: string;
  previous: string;
  results: PokemonResult[];
}

interface Pokemon {
  name: string;
  id: number | null;
  imageUrl: string;
}


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }


  getPokemonList(offset: number): Observable<Pokemon[]> {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`;
    return this.http.get<PokemonListResponse>(url).pipe(
      map(response => response.results.map(result => this.extractPokemonData(result)))
    );
  }

  private extractPokemonData(result: PokemonResult): Pokemon {
    const id = this.extractIdFromUrl(result.url);
    return {
      name: result.name,
      id: id,
      imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    };
  }

  getPokemonById(id: number | string): Observable<Pokemon> {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return this.http.get(url).pipe(
      map((response: any) => {
        return {
          name: response.name,
          id: response.id,
          imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${response.id}.png`,
          types: response.types.map((type: any) => type.type.name),
          height: response.height / 10,
          weight: response.weight / 10,
          stats: response.stats.map((stat: any) => {
            return {
              name: stat.stat.name,
              value: stat.base_stat
            };
          }),
          abilities: response.abilities.map((ability: any) => ability.ability.name)
        };
      })
    );
  }
  
  private extractIdFromUrl(url: string): number | null {
    const regex = /\/(\d+)\//;
    const matches = url.match(regex);
    return matches ? parseInt(matches[1]) : null;
  }
  
}
