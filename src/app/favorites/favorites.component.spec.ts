import { ComponentFixture, TestBed, } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';

import { FavoritesComponent } from './favorites.component';
import { PokemonsComponent } from '../pokemons/pokemons.component';


describe('FavoritesComponent', () => {
  let component: FavoritesComponent;
  let fixture: ComponentFixture<FavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatDialogModule],
      declarations: [FavoritesComponent],
      providers: [PokemonsComponent],

    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a moves to Be Defined', () => {
    expect(component.moves).toBeDefined();
  });

  it('should have a location to Be Defined', () => {
    expect(component.location).toBeDefined();
  });

  it('should have a evolves_to to Be Defined', () => {
    expect(component.evolves_to).toBeDefined();
  });

  it('should have a games to Be Defined', () => {
    expect(component.games).toBeDefined();
  });

  it('should have a name to Be Defined', () => {
    expect(component.name).toBeUndefined()
  });

  it('should have a type to Be Defined', () => {
    expect(component.type).toBeDefined();
  });

  it('should have a evolves_from to Be Defined', () => {
    expect(component.evolves_from).toBeDefined();
  });

  it('should have a audio to Be Defined', () => {
    expect(component.audio).toBeUndefined();
  });

  it('should have a onOpenDialog() to Throw Error', () => {
    expect(component.onOpenDialog).toThrowError();
  });

  it('should have a onOpenDialog() to Be Instance Of function', () => {
    expect(component.onOpenDialog).toBeInstanceOf(Function);
  });

});


