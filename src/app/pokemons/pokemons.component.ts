import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemonsList: any[] = [];
  name!: string;
  type!: string;


  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getPokemons().subscribe((response: any) =>{
      response.results.forEach((element: { name: string; }) => {
                this.dataService.getDataByName(element.name).subscribe((Pokemon: any) =>{
                this.pokemonsList.push(Pokemon);
          });
      });
    });
  }

  showDetails(pokemon: any){
    this.name = pokemon.name;
    this.type = pokemon.types[0].type.name;
    console.log(this.name);
    console.log(this.type);

  }

}
