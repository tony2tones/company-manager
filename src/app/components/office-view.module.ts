import { NgModule } from '@angular/core';
import { OfficeViewComponent } from './rooms/office-view.component';

import { OfficeComponent } from './rooms/room/office.component';
// import { RoomService } from './service.service';
// import { RoomService } from './service/service.component';

@NgModule({
  // imports:[OfficeComponent],
  declarations: [OfficeViewComponent, OfficeComponent],
})
export class OfficeModule { }
