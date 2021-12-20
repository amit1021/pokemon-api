import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogDetailsComponent } from '../dialog-details/dialog-details.component';
@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemonsList: any[] = [];
  name!: string;
  type : any[] = [];
  moves: any[] = [];
  location: any[] = [];
  evolves_to: any[] = [];

  constructor(
    private dataService: DataService,
    public dialog: MatDialog
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
  }

  showDetails(pokemon: any){
    this.name = pokemon.name;
    this.type = pokemon.types[0].type.name;

    console.log(this.name);
    console.log(this.type);

  }

 onOpenDialog(pokemon: any) : void{
    this.name = pokemon.name;

    //Types
    for (let i = 0; i < pokemon.types.length; i++) {
      this.type.push(pokemon.types[i].type.name);
    }
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
      console.log("evolution",response)
      for (let i = 0; i < response.chain.evolves_to.length; i++) {
        this.evolves_to.push(response.chain.evolves_to[i].species.name);
      }
    });

    console.log(pokemon);

    this.dialog.open(DialogDetailsComponent,  {
      height: '400px',
      width: '600px',
      data:{
        name: pokemon.name,
        type: this.type,
        moves: this.moves,
        location: this.location,
        evolves: this.evolves_to,
      }},
     );


  }

}
