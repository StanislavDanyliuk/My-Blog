import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-modal-window-sign-in',
  templateUrl: './modal-window-sign-in.component.html',
  styleUrls: ['./modal-window-sign-in.component.css']
})
export class ModalWindowSignInComponent implements OnInit {
  email: string;
  password: string;

  constructor(public authService: AuthService) { }

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

  }

}
