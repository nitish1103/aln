import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CreateSubAlnComponent } from '../create-sub-aln/create-sub-aln.component';
import { SubAlnProgramComponent } from '../sub-aln-program/sub-aln-program.component';
import { SubAlnComponent } from '../sub-aln/sub-aln.component';

@Component({
  selector: 'app-create-sub-aln-program',
  templateUrl: './create-sub-aln-program.component.html',
  styleUrl: './create-sub-aln-program.component.scss',
})
export class CreateSubAlnProgramComponent {
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
    private readonly createSubAlnComponent: CreateSubAlnComponent
  ) {}

  ngOnInit() {}

  save() {
    this.submitted = true;
    this.createSubAlnComponent.tabActive = 'general';
  }

  goBack() {
    this.subAln.sectionActive = 'list';
  }

  previous() {
    this.subAln.sectionActive = 'list';
  }
}
