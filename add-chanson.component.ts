import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chanson } from '../model/chanson.model';
import { Album } from '../model/album.model';
import { ChansonService } from '../services/chanson.service';


@Component({
  selector: 'app-add-chanson',
  templateUrl: './add-chanson.component.html'
})
export class AddChansonComponent implements OnInit {

  newChanson = new Chanson();
  albums! : Album[];
  newIdAlbum! : number;
  newAlbum! : Album;
  
  constructor(private chansonService: ChansonService,
              private router : Router) { }

  ngOnInit(): void {

   /*this.chansonService.listeAlbums().
          subscribe(cats => {this.albums = cats._embedded.albums;
            console.log(cats);
        });*/
        this.chansonService.listeAlbum().subscribe(cats =>{this.albums=cats;
          console.log(cats)});
 
  }

 
  addChanson(){
    this.newChanson.album = this.albums.find(cat => cat.idalbum == this.newIdAlbum)!;
    this.chansonService.ajouterChanson(this.newChanson)
                      .subscribe(prod => {
                      console.log(prod);
                      this.router.navigate(['chansons']);
                      }); 
    }




}
