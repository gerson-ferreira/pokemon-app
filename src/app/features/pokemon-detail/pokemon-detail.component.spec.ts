import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importe o HttpClientTestingModule
import { PokemonDetailComponent } from './pokemon-detail.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PokemonDetailComponent', () => {
  let component: PokemonDetailComponent;
  let fixture: ComponentFixture<PokemonDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonDetailComponent],
      imports: [RouterTestingModule, HttpClientTestingModule], 
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


