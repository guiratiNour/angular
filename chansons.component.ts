import { Component, OnInit } from '@angular/core';
import { Chanson } from '../model/chanson.model';
import { ChansonService } from '../services/chanson.service';


@Component({
  selector: 'app-chansons',
  templateUrl: './chansons.component.html'
})
export class ChansonsComponent implements OnInit {

    chansons? : Chanson[]; //un tableau de chansons

  constructor(private chansonService: ChansonService) {
   //this.produits=[];
     }

  ngOnInit(): void {

    this.chargerChansons();
  }

  chargerChansons(){
    this.chansonService.listeChanson().subscribe(prods => {
      console.log(prods);
      this.chansons = prods;
      });
  }

supprimerChanson(p: Chanson)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
  this.chansonService.supprimerChanson(p.idChanson).subscribe(() => {
        console.log("chanson supprimé");
        this.chargerChansons();     
      
});
}
 
 

}
