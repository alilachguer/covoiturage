import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FermerCompteComponent } from './fermer-compte.component';

describe('FermerCompteComponent', () => {
  let component: FermerCompteComponent;
  let fixture: ComponentFixture<FermerCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FermerCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FermerCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
