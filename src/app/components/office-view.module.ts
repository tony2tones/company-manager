import { NgModule } from '@angular/core';
import { OfficeViewComponent } from './rooms/office-view.component';

import { OfficeComponent } from './rooms/room/office.component';

@NgModule({
  declarations: [OfficeViewComponent, OfficeComponent],
})
export class OfficeModule { }
