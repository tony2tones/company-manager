import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OfficeComponent } from './components/rooms/room/office.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { OfficeModule } from './components/office-view.module';
// import { RoomService } from './service.service';
// import { RoomService } from './service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    // OfficeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OfficeModule,
    
  ],
  exports: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  // providers: [RoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
