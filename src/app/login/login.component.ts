import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlnService } from '../services/aln-service';
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
    private readonly sharedService: SharedService,
    private readonly alnService: AlnService
  ) {}

  public login() {
    const { userName, password } = this.loginForm.value;
    console.log('====username', userName);
    this.alnService.login(userName, password).subscribe(
      (response: any) => {
        console.log('===response', response);
        localStorage.setItem('role', response);
        localStorage.setItem('token', 'testToken');
        this.router.navigate(['/home']);
        this.sharedService.updateAuthentication(true);
      },
      (error: any) => {
        console.log('===error', error);
        localStorage.setItem('role', 'A89');
        localStorage.setItem('token', 'testToken');
        this.router.navigate(['/home']);
        this.sharedService.updateAuthentication(true);
      }
    );
  }
}
