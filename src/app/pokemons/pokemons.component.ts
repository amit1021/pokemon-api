import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

import { Router } from '@angular/router';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemonsList: any[] = [];
  name!: string;
  type! : string;
  moves: any[] = [];
  location: any[] = [];
  evolves_to: any[] = [];
  games: any[] = [];
  audio: any ;

  constructor(
    private dataService: DataService,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dataService.getPokemons().subscribe((response: any) =>{
      console.log(response)
      response.results.forEach((element: { name: string; }) => {
                this.dataService.getDataByName(element.name).subscribe((Pokemon: any) =>{
                this.pokemonsList.push(Pokemon);
          });
      });
    });
    // this.playAudio()
  }
 onOpenDialog(pokemon: any) : void{
    this.name = pokemon.name;
    console.log(this.name);
    //Type
      this.type = pokemon.types[0].type.name;
    //moves
    this.moves = []
    for (let i = 0; i < pokemon.moves.length; i++) {
      this.moves.push(pokemon.moves[i].move.name);
    }
    //locations
    this.dataService.getDataByArea(pokemon.location_area_encounters).subscribe((response: any) =>{
      this.location = []
      for (let i = 0; i < response.length; i++) {
        this.location.push(response[i].location_area.name);
      }
    });

    //evolution
    this.dataService.getDataEvolution(pokemon.id).subscribe((response: any) =>{
      this.evolves_to = []
      for (let i = 0; i < response.chain.evolves_to.length; i++) {
        this.evolves_to.push(response.chain.evolves_to[i].species.name);
      }
    });
    //games
    this.games = []
    for (let i = 0; i < pokemon.game_indices.length; i++) {
      this.games.push(pokemon.game_indices[i].version.name);
    }
    console.log(pokemon);


    this.playSounds(this.name);

    this.dialog.open(DialogComponent,  {
      backdropClass : 'backdropBackground',
      data:{
        name: pokemon.name,
        type: this.type,
        moves: this.moves,
        location: this.location,
        evolves: this.evolves_to,
        image: pokemon.sprites.front_default,
        games: this.games
      }},
     );
     this.dialog.afterAllClosed.subscribe(result => {
      this.audio.pause();
      this.audio.currentTime = 0;

    });

  }
  // playAudio(){
  //   let audio = new Audio();
  //   audio.src = "assets/audio/song.wav";
  //   audio.load();
  //   var promise = audio.play();
  //   if (promise !== undefined) {
  //       promise.then(_ => {
  //         // Autoplay started!
  //       }).catch(error => {
  //         console.log(error)
  //       });
  //   }

  onOpenFavorites() : void{
    this.router.navigate([`favorites`])
  }

  playSounds(name: string){
    this.audio = new Audio();
    switch (name) {
      case "bulbasaur":
        this.audio .src = "assets/audio/Bulbasaur.mp3";
        break;
      case "ivysaur":
        this.audio .src = "assets/audio/Ivysaur.mp3";
          break;
      case "pikachu":
        this.audio .src = "assets/audio/PIKACHU.wav";
          break;
      case "charmeleon":
        this.audio .src = "assets/audio/Charmeleon.mp3";
        break;

      case "blastoise":
        this.audio .src = "assets/audio/Blastoise.mp3";
        break;
      case "charizard":
        this.audio .src = "assets/audio/Charizard.mp3";
        break;
      case "charmander":
        this.audio .src = "assets/audio/Charmander.mp3";
        break;
      case "wartortle":
        this.audio .src = "assets/audio/Wartortle.mp3";
        break;
      case "squirtle":
        this.audio .src = "assets/audio/Squirtle.mp3";
        break;
      case "pidgeotto":
        this.audio .src = "assets/audio/Pidgeot.mp3";
        break;
      case "butterfree":
        this.audio .src = "assets/audio/Butterfree.mp3";
        break;
      case "caterpie":
        this.audio .src = "assets/audio/Caterpie.wav";
        break;
      case "metapod":
        this.audio .src = "assets/audio/Metapod.mp3";
        break;
      default:
        break;
    }
    this.audio .load();
    this.audio .play();
  }
}
