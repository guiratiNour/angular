import { Component, OnInit } from '@angular/core';
import { Chanson } from '../model/chanson.model';
import { ChansonService } from '../services/chanson.service';


@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit {

  nomChanson! : string;
  chansons!: Chanson[];
  allChansons!: Chanson[];
  searchTerm!: string;
  
  constructor(private chansonService : ChansonService) { }

  ngOnInit(): void {
    this.chansonService.listeChanson().subscribe(prods => {
      console.log(prods);
      this.chansons = prods;
      });
      
  }

  rechercherProds(){
    this.chansonService.rechercherParNom(this.nomChanson).
    subscribe(prods => {
      console.log(prods);
      this.chansons=prods;});
  }

  onKeyUp(filterText : string){
    this.chansons = this.allChansons.filter(item =>
    item.nom.toLowerCase().includes(filterText));
    }
    

}
