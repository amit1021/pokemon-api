import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getPokemons() {
    return this.http.get("https://pokeapi.co/api/v2/pokemon?limit=151");
  }

  getDataByName(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  getDataByArea(Area: string) {
    return this.http.get(`${Area}`);
  }
  getDataEvolution(id: string) {
    return this.http.get(`https://pokeapi.co/api/v2/evolution-chain/${id}`);
  }
}
