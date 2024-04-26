import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListAlnComponent } from '../list-aln/list-aln.component';
import { AlnService } from '../services/aln-service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss',
})
export class ConfirmationComponent {
  confirmResponse: any;

  constructor(
    private listAln: ListAlnComponent,
    private router: Router,
    private readonly alnService: AlnService
  ) {}

  ngOnInit() {
    this.confirmResponse = this.alnService.confirmALnResponse;
  }

  done() {
    this.listAln.sectionActive = 'list';
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
