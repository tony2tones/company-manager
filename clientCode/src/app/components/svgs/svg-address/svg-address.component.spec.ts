import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgAddressComponent } from './svg-address.component';

describe('SvgAddressComponent', () => {
  let component: SvgAddressComponent;
  let fixture: ComponentFixture<SvgAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
