import { ComponentFixture, TestBed, async, inject, tick, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { DataService } from '../services/data.service';
import { PokemonsComponent } from './pokemons.component';

describe('PokemonsComponent', () => {
  let component: PokemonsComponent;
  let dataService: DataService;
  let fixture: ComponentFixture<PokemonsComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatDialogModule],
      declarations: [PokemonsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonsComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

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

  it('should have a evolves_from to Be Defined', () => {
    expect(component.evolves_from).toBeDefined();
  });

  it('should have a name to Be Defined', () => {
    expect(component.name).toBeUndefined()
  });

  it('should have a type to Be Defined', () => {
    expect(component.type).toBeDefined();
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

  it('should have a getMoves() to Be Instance Of function', () => {
    expect(component.getMoves).toBeInstanceOf(Function);
  });

  it('should have a getLocations() to Be Instance Of function', () => {
    expect(component.getLocations).toBeInstanceOf(Function);
  });

  it('should have a getEvolvesTo() to Be Instance Of function', () => {
    expect(component.getEvolvesTo).toBeInstanceOf(Function);
  });

  it('should have a getGames() to Be Instance Of function', () => {
    expect(component.getGames).toBeInstanceOf(Function);
  });

  it('should have a playSounds() to Be Instance Of function', () => {
    expect(component.playSounds).toBeInstanceOf(Function);
  });

  it('should have a PauseSounds() to Be Instance Of function', () => {
    expect(component.PauseSounds).toBeInstanceOf(Function);
  });

});
