import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, async, inject, tick, fakeAsync  } from '@angular/core/testing';
import {MatIconModule} from '@angular/material/icon'

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatIconModule],
      declarations: [
        AppComponent
      ],
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

  it('should have onOpenFavorites function', () => {
    expect(component.onOpenFavorites).toBeTruthy();
  });

  it('should have receivePokemonToDelete function', () => {
    expect(component.receivePokemonToDelete).toBeTruthy();
  });

  it('should have displayMain parameter -> equals False', () => {
    expect(component.displayFavorites).toBe(false);
  });

  it('should have displayMain parameter -> equals True', () => {
    expect(component.displayMain).toBe(true);
  });

  it('should have displayMain parameter -> equals True', () => {
    expect(component.displayMain).toBe(true);
  });


});

