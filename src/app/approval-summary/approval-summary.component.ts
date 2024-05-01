import { Component } from '@angular/core';
import { ListAlnComponent } from '../list-aln/list-aln.component';
import { AlnService } from '../services/aln-service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-approval-summary',
  templateUrl: './approval-summary.component.html',
  styleUrl: './approval-summary.component.scss',
})
export class ApprovalSummaryComponent {
  approveAlnData: any;
  approvalDate = '';
  markActive = true;
  orderActive = true;
  comment = '';
  isRejecting = false;
  btnvalue = 1;
  isChecked = true;

  constructor(
    private alnService: AlnService,
    private listAln: ListAlnComponent,
    public datepipe: DatePipe
  ) {}

  ngOnInit() {
    this.approveAlnData = this.alnService.approveAlnData;
    this.comment = this.alnService.approvalComment;
    this.approvalDate =
      this.datepipe.transform(
        this.alnService.approvalSubmissionDate,
        'yyyy-MM-dd'
      ) ?? '';
    this.isRejecting = this.alnService.isRejecting;
  }

  previous() {
    this.listAln.sectionActive = 'approve';
  }

  cancel() {
    this.listAln.sectionActive = 'list';
  }

  submit() {
    if (this.alnService.isRejecting) {
      this.alnService.rejectALN(this.approveAlnData.trackingNumber).subscribe(
        (response: any) => {
          this.alnService.confirmApproveAlnResponse = response;
          this.listAln.sectionActive = 'approve-confirmation';
        },
        (error: any) => {
          this.listAln.sectionActive = 'approve-confirmation';
        }
      );
    } else {
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
}
