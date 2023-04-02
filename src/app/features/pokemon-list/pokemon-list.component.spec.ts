import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { PokemonListComponent } from './pokemon-list.component';
import { PokemonService } from '@app/core/services/pokemon.service';
import { Pokemon } from 'src/app/shared/models/pokemon.model';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { toggleFavorite } from '@store/actions';

describe('PokemonListComponent', () => {
  let component: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  let pokemonService: PokemonService;
  let store: Store;

  const mockPokemons: Pokemon[] = [
    { id: 1, name: 'Bulbasaur', favorite: false },
    { id: 2, name: 'Ivysaur', favorite: false },
  ];

  beforeEach(async () => {
    const pokemonServiceSpy = {
      getPokemons: jest.fn().mockReturnValue(of(mockPokemons)),
    };

    const storeSpy = {
      select: jest.fn().mockReturnValue(of([])),
      dispatch: jest.fn(),
    };

    await TestBed.configureTestingModule({
      declarations: [PokemonListComponent],
      providers: [
        { provide: PokemonService, useValue: pokemonServiceSpy },
        { provide: Store, useValue: storeSpy },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    pokemonService = TestBed.inject(PokemonService);
    store = TestBed.inject(Store);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with pokemons from service', () => {
    component.pokemons$.subscribe(pokemons => {
      expect(pokemons).toEqual(mockPokemons);
    });
  });

  it('should call store.dispatch when toggling a favorite', () => {
    const pokemon = mockPokemons[0];
    component.toggleFavorite(pokemon);
    expect(store.dispatch).toHaveBeenCalledWith(toggleFavorite({ pokemon }));
  });

  it('should filter pokemons based on filter value', (done) => {
    component.onFilterValueChange('Ivysaur');
    component.filteredPokemons$.subscribe(filteredPokemons => {
      expect(filteredPokemons).toEqual([mockPokemons[1]]);
      done();
    });
  });
});
