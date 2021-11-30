import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-office-room',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {
  @Input() companyName:string = '';

  @Input() officeCapacity:string = '';

  @Input() phoneNumber:number = 0;

  @Input() email:string = '';

  @Input() address:string = '';

  @Input() staff:[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
