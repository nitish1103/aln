import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ListAlnComponent } from '../list-aln/list-aln.component';
import { AlnService } from '../services/aln-service';

@Component({
  selector: 'app-edit-aln-summary',
  templateUrl: './edit-aln-summary.component.html',
  styleUrl: './edit-aln-summary.component.scss',
})
export class EditAlnSummaryComponent {
  editAlnData: any;
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
    this.markActive = this.alnService.markActive;
    this.orderActive = this.alnService.orderActive;
    this.editAlnData = this.alnService.editAlnData;
    this.comment = this.alnService.approvalComment;
    this.approvalDate =
      this.datepipe.transform(
        this.alnService.approvalSubmissionDate,
        'yyyy-MM-dd'
      ) ?? '';
    this.isRejecting = this.alnService.isRejecting;
  }

  previous() {
    this.listAln.sectionActive = 'edit';
  }

  cancel() {
    this.alnService.isEditing = false;
    this.listAln.sectionActive = 'list';
  }

  submit() {
    if (this.alnService.editAlnData.status === 'Draft') {
      this.alnService.editAlnData.status = 'Submit For Approval';
    }
    this.alnService.editAln(this.alnService.editAlnData).subscribe(
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
