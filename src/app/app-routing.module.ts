
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfficeViewComponent } from './components/rooms/office-view.component';
import { AddOfficeComponent } from './components/add-office/add-office.component';
import { EditOfficeComponent } from './components/edit-office/edit-office.component';
import { OfficeProfileComponent } from './components/office-profile/office-profile.component';
import { AddUserComponent } from './components/add-user/add-user.component';


const routes: Routes = [
    { path: '', component: OfficeViewComponent },
    { path: 'office-view', component: OfficeViewComponent },
    { path: 'office-view/:roomId', component: OfficeProfileComponent },
    { path: 'office-view/edit-office/:roomId', component: EditOfficeComponent },
    { path: 'add-new-office', component: AddOfficeComponent },
    { path: 'add-new-user', component: AddUserComponent },
];
 
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule { }