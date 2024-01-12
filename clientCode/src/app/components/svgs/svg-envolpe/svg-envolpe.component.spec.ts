import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgEnvolpeComponent } from './svg-envolpe.component';

describe('SvgEnvolpeComponent', () => {
  let component: SvgEnvolpeComponent;
  let fixture: ComponentFixture<SvgEnvolpeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgEnvolpeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgEnvolpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
