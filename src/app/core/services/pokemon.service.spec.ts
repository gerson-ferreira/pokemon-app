import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PokemonService } from './pokemon.service';

describe('PokemonService', () => {
  let service: PokemonService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonService],
    });

    service = TestBed.inject(PokemonService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get pokemons', () => {
    const mockPokemons = {
      count: 1,
      results: [
        {
          name: 'bulbasaur',
          url: 'https://pokeapi.co/api/v2/pokemon/1/',
        },
      ],
    };

    service.getPokemons().subscribe((pokemons) => {
      expect(pokemons).toEqual(mockPokemons);
    });

    const req = httpTestingController.expectOne('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10');
    expect(req.request.method).toEqual('GET');
    req.flush(mockPokemons);
  });

  it('should get pokemon details', () => {
    const mockPokemonDetails = {
      id: 1,
      name: 'bulbasaur',
      height: 7,
      weight: 69,
    };

    service.getPokemonDetails('https://pokeapi.co/api/v2/pokemon/1/').subscribe((pokemonDetails) => {
      expect(pokemonDetails).toEqual(mockPokemonDetails);
    });

    const req = httpTestingController.expectOne('https://pokeapi.co/api/v2/pokemon/1/');
    expect(req.request.method).toEqual('GET');
    req.flush(mockPokemonDetails);
  });
});
