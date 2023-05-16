import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chanson } from '../model/chanson.model';
import { AlbumWrapper } from '../model/albumWrapped.model';
import { Album } from '../model/album.model';


const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class ChansonService {
  apiURL: string = 'http://localhost:8095/chansons/api';
  apiURLCat: string = 'http://localhost:8095/chansons/cat';

 
  //categories : Categorie[];
 

  constructor(private http : HttpClient) { 
    
    /* this.categories = [
      {idCat : 1, nomCat : "PC"},
      {idCat : 2, nomCat : "Imprimante"}
    ]; */
   /* this.chansons = [{idChanson : 1, dateCreation : new Date("01/14/2011"),nom : "life",
                      album : {idalbum : 1, nom : "album1",nomChanseur:"nom1"} },
                     {idChanson : 2,  dateCreation : new Date("01/14/2020"),nom : "dalidas",
                    album :  {idalbum : 1, nom : "album2",nomChanseur:"nom2"}},
                     {idChanson : 3, dateCreation : new Date("01/12/2021"),nom : "jalous", 
                     album : {idalbum : 1, nom : "album3",nomChanseur:"nom3"}}
                    ];*/
    
  }

  listeChanson(): Observable<Chanson[]>{
    return this.http.get<Chanson[]>(this.apiURL);
    }

    ajouterChanson( prod: Chanson):Observable<Chanson>{
      return this.http.post<Chanson>(this.apiURL, prod, httpOptions);
      }

      supprimerChanson(id : number) {
        const url = `${this.apiURL}/${id}`;
        return this.http.delete(url, httpOptions);
        }

        
        consulterChanson(id: number): Observable<Chanson> {
          const url = `${this.apiURL}/${id}`;
          return this.http.get<Chanson>(url);
          }

         /* trierChansons(){
            this.chansons = this.chansons.sort((n1,n2) => {
              if (n1.idChanson > n2.idChanson) {
                  return 1;
              }
             if (n1.idChanson < n2.idChanson) {
                  return -1;
              }
            return 0;
          });
          }*/
      

          updateChanson(prod :Chanson) : Observable<Chanson>
            {
                return this.http.put<Chanson>(this.apiURL, prod, httpOptions);
            }

         
         
       listeAlbums():Observable<AlbumWrapper>{
            return this.http.get<AlbumWrapper>(this.apiURL+"/cat");
            }     

  rechercherParAlbum(idCat: number): Observable<Chanson[]> {
    const url = `${this.apiURL}/prodscat/${idCat}`;
    return this.http.get<Chanson[]>(url);
  } 

  rechercherParNom(nom: string):Observable< Chanson[]> {
    const url = `${this.apiURL}/prodsByName/${nom}`;
    return this.http.get<Chanson[]>(url);
    }
listeAlbum(): Observable<Album[]>{
  return this.http.get<Album[]>(this.apiURL+"/cat");
}
 
}
