import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { AlnService } from '../services/aln-service';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrl: './confirm-modal.component.scss',
})
export class ConfirmModalComponent {
  isDeleting = false;

  constructor(
    private readonly alnService: AlnService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: { aln: any },
    public deleteAlnDialogRef: MatDialogRef<ConfirmModalComponent>
  ) {}

  public deleteAln() {
    this.isDeleting = true;
    this.deleteAlnDialogRef.disableClose = true;

    this.alnService.deleteALN(this.data.aln.trackingNumber).subscribe(
      (result) => {
        this.deleteAlnDialogRef.close('success');
        this.isDeleting = false;
      },
      (error) => {
        console.log('=============error', error);
        this.isDeleting = false;
        this.deleteAlnDialogRef.close('error');
      }
    );
  }

  public closeDialog() {
    this.deleteAlnDialogRef.close('cancel');
  }
}
