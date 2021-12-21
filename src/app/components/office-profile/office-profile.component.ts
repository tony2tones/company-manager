import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Office } from 'src/app/modals/office.modal';
import { OfficeServices } from 'src/app/service.service';

@Component({
  selector: 'app-office-profile',
  templateUrl: './office-profile.component.html',
  styleUrls: ['./office-profile.component.css']
})
export class OfficeProfileComponent implements OnInit {
  public routePasser: string = '';

  public officeId: string = '';

  public office: Office;

  public staff: [] = [];

  public menuToggle: boolean = true;

  constructor(
    private officeService: OfficeServices,
    private activeRoute: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((room) => {
      const id = room.roomId;
      this.officeId = id;
      if (this.officeId) {
        console.log('this roomId', this.officeId);
        this.getOfficeInfo();
      }
    }),
      () => {

      }
  }
  public navButton(){
    this.router.navigate([`office-view/${this.officeId}`]);
  }

  public editOffice($event) {
    console.log(' this has been clicked ');
    console.log($event, this.officeId);
    this.router.navigate([`office-view/edit-office/${this.officeId}`]);
  }

  public getOfficeInfo(): void {
    this.officeService.getOfficeById(this.officeId).subscribe((formData) => {
      console.log(formData);
      this.office = formData[0];
      // this.editOffice(formData);
      // console.log('this should be one office ', this.editOfficeProfileForm);

    })
  }
  public getOfficebyId() {
    
  }

  public toggleMenu() {
    this.menuToggle = !this.menuToggle;
  }
}

