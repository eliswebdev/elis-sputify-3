import { Component, Input } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Playlist } from 'src/app/model/playlist';

@Component({
  selector: 'app-bg-item',
  templateUrl: './bg-item.component.html',
  styleUrls: ['./bg-item.component.scss']
})
export class BgItemComponent {


  @Input() playlist!: Playlist;
  constructor(private rest:RestService){
    
  }
}
