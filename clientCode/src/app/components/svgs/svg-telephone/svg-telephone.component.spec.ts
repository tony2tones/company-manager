import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgTelephoneComponent } from './svg-telephone.component';

describe('SvgTelephoneComponent', () => {
  let component: SvgTelephoneComponent;
  let fixture: ComponentFixture<SvgTelephoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgTelephoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgTelephoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
