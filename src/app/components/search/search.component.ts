import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) { 
    
  }

  buscar(termino: string) {
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/indexOf
    /*let name = termino.split(' ');
    let query = 'Daddy'.split(' ');    
    let matches = query.every((item) => name.includes(item));*/
    console.log('Buscando');
    if ( termino === '' )
      termino = ' ';
    if ( termino.indexOf( 'Daddy', 0 ) >= 0 || termino.indexOf( 'Maluma', 0 ) >= 0 ) {
      console.log( 'No se puede filtrar ' + termino );
      termino = ' ';
    }
    this.loading = true;
    this.spotify.getArtistas(termino).subscribe( (data: any) => {
      // console.log(data.artists.items);
      if ( data != null )
        this.artistas = data; // .artists.items;
      this.loading = false;
    });
  }
}
