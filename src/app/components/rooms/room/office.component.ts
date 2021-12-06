import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-office-room',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {
  @Input() routePasser: string = '';

  @Input() officeId: string = '';

  @Input() companyName: string = '';

  @Input() officeCapacity: string = '';

  @Input() phoneNumber: number = 0;

  @Input() email: string = '';

  @Input() address: string = '';

  @Input() staff: [] = [];

  public menuToggle: boolean = false;

  constructor(
    private activeRoute: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      console.log(params);
    });
  }
  public navButton(id){
    this.router.navigate([''])
  }

  public editOffice($event) {
    console.log(' this has been clicked ');
    console.log($event, this.officeId);
    this.router.navigate([`office-view/edit-office/${this.officeId}`]);
  }

  public toggleMenu() {
    this.menuToggle = !this.menuToggle;
  }
}
