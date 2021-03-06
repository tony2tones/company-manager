
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfficeViewComponent } from './components/rooms/office-view.component';
import { AddOfficeComponent } from './components/add-office/add-office.component';
import { EditOfficeComponent } from './components/edit-office/edit-office.component';
import { OfficeProfileComponent } from './components/office-profile/office-profile.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UsersComponent } from './components/users/users.component';


const routes: Routes = [
    { path: 'add-new-office', component: AddOfficeComponent },
    { path: 'add-new-user', component: AddUserComponent },
    { path: 'office-view/edit-office/:roomId', component: EditOfficeComponent },
    { path: 'view-user-list', component: UsersComponent },
    { path: 'office-view', component: OfficeViewComponent },
    { path: 'office-view/:roomId', component: OfficeProfileComponent },
    { path: '', component: OfficeViewComponent },
];
 
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule { }