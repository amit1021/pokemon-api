import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokemon-api';
  displayMain: boolean = true;
  displayFavorites: boolean = false;

  pokemonsListFavore: any[] = [];
  pokemonsList: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getPokemonsFromServer();
  }

  receivePokemon($event: any) {
    if (!this.pokemonsListFavore.includes($event)) {
      this.pokemonsListFavore.push($event);
    }
  }

  receivePokemonToDelete($event: any) {
    const index: number = this.pokemonsListFavore.indexOf($event);
    delete this.pokemonsListFavore[index];
  }

  onOpenFavorites(): void {
    if (this.displayMain == false) {
      this.displayMain = true;
      this.displayFavorites = false;
    }
    else {
      this.displayMain = false;
      this.displayFavorites = true;
    }
  }

  getPokemonsFromServer() {
    this.dataService.getPokemons().subscribe((response: any) => {
      response.results.forEach((element: { name: string; }) => {
        this.dataService.getDataByName(element.name).subscribe((Pokemon: any) => {
          this.pokemonsList.push(Pokemon);
        });
      });
    });
  }

}
