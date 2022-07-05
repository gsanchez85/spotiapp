import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  
  constructor(private http: HttpClient) { 
    console.log('Spotify Service Listo');
  }

  getQueryHeaders( aUrlsBrowser: string, aIndexString: string, aPipe: boolean = true, aItems: boolean = true ) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer API KEY'
    });
    if ( aPipe ) {
      if ( aItems )
        return this.http.get(`https://api.spotify.com/v1/` + aUrlsBrowser, {headers}).pipe( map( data => data[aIndexString].items ));
      else
        return this.http.get(`https://api.spotify.com/v1/` + aUrlsBrowser, {headers}).pipe( map( data => data[aIndexString] ));
    } else
        return this.http.get(`https://api.spotify.com/v1/` + aUrlsBrowser, {headers});
  }

  getNewReleases() {
    return this.getQueryHeaders(`browse/new-releases?limit=20`, 'albums');
  }

  getArtistas( termino: string ) {
    if ( termino !== '' )
      return this.getQueryHeaders(`search?q=${ termino }&type=artist&limit=15`, 'artists');
    else
      return this.http.get(``);
  }

  getArtista( id: string ) {
     return this.getQueryHeaders(`artists/${ id }`, 'artists', false);
  }

  getTopTracks( id: string ) {
    return this.getQueryHeaders(`artists/${ id }/top-tracks?country=us`, 'tracks', true, false );
 }

}
