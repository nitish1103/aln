import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isAuthenticated = false;
  constructor(
    private readonly shredService: SharedService,
    private readonly router: Router
  ) {
    this.shredService.getAuthentication().subscribe((response: any) => {
      this.isAuthenticated = response.isAuthenticated;
    });
  }
  logout() {
    this.shredService.updateAuthentication(false);
    localStorage.clear();
    this.router.navigateByUrl('/');
  }
}
