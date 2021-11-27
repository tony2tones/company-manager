import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { RoomComponent } from './components/rooms/room/room.component';
import { AppRoutingModule } from './app-routing.module';
// import { RoomService } from './service.service';
// import { RoomService } from './service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    RoomComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // providers: [RoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
