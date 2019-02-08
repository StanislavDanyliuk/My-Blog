import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalWindowSignInComponent } from './modal-window-sign-in.component';

describe('ModalWindowSignInComponent', () => {
  let component: ModalWindowSignInComponent;
  let fixture: ComponentFixture<ModalWindowSignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalWindowSignInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalWindowSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
