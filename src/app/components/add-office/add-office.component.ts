import { Component, OnInit } from '@angular/core';
import { OfficeServices } from 'src/app/service.service';

@Component({
  selector: 'app-add-office',
  templateUrl: './add-office.component.html',
  styleUrls: ['./add-office.component.css']
})
export class AddOfficeComponent implements OnInit {

  constructor(private officeService: OfficeServices) { }

  ngOnInit(): void {
    // this.officeService.
  }

}
