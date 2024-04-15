import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private readonly router: Router,
    private readonly sharedService: SharedService
  ) {}

  public login() {
    localStorage.setItem('token', 'testToken');
    this.router.navigate(['/home']);
    this.sharedService.updateAuthentication(true);
  }
}
