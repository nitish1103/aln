import { Component, Input, ViewChild } from '@angular/core';
import { ListAlnComponent } from '../list-aln/list-aln.component';
import { AlnService } from '../services/aln-service';
import { DatePipe } from '@angular/common';
import { MatStepper } from '@angular/material/stepper';
import { ApproveComponent } from '../approve/approve.component';

@Component({
  selector: 'app-approval-summary',
  templateUrl: './approval-summary.component.html',
  styleUrl: './approval-summary.component.scss',
})
export class ApprovalSummaryComponent {
  @Input() stepper!: MatStepper;

  approveAlnData: any;
  approvalDate = '';
  markActive = true;
  orderActive = true;
  comment = '';
  isRejecting = false;
  btnvalue = 1;
  isChecked = true;
  isSaving = false;

  constructor(
    private alnService: AlnService,
    private listAln: ListAlnComponent,
    public datepipe: DatePipe,
    private readonly approveComponent: ApproveComponent
  ) {}

  ngOnInit() {
    this.markActive = this.alnService.markActive;
    this.orderActive = this.alnService.orderActive;
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
    this.approveComponent.sectionActive = 'approve';
    this.stepper.previous();
  }

  cancel() {
    this.listAln.sectionActive = 'list';
  }

  submit() {
    this.isSaving = true;
    if (this.alnService.isRejecting) {
      this.alnService.rejectALN(this.approveAlnData.trackingNumber).subscribe(
        (response: any) => {
          this.isSaving = false;
          this.alnService.confirmApproveAlnResponse = response;
          this.approveComponent.sectionActive = 'confirm';
          this.stepper.next();
        },
        (error: any) => {
          this.isSaving = false;
          this.approveComponent.sectionActive = 'confirm';
          this.stepper.next();
        }
      );
    } else {
      this.alnService.approveALN(this.approveAlnData.trackingNumber).subscribe(
        (response: any) => {
          this.isSaving = false;
          this.alnService.confirmApproveAlnResponse = response;
          this.approveComponent.sectionActive = 'confirm';
          this.stepper.next();
        },
        (error: any) => {
          this.isSaving = false;
          this.approveComponent.sectionActive = 'confirm';
          this.stepper.next();
        }
      );
    }
  }
}
