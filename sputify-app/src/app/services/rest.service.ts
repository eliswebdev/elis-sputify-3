import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

export class RestService { 
    _baseUrl = "http://localhost:3000"
  constructor(private http: HttpClient) {
   }

   getAlbum(): Observable<any>{
    return this.http.get(this._baseUrl + '/album');
   }
   getArtists(): Observable<any>{
    return this.http.get(this._baseUrl + '/artists');
   }
   getPlaylists(): Observable<any>{
    return this.http.get(this._baseUrl + '/playlists');
   }
   getSongs(): Observable<any>{
    return this.http.get(this._baseUrl + '/songs');
   }
}