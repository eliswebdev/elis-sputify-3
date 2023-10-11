import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bg-main',
  templateUrl: './bg-main.component.html',
  styleUrls: ['./bg-main.component.scss']
})
export class BgMainComponent {
  playlists!: any;
  constructor(private rest:RestService){
    //test = this.rest.getAlbum()
  }

  ngOnInit(){
    this.rest.getPlaylists().subscribe(data => {
      this.playlists = data
      console.log(this.playlists)
    })
  }
}
