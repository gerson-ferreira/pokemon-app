import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Pokemon } from 'src/app/shared/models/pokemon.model';

interface PokemonResponse {
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }


  getPokemons(offset: number = 0, limit: number = 10): Observable<Pokemon[]> {
    return this.http.get<any>(`${this.apiUrl}/pokemon?offset=${offset}&limit=${limit}`)
      .pipe(
        map(response => {
          return response.results.map((pokemon: PokemonResponse) => {
            return {
              name: pokemon.name,
              url: pokemon.url
            } as unknown as Pokemon;
          });
        })
      );
  }

  getPokemonDetails(url: string): Observable<any> {
    return this.http.get(url);
  }
}
