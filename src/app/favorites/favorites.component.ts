import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { PokemonsComponent } from '../pokemons/pokemons.component';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  @Input() Pokemons: any[] = [];

  name!: string;
  type:any[] = [];
  moves: any[] = [];
  location: any[] = [];
  evolves_to: any[] = [];
  evolves_from: any[] = [];
  games: any[] = [];
  audio: any;

  constructor(public dialog: MatDialog, private pokemonsComponent: PokemonsComponent) { }

  ngOnInit(): void {

    this.Pokemons = this.Pokemons.filter(function (element) {
      return element !== undefined;
    });

  }


  onOpenDialog(pokemon: any): void {
    // name
    this.name = pokemon.name;

    // type
    this.type = this.pokemonsComponent.getTypes(pokemon);

    //moves
    this.moves = this.pokemonsComponent.getMoves(pokemon)

    //locations
    this.location = this.pokemonsComponent.getLocations(pokemon)

    //evolution
    this.evolves_to = this.pokemonsComponent.getEvolvesTo(pokemon);

    this.evolves_from = this.pokemonsComponent.getEvolvesFrom(pokemon);

    //games
    this.games = this.pokemonsComponent.getGames(pokemon);

    this.pokemonsComponent.playSounds(this.name);

    this.dialog.open(DialogComponent, {
      backdropClass: 'backdropBackground',
      data: {
        name: pokemon.name,
        type: this.type,
        moves: this.moves,
        location: this.location,
        evolves: this.evolves_to,
        evolves_from: this.evolves_from,
        image: pokemon.sprites.front_default,
        games: this.games,
        pokemon: pokemon
      }
    },
    );

    this.dialog.afterAllClosed.subscribe(result => {
      this.pokemonsComponent.PauseSounds();
    });

  }


}
