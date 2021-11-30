import { Component, OnInit } from '@angular/core';
import { Office } from 'src/app/modals/office.modal';
import { OfficeServices } from 'src/app/service.service';

@Component({
  selector: 'app-office-view',
  templateUrl: './office-view.component.html',
  styleUrls: ['./office-view.component.css']
})
export class OfficeViewComponent implements OnInit {
  public office: Office[] = [];
  constructor(private officeService: OfficeServices) { }

  getOffices() {
    this.officeService.getOffices().subscribe((data) => {
      console.log('this is it',data)
    })
  } 
  ngOnInit(): void {
    this.getOffices();
  }

}
