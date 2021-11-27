
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomComponent } from './components/rooms/room/room.component';
import { RoomsComponent } from './components/rooms/rooms.component';


const routes: Routes = [
    { path: '', component: RoomsComponent },
    { path: 'room', component: RoomsComponent },
    { path: 'rooms/:roomId', component: RoomComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule { }