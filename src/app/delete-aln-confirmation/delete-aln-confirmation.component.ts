import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListAlnComponent } from '../list-aln/list-aln.component';
import { AlnService } from '../services/aln-service';

@Component({
  selector: 'app-delete-aln-confirmation',
  templateUrl: './delete-aln-confirmation.component.html',
  styleUrl: './delete-aln-confirmation.component.scss',
})
export class DeleteAlnConfirmationComponent {
  deleteAlnResponse: any;

  constructor(
    private listAln: ListAlnComponent,
    private router: Router,
    private readonly alnService: AlnService
  ) {}

  ngOnInit() {
    this.deleteAlnResponse = this.alnService.confirmApproveAlnResponse;
  }

  done() {
    this.listAln.isDeleting = false;
    this.listAln.sectionActive = 'list';
  }

  goToHome() {
    this.listAln.isDeleting = false;
    this.router.navigate(['/home']);
  }
}
