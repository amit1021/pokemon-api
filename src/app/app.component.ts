import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokemon-api';
  displayMain: boolean = true;
  displayFavorites:boolean = false;

  pokemonsListFavore : any[] = [];

  receivePokemon($event:any){
    if(this.pokemonsListFavore.includes($event)){
      // const index: number = this.pokemonsListFavore.indexOf($event);
      // this.pokemonsListFavore.slice(index, 1);
      // console.log(this.pokemonsListFavore)
      return;
    }
    this.pokemonsListFavore.push($event);
  }

  onOpenFavorites() : void{
    if(this.displayMain == false){
      this.displayMain = true;
      this.displayFavorites = false;
    }
    else{
      this.displayMain = false;
      this.displayFavorites = true;
    }
  }

}
