import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed} from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';


describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatIconModule],
      declarations: [
        AppComponent
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'pokemon-api'`, () => {
    expect(component.title).toEqual('pokemon-api');
  });

  it('should have getPokemonsFromServer function', () => {
    expect(component.getPokemonsFromServer).toBeTruthy();
  });

  it('should have getPokemonsFromServer function to be Instance Of function', () => {
    expect(component.getPokemonsFromServer).toBeInstanceOf(Function);
  });

  it('should have onOpenFavorites function', () => {
    expect(component.onOpenComponent).toBeTruthy();
  });

  it('should have onOpenFavorites function to be Instance Of function', () => {
    expect(component.onOpenComponent).toBeInstanceOf(Function);
  });

  it('should have receivePokemonToDelete function', () => {
    expect(component.receivePokemonToDelete).toBeTruthy();
  });

  it('should have receivePokemonToDelete function to be Instance Of function', () => {
    expect(component.receivePokemonToDelete).toBeInstanceOf(Function);
  });

  it('should have display Pokemon parameter -> equals True', () => {
    expect(component.displayPokemon).toBe(true);
  });

  it('should have display Favorites parameter -> equals True', () => {
    expect(component.displayFavorites).toBe(false);
  });

  it('#onOpenComponent() should toggle #displayPokemon and #displayFavorites', () => {
    expect(component.displayPokemon).toBe(true);
    expect(component.displayFavorites).toBe(false);
    component.onOpenComponent();
    expect(component.displayFavorites).toBe(true);
    expect(component.displayPokemon).toBe(false);
  });


});

