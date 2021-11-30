import { Component, OnInit } from '@angular/core';
import { Office } from 'src/app/modals/office.modal';
import { OfficeServices } from 'src/app/service.service';

@Component({
  selector: 'app-office-view',
  templateUrl: './office-view.component.html',
  styleUrls: ['./office-view.component.css']
})
export class OfficeViewComponent implements OnInit {
  public offices: Office[] = [];
  constructor(private officeService: OfficeServices) { }

  getOffices() {
    this.officeService.getOffices().subscribe((data:Office[]) => {
      this.offices = data;
      console.log('this is it',this.offices)
    })
  } 
  ngOnInit(): void {
    this.getOffices();
  }

}
