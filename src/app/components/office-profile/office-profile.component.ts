import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-office-profile',
  templateUrl: './office-profile.component.html',
  styleUrls: ['./office-profile.component.css']
})
export class OfficeProfileComponent implements OnInit {
  public routePasser: string = '';

  public officeId: string = '';

  public companyName: string = '';

  public officeCapacity: string = '';
  
  public colourScheme: string = '';
  
  public phoneNumber: number = 0;

  public email: string = '';

  public address: string = '';

  public staff: [] = [];

  public menuToggle: boolean = false;

  constructor(
    private activeRoute: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      console.log(params);
    });
  }
  public navButton(){
    this.router.navigate([`office-view/${this.officeId}`]);
  }

  public editOffice($event) {
    console.log(' this has been clicked ');
    console.log($event, this.officeId);
    this.router.navigate([`office-view/edit-office/${this.officeId}`]);
  }

  public getOfficebyId() {
    
  }

  public toggleMenu() {
    this.menuToggle = !this.menuToggle;
  }
}

