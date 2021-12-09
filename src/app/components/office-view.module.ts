
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

@NgModule({
  declarations: [
    OfficeViewComponent,
    OfficeComponent,
    AddOfficeComponent,
    EditOfficeComponent,
    OfficeProfileComponent,
    GenericModalComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ]
})
export class OfficeModule { }