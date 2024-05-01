import { Component } from '@angular/core';
import { ListAlnComponent } from '../list-aln/list-aln.component';
import { AlnService } from '../services/aln-service';

@Component({
  selector: 'app-approve-aln',
  templateUrl: './approve-aln.component.html',
  styleUrl: './approve-aln.component.scss',
})
export class ApproveAlnComponent {
  approveAlnData: any;
  approvalDate = '';
  markActive = true;
  orderActive = true;
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

  approve() {
    this.alnService.isRejecting = false;
    this.alnService.approvalSubmissionDate = this.approvalDate;
    this.alnService.approvalComment = this.comment;
    this.listAln.sectionActive = 'approve-summary';
  }

  reject() {
    this.alnService.isRejecting = true;
    this.alnService.approvalSubmissionDate = this.approvalDate;
    this.alnService.approvalComment = this.comment;
    this.listAln.sectionActive = 'approve-summary';
  }
}
