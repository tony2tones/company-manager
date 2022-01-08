import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Office } from 'src/app/modals/office.modal';
import { User } from 'src/app/modals/staff.modal';
import { OfficeServices } from 'src/app/service.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { GenericModalComponent } from '../modals/generic-modal/generic-modal.component';


@Component({
  selector: 'app-edit-office',
  templateUrl: './edit-office.component.html',
  styleUrls: ['./edit-office.component.css']
})
export class EditOfficeComponent implements OnInit {
  public editOfficeProfileForm: FormGroup;
  public officeId: string;
  public colourHash: string;
  public staff:FormGroup;
  selectedOffice: Office;

  constructor(
    private officeService: OfficeServices,
    private formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((room) => {
      const id = room.roomId;
      this.officeId = id;
      if (this.officeId) {
        this.getOfficeInfo();
      }
    }),
      () => {

      }
    this.createFormGroup();
  }

  createFormGroup() {
    this.editOfficeProfileForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      officeCapacity: [0, Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      colourScheme: [''],
    });
    this.staff = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        avatar: [''],
      });
  }

  public addUser() {
  //   const modalReff = this.modalService.open(GenericModalComponent, {size: 'sm'});
  //   const componentInstance = modalReff.componentInstance as GenericModalComponent;

  //   componentInstance.title = 'Add User';
    // const userForm = this.formBuilder.group({
    //   firstName: ['', Validators.required],
    //   lastName: ['', Validators.required],
    //   avatar: [''],
    // });

    // this.staff.push(userForm.value);
  }

  deleteUser(lessonIndex: number) {
    // this.staff.removeAt(lessonIndex);
}

  public colourSelected(colour) {
    this.colourHash = colour;
    this.editOfficeProfileForm.patchValue({
      colourScheme: colour
    });
    console.log('details', this.colourHash);
  }

  public getOfficeInfo(): void {
    this.officeService.getOfficeById(this.officeId).subscribe((formData) => {
      this.editOffice(formData);
      this.colourHash = this.editOfficeProfileForm.controls['colourScheme'].value;
      console.log('this should be one office ', this.colourHash);
    })
  }

  public editOffice(office: Office) {
    // console.log(office);
    this.colourHash = office.colourScheme;
    const editOffice = office[0];
    this.editOfficeProfileForm.patchValue({
      companyName: editOffice.companyName,
      phoneNumber: editOffice.phoneNumber,
      officeCapacity: editOffice.officeCapacity,
      address: editOffice.address,
      email: editOffice.email,
      colourScheme: editOffice.colourScheme,
      staff: editOffice.staff,
    })
    console.log('TARGET ', this.colourHash);
    // this.onSubmit();
    // this.editOfficeProfileForm.controls['companyName'].setValue = office.companyName;
  }

  public deleteOffice() {
    this.officeService.deleteOffice(this.officeId).subscribe((data) => {
      console.log('resonse', data);
    }),
      (error) => {
        console.log(error)
      }
  }

  public onSubmit() {
console.log(this.editOfficeProfileForm)
    if (this.editOfficeProfileForm.valid) {
      this.officeService.updateOffice(this.editOfficeProfileForm.value, this.officeId).subscribe((data) => {
        console.log('speak to me ', data);
        this.router.navigate(['/']);
      }),
        (err) => console.log(err);
    }
  }

}
