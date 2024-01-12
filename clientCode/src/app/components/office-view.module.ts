
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { OfficeViewComponent } from './rooms/office-view.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { OfficeComponent } from './rooms/room/office.component';
import { AddOfficeComponent } from './add-office/add-office.component';
import { EditOfficeComponent } from './edit-office/edit-office.component';
import { OfficeProfileComponent } from './office-profile/office-profile.component';
import { GenericModalComponent } from './modals/generic-modal/generic-modal.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UsersComponent } from './users/users.component';
import { SvgTelephoneComponent } from './svgs/svg-telephone/svg-telephone.component';
import { SvgEnvolpeComponent } from './svgs/svg-envolpe/svg-envolpe.component';
import { SvgAddressComponent } from './svgs/svg-address/svg-address.component';
import { SvgUserComponent } from './svgs/svg-user/svg-user.component';

@NgModule({
  declarations: [
    OfficeViewComponent,
    OfficeComponent,
    AddOfficeComponent,
    EditOfficeComponent,
    OfficeProfileComponent,
    GenericModalComponent,
    AddUserComponent,
    UsersComponent,
    SvgTelephoneComponent,
    SvgEnvolpeComponent,
    SvgAddressComponent,
    SvgUserComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ]
})
export class OfficeModule { }