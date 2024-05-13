import { Component, Input } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { DeleteComponent } from '../delete/delete.component';
import { ListAlnComponent } from '../list-aln/list-aln.component';
import { AlnService } from '../services/aln-service';

@Component({
  selector: 'app-delete-aln-summary',
  templateUrl: './delete-aln-summary.component.html',
  styleUrl: './delete-aln-summary.component.scss',
})
export class DeleteAlnSummaryComponent {
  @Input() stepper!: MatStepper;

  deleteAlnData: any;
  btnvalue = 1;
  isChecked = true;

  constructor(
    private alnService: AlnService,
    private listAln: ListAlnComponent,
    private readonly deleteComponent: DeleteComponent
  ) {}

  ngOnInit() {
    this.deleteAlnData = this.alnService.deleteAlnData;
  }

  previous() {
    this.deleteComponent.sectionActive = 'delete';
    this.stepper.previous();
  }

  cancel() {
    this.listAln.sectionActive = 'list';
  }

  submit() {
    this.alnService.deleteALN(this.deleteAlnData.trackingNumber).subscribe(
      (response: any) => {
        this.alnService.confirmApproveAlnResponse = response;
        this.stepper.next();
        this.deleteComponent.sectionActive = 'confirm';
      },
      (error: any) => {
        this.stepper.next();
        this.deleteComponent.sectionActive = 'confirm';
      }
    );
  }
}
