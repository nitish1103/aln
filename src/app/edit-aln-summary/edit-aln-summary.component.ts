import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { EditComponent } from '../edit/edit.component';
import { ListAlnComponent } from '../list-aln/list-aln.component';
import { AlnService } from '../services/aln-service';

@Component({
  selector: 'app-edit-aln-summary',
  templateUrl: './edit-aln-summary.component.html',
  styleUrl: './edit-aln-summary.component.scss',
})
export class EditAlnSummaryComponent {
  @Input() stepper!: MatStepper;

  editAlnData: any;
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
    private readonly editComponent: EditComponent
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
    this.editComponent.sectionActive = 'edit';
    this.stepper.previous();
  }

  cancel() {
    this.alnService.isEditing = false;
    this.listAln.sectionActive = 'list';
  }

  submit() {
    this.isSaving = true;
    if (this.alnService.editAlnData.status === 'Draft') {
      this.alnService.editAlnData.status = 'Submit For Approval';
    }
    this.alnService.editAln(this.alnService.editAlnData).subscribe(
      (response: any) => {
        this.alnService.confirmApproveAlnResponse = response;
        this.isSaving = false;
        this.editComponent.sectionActive = 'confirm';
        this.stepper.next();
      },
      (error: any) => {
        this.isSaving = false;
        this.editComponent.sectionActive = 'confirm';
        this.stepper.next();
      }
    );
  }
}
