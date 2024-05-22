import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from '../create/create.component';
import { ListAlnComponent } from '../list-aln/list-aln.component';
import { AlnService } from '../services/aln-service';
import { SubAlnProgramComponent } from '../sub-aln-program/sub-aln-program.component';
import { SubAlnComponent } from '../sub-aln/sub-aln.component';

@Component({
  selector: 'app-create-sub-aln',
  templateUrl: './create-sub-aln.component.html',
  styleUrl: './create-sub-aln.component.scss',
})
export class CreateSubAlnComponent {
  selectedFile!: File;
  isSaving = false;
  trackingNumber = '';
  submitted = false;

  createSubALNForm = new FormGroup({
    fiscalYear: new FormControl('', [Validators.required]),
    alnCode: new FormControl('', [Validators.required]),
    alnNumber: new FormControl('', [Validators.required]),
    subProgramId: new FormControl('', [Validators.required]),
    awardType: new FormControl('', [Validators.required]),
    executiveOrder: new FormControl(false),
  });

  selectedDesignatorCode = '84';
  agencyDesignatorCodes = [
    '10',
    '11',
    '15',
    '16',
    '17',
    '23',
    '45',
    '47',
    '84',
    '93',
  ];

  awardTypes = ['Award 1', 'Award 2', 'Award 3'];

  constructor(
    private readonly subAln: SubAlnComponent,
    public dialog: MatDialog,
    private readonly subAlnComponent: SubAlnProgramComponent
  ) {}

  ngOnInit() {}

  save() {
    this.submitted = true;
    this.subAlnComponent.tabActive = 'general';
  }

  goBack() {
    this.subAln.sectionActive = 'list';
  }

  previous() {
    this.subAln.sectionActive = 'list';
  }
}
