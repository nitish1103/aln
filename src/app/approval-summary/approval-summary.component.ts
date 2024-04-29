import { Component } from '@angular/core';
import { ListAlnComponent } from '../list-aln/list-aln.component';
import { AlnService } from '../services/aln-service';

@Component({
  selector: 'app-approval-summary',
  templateUrl: './approval-summary.component.html',
  styleUrl: './approval-summary.component.scss',
})
export class ApprovalSummaryComponent {
  approveAlnData: any;
  approvalDate = '';
  markActive = false;
  orderActive = false;
  comment = '';

  constructor(
    private alnService: AlnService,
    private listAln: ListAlnComponent
  ) {}

  ngOnInit() {
    this.approveAlnData = this.alnService.approveAlnData;
    this.comment = this.alnService.approvalComment;
    this.approvalDate = this.alnService.approvalSubmissionDate;
  }

  previous() {
    this.listAln.sectionActive = 'approve';
  }

  cancel() {
    this.listAln.sectionActive = 'list';
  }

  submit() {
    this.alnService.approveALN(this.approveAlnData.trackingNumber).subscribe(
      (response: any) => {
        this.alnService.confirmApproveAlnResponse = response;
        this.listAln.sectionActive = 'approve-confirmation';
      },
      (error: any) => {
        this.listAln.sectionActive = 'approve-confirmation';
      }
    );
  }
}
