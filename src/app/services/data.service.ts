import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getPokemons(){
    return this.http.get("https://pokeapi.co/api/v2/pokemon?limit=20");
  }


  getDataByName(name: string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  // getDataByMove(move: string){
  //   return this.http.get(`https://pokeapi.co/api/v2/move/${move}`);
  // }https://pokeapi.co/api/v2/pokemon/10/encounters

  getDataByArea(Area: string){
    return this.http.get(`${Area}`);
  }
  getDataEvolution(id: string){
    return this.http.get(`https://pokeapi.co/api/v2/evolution-chain/${id}`);
  }
}
