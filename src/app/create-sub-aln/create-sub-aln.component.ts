import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { CreateComponent } from '../create/create.component';
import { ListAlnComponent } from '../list-aln/list-aln.component';
import { AlnService } from '../services/aln-service';
import { AlnSubProgramService } from '../services/aln-sub-program.service';
import { SubAlnProgramComponent } from '../sub-aln-program/sub-aln-program.component';
import { SubAlnComponent } from '../sub-aln/sub-aln.component';

@Component({
  selector: 'app-create-sub-aln',
  templateUrl: './create-sub-aln.component.html',
  styleUrl: './create-sub-aln.component.scss',
})
export class CreateSubAlnComponent {
  @Input() stepper!: MatStepper;

  selectedFile!: File;
  isSaving = false;
  trackingNumber = '';
  submitted = false;
  tabActive = '';
  isDiscretionary = true;

  constructor(
    private readonly subAln: SubAlnComponent,
    public dialog: MatDialog,
    private readonly subAlnComponent: SubAlnProgramComponent,
    private readonly subAlnService: AlnSubProgramService
  ) {}

  ngOnInit() {
      if (this.subAlnService.lawSubAln.lawName != '') {
        this.tabActive = 'law';
      }
  }

  save() {
    this.submitted = true;
  }

  goBack() {
    this.subAln.sectionActive = 'list';
  }

  previous() {
    this.subAln.sectionActive = 'list';
  }
}
