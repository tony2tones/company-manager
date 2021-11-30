
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { OfficeViewComponent } from './rooms/office-view.component';

import { OfficeComponent } from './rooms/room/office.component';
import { AddOfficeComponent } from './add-office/add-office.component';

@NgModule({
  declarations: [OfficeViewComponent, OfficeComponent, AddOfficeComponent],
  imports: [BrowserModule,
    FormsModule, HttpClientModule ]
})
export class OfficeModule { }