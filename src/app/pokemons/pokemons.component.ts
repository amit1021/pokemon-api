import { Component, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  @Output() pokemonFavorEvent = new EventEmitter();
  @Output() pokemonFavorEventDelete = new EventEmitter();

  @Input() Pokemonsfavor: any[] = [];
  @Input() pokemonsList: any[] = [];

  name!: string;
  type: any[] = [];
  moves: any[] = [];
  location: any[] = [];
  evolves_to: any[] = [];
  evolves_from: any = [];
  games: any[] = [];
  audio: any;
  pokemonsListFavor: any[] = [];

  constructor(
    private dataService: DataService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  onOpenDialog(pokemon: any): void {
    // name
    this.name = pokemon.name;

    // type
    this.type = this.getTypes(pokemon);

    // moves
    this.moves = this.getMoves(pokemon);

    // locations
    this.location = this.getLocations(pokemon);

    // evolution
    this.evolves_to = this.getEvolvesTo(pokemon);

    this.evolves_from = this.getEvolvesFrom(pokemon);

    // games
    this.games = this.getGames(pokemon);

    this.playSounds(this.name);

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
      }
    },
    );

    this.dialog.afterAllClosed.subscribe(() => {
      this.PauseSounds();
    });

  }

  getTypes(pokemon: any) {
    let types: any = [];
    for (let i = 0; i < pokemon.types.length; i++) {
      types.push(pokemon.types[i].type.name);
    }
    return types;
  }

  getMoves(pokemon: any) {
    let moves: any = [];
    for (let i = 0; i < pokemon.moves.length; i++) {
      moves.push(pokemon.moves[i].move.name);
    }
    return moves;
  }

  getLocations(pokemon: any): any {
    let location: any = [];
    this.dataService.getDataByArea(pokemon.location_area_encounters).subscribe((response: any) => {
      for (let i = 0; i < response.length; i++) {
        location.push(response[i].location_area.name);
      }
    });
    return location;
  }

  getEvolvesTo(pokemon: any): any {
    let evolves_to: any = []
    this.dataService.getDataEvolution(pokemon.id).subscribe((response: any) => {
      for (let i = 0; i < response.chain.evolves_to.length; i++) {
        evolves_to.push(response.chain.evolves_to[i].species.name);
      }
    });
    return evolves_to;
  }

  getEvolvesFrom(pokemon: any):any {
    let evolves_from: any = []
    this.dataService.getDataEvolutionFrom(pokemon.id).subscribe((response: any) => {
      if (response.evolves_from_species != null) {
        evolves_from.push(response.evolves_from_species.name);
      }
    });
    return evolves_from;
  }

  getGames(pokemon: any): any {
    let games: any = []
    for (let i = 0; i < pokemon.game_indices.length; i++) {
      games.push(pokemon.game_indices[i].version.name);
    }
    return games;
  }

  playSounds(name: string) {
    try {
      this.audio = new Audio();
      // cases to which pokemon is playing
      switch (name) {
        case "bulbasaur":
          this.audio.src = "assets/audio/Bulbasaur.mp3";
          break;
        case "ivysaur":
          this.audio.src = "assets/audio/Ivysaur.mp3";
          break;
        case "pikachu":
          this.audio.src = "assets/audio/PIKACHU.wav";
          break;
        case "charmeleon":
          this.audio.src = "assets/audio/Charmeleon.mp3";
          break;
        case "blastoise":
          this.audio.src = "assets/audio/Blastoise.mp3";
          break;
        case "charizard":
          this.audio.src = "assets/audio/Charizard.mp3";
          break;
        case "charmander":
          this.audio.src = "assets/audio/Charmander.mp3";
          break;
        case "wartortle":
          this.audio.src = "assets/audio/Wartortle.mp3";
          break;
        case "squirtle":
          this.audio.src = "assets/audio/Squirtle.mp3";
          break;
        case "pidgeotto":
          this.audio.src = "assets/audio/Pidgeot.mp3";
          break;
        case "butterfree":
          this.audio.src = "assets/audio/Butterfree.mp3";
          break;
        case "caterpie":
          this.audio.src = "assets/audio/Caterpie.wav";
          break;
        case "metapod":
          this.audio.src = "assets/audio/Metapod.mp3";
          break;
        default:
          break;
      }

      this.audio.load();
      this.audio.play();

    } catch (error) {
      console.error(error);
    }

  }

  PauseSounds() {
    try {
      // check if music is playing
      var isPlaying = this.audio.currentTime > 0 && !this.audio.paused
        && !this.audio.ended
        && this.audio.readyState > this.audio.HAVE_CURRENT_DATA;

      if (isPlaying) {
        this.audio.pause();
        this.audio.currentTime = 0;
      }
    } catch (error) {
      console.error(error);
    }
  }

  // add pokemon to favorites
  addToFavor(pokemon: any): void {
    // if the Pokemon is already marked as a favorites -> delete from favorites
    if (this.Pokemonsfavor.includes(pokemon)) {
      this.pokemonFavorEventDelete.emit(pokemon);
      return;
    }
    // else add to favorites
    this.pokemonFavorEvent.emit(pokemon);
  }

  // check if the favorites contain this Pokemon
  contains(pokemon: any): boolean {
    return (!this.Pokemonsfavor.includes(pokemon));
  }
}
