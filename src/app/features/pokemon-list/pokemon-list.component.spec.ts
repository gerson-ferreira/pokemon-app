import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Pokemon } from '@app/shared/models/pokemon.model';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PokemonListComponent } from './pokemon-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';



describe('PokemonCardComponent', () => {
  let component: PokemonCardComponent;
  let fixture: ComponentFixture<PokemonCardComponent>;

  const pokemon: Pokemon = {
    id: 1,
    name: 'Bulbasaur',
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonListComponent, PokemonCardComponent],
      imports: [HttpClientTestingModule, RouterModule.forRoot([])],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.componentInstance;
    component.pokemon = pokemon;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display pokemon name', () => {
    const nameEl = fixture.debugElement.query(By.css('.card-header')).nativeElement;
    expect(nameEl.textContent).toContain(pokemon.name);
  });

  it('should display pokemon image', () => {
    const imgEl = fixture.debugElement.query(By.css('.card-img-top')).nativeElement;
    expect(imgEl.src).toBe(pokemon.imageUrl);
  });

  it('should display pokemon id', () => {
    const idEl = fixture.debugElement.query(By.css('.card-text')).nativeElement;
    expect(idEl.textContent).toContain(`ID: ${pokemon.id}`);
  });

  it('should display pokemon types', () => {
    const typesEl = fixture.debugElement.query(By.css('.text-muted')).nativeElement;

  });

  it('should not display water type', () => {

    fixture.detectChanges();
    const typesEl = fixture.debugElement.query(By.css('.text-muted')).nativeElement;
    expect(typesEl.textContent).not.toContain('Water');
  });
});

