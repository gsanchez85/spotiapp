import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  errorType: string;
  
  constructor( private spotify: SpotifyService) {

    this.loading = true;
    this.spotify.getNewReleases().subscribe( (data: any) => {
      console.log(data);
      this.nuevasCanciones = data; // .albums.items;
      this.loading = false;
    }, (errorException) => {
          this.error = true;
          this.loading = false;
          this.errorType = errorException.error.error.message;
       } 
    );
  }

  ngOnInit() {
  }

}
