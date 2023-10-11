import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bg-main',
  templateUrl: './bg-main.component.html',
  styleUrls: ['./bg-main.component.scss']
})
export class BgMainComponent {
  album!: any;
  constructor(private rest:RestService){
    //test = this.rest.getAlbum()
  }

  ngOnInit(){
    this.rest.getAlbum().subscribe(data => {
      this.album = data
      console.log(this.album)
    })
  }
}
