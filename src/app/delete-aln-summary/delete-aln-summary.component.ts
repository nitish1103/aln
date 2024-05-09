import { Component } from '@angular/core';
import { ListAlnComponent } from '../list-aln/list-aln.component';
import { AlnService } from '../services/aln-service';

@Component({
  selector: 'app-delete-aln-summary',
  templateUrl: './delete-aln-summary.component.html',
  styleUrl: './delete-aln-summary.component.scss',
})
export class DeleteAlnSummaryComponent {
  deleteAlnData: any;
  btnvalue = 1;
  isChecked = true;

  constructor(
    private alnService: AlnService,
    private listAln: ListAlnComponent
  ) {}

  ngOnInit() {
    this.deleteAlnData = this.alnService.deleteAlnData;
  }

  previous() {
    this.listAln.sectionActive = 'delete';
  }

  cancel() {
    this.listAln.sectionActive = 'list';
  }

  submit() {
    this.alnService.deleteALN(this.deleteAlnData.trackingNumber).subscribe(
      (response: any) => {
        this.alnService.confirmApproveAlnResponse = response;
        this.listAln.sectionActive = 'delete-confirmation';
      },
      (error: any) => {}
    );
  }
}
