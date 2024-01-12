import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-telephone',
  templateUrl: './svg-telephone.component.html',
  styleUrls: ['./svg-telephone.component.css']
})
export class SvgTelephoneComponent implements OnInit {
@Input() className:string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
