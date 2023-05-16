import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chanson } from '../model/chanson.model';
import { Album } from '../model/album.model';
import { ChansonService } from '../services/chanson.service';

@Component({
  selector: 'app-update-chanson',
  templateUrl: './update-chanson.component.html',
  styles: [
  ]
})
export class UpdateChansonComponent implements OnInit {

  currentChanson = new Chanson();
  albums! : Album[];
  updatedAlbumId! : number;
  
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private chansonService: ChansonService) { }

  ngOnInit(): void {
    this.chansonService.listeAlbums().
    subscribe(cats => {this.albums = cats._embedded.albums;
    console.log(cats);
    });


    this.chansonService.consulterChanson(this.activatedRoute.snapshot.params['id']).
    subscribe( prod =>{ this.currentChanson = prod; 
      this.updatedAlbumId =   this.currentChanson.album.idalbum;
    
    } ) ;
    }
    

  

  updateChanson() {
    this.currentChanson.album = this.albums.find(cat => cat.idalbum == this.updatedAlbumId)!;
         this.chansonService.updateChanson(this.currentChanson).subscribe(prod => {
      this.router.navigate(['chansons']); }
      );
  }

}
