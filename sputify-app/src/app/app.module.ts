import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { PlayerComponent } from './player/player.component';
import { ThumbComponent } from './thumb/thumb.component';
import { BgMainComponent } from './bg-main/bg-main.component';
import { BgItemComponent } from './bg-main/bg-item/bg-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarComponent,
    PlayerComponent,
    ThumbComponent,
    BgMainComponent,
    BgItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
