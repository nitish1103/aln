import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListAlnComponent } from '../list-aln/list-aln.component';
import { AlnService } from '../services/aln-service';

@Component({
  selector: 'app-approval-summary-confirmation',
  templateUrl: './approval-summary-confirmation.component.html',
  styleUrl: './approval-summary-confirmation.component.scss',
})
export class ApprovalSummaryConfirmationComponent {
  confirmApproveResponse: any;

  constructor(
    private listAln: ListAlnComponent,
    private router: Router,
    private readonly alnService: AlnService
  ) {}

  ngOnInit() {
    this.confirmApproveResponse = this.alnService.confirmApproveAlnResponse;
  }

  done() {
    this.listAln.isApproving = false;
    this.listAln.sectionActive = 'list';
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
