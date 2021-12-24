import { ComponentFixture, TestBed, async, inject, tick, fakeAsync  } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { DataService } from '../services/data.service';
import { PokemonsComponent } from './pokemons.component';
import { MatDialogModule  } from '@angular/material/dialog';

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

  // it('aaaaa', () => {
  //   let pokemonList = []
  //   dataService.getPokemons().forEach(element => {
  //     pokemonList.push(element);
  //   });
  //   expect(pokemonList.length).toBe(151);
  // });

});
