import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'pokemon-api';

  // variables to decide which component to display
  displayPokemon: boolean = true;
  displayFavorites: boolean = false;

  pokemonsListFavor: any[] = [];
  pokemonsList: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // get data from api
    this.getPokemonsFromServer();
  }

  // add pokemon to favorites
  receivePokemon($event: any) {
    if (!this.pokemonsListFavor.includes($event)) {
      this.pokemonsListFavor.push($event);
    }
  }

  // delete pokemon from favorites
  receivePokemonToDelete($event: any) {
    const index: number = this.pokemonsListFavor.indexOf($event);
    delete this.pokemonsListFavor[index];
  }


  onOpenComponent(): void {
    // if pokemon component is on display, switch to favorites components
    if (this.displayPokemon == false) {
      this.displayPokemon = true;
      this.displayFavorites = false;
    }
    // else favorites component is on display, switch to pokemon components
    else {
      this.displayPokemon = false;
      this.displayFavorites = true;
    }
  }

  // takes the data of the Pokemons from the api
  getPokemonsFromServer() {
    this.dataService.getPokemons().subscribe((response: any) => {
      response.results.forEach((element: { name: string; }) => {
        this.dataService.getDataByName(element.name).subscribe((Pokemon: any) => {
          // add to pokemonList
          this.pokemonsList.push(Pokemon);
        });
      });
    });
  }

}
