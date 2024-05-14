import { Component, Input, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { ApproveComponent } from '../approve/approve.component';
import { ListAlnComponent } from '../list-aln/list-aln.component';
import { AlnService } from '../services/aln-service';

@Component({
  selector: 'app-approve-aln',
  templateUrl: './approve-aln.component.html',
  styleUrl: './approve-aln.component.scss',
})
export class ApproveAlnComponent {
  @Input() stepper!: MatStepper;

  approveAlnData: any;
  approvalDate = '';
  markActive = true;
  orderActive = true;
  comment = '';
  today = new Date();

  constructor(
    private alnService: AlnService,
    private listAln: ListAlnComponent,
    private readonly approveComponent: ApproveComponent
  ) {}

  ngOnInit() {
    this.approveAlnData = this.alnService.approveAlnData;
    this.comment = this.alnService.approvalComment;
    this.approvalDate = this.alnService.approvalSubmissionDate;
  }

  approve() {
    this.alnService.markActive = this.markActive;
    this.alnService.orderActive = this.orderActive;
    this.alnService.isApproving = true;
    this.alnService.isRejecting = false;
    this.alnService.approvalSubmissionDate = this.approvalDate;
    this.alnService.approvalComment = this.comment;
    this.stepper.next();
    this.approveComponent.sectionActive = 'summary';
  }

  reject() {
    this.alnService.markActive = this.markActive;
    this.alnService.orderActive = this.orderActive;
    this.alnService.isRejecting = true;
    this.alnService.isApproving = false;
    this.alnService.approvalSubmissionDate = this.approvalDate;
    this.alnService.approvalComment = this.comment;
    this.stepper.next();
    this.approveComponent.sectionActive = 'summary';
  }
}
