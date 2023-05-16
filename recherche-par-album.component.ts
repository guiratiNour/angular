import { Component, OnInit } from '@angular/core';
import { Album } from '../model/album.model';
import { Chanson } from '../model/chanson.model';
import { ChansonService } from '../services/chanson.service';


@Component({
  selector: 'app-recherche-par-album',
  templateUrl: './recherche-par-album.component.html',
  styles: [
  ]
})
export class RechercheParAlbumComponent implements OnInit {
  IdAlbum! : number;
  albums! : Album[];
  chansons! : Chanson[];


  constructor(private chansonService : ChansonService) { }

  ngOnInit(): void {
    this.chansonService.listeAlbums().
      subscribe(cats => {this.albums = cats._embedded.albums;
      console.log(cats);
    });

  }

  onChange() {
    this.chansonService.rechercherParAlbum(this.IdAlbum).
      subscribe(prods =>{this.chansons=prods});

    }

}
