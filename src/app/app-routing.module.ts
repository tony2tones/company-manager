
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfficeComponent } from './components/rooms/room/office.component';
import { OfficeViewComponent } from './components/rooms/office-view.component';
import { AddOfficeComponent } from './components/add-office/add-office.component';


const routes: Routes = [
    { path: '', component: OfficeViewComponent },
    { path: 'office-view', component: OfficeViewComponent },
    { path: 'office-view/:roomId', component: OfficeComponent },
    { path: 'add-new-office', component: AddOfficeComponent },
];
 
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule { }