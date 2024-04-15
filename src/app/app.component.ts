import { Component } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'aln-new';
  isAuthenticated = false;

  constructor(public sharedService: SharedService) {
    this.sharedService.getAuthentication().subscribe((response: any) => {
      this.isAuthenticated = response.isAuthenticated;
    });
  }
}
