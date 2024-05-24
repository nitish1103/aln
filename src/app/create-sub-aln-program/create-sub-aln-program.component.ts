import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CreateSubAlnComponent } from '../create-sub-aln/create-sub-aln.component';
import { AlnSubProgramService } from '../services/aln-sub-program.service';
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
    private readonly createSubAlnComponent: CreateSubAlnComponent,
    private readonly subALnService: AlnSubProgramService
  ) {}

  ngOnInit() {}

  save() {
    this.submitted = true;
    const { fiscalYear, alnCode, alnNumber, subProgramId, awardType } =
      this.createSubALNForm.value;
    this.subALnService.createSubALN.fiscalYear = fiscalYear ?? '';
    this.subALnService.createSubALN.alnCode = alnCode ?? '';
    this.subALnService.createSubALN.alnNumber = alnNumber ?? '';
    this.subALnService.createSubALN.subProgramId = subProgramId ?? '';
    this.subALnService.createSubALN.awardType = awardType ?? '';

    this.createSubAlnComponent.tabActive = 'general';
  }

  goBack() {
    this.subAln.sectionActive = 'list';
  }

  previous() {
    this.subAln.sectionActive = 'list';
  }
}
