import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-window-sign-in',
  templateUrl: './modal-window-sign-in.component.html',
  styleUrls: ['./modal-window-sign-in.component.css']
})
export class ModalWindowSignInComponent implements OnInit {
  email: string;
  password: string;
  modalForm: FormGroup;
  submitted = false;

  constructor(public authService: AuthService, private formBuilder: FormBuilder) { }

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {

    this.modalForm = this.formBuilder.group({
      Email: ['', Validators.required],
      Password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  get f() {
    return this.modalForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.modalForm.invalid) {
      return;
    }
  }

}
