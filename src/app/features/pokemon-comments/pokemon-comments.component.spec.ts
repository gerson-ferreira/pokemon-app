import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCommentsComponent } from './pokemon-comments.component';

describe('PokemonCommentsComponent', () => {
  let component: PokemonCommentsComponent;
  let fixture: ComponentFixture<PokemonCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
