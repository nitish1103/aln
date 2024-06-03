import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateSubAlnComponent } from '../create-sub-aln/create-sub-aln.component';
import { AlnSubProgramService } from '../services/aln-sub-program.service';
import { SubAlnComponent } from '../sub-aln/sub-aln.component';

@Component({
  selector: 'app-program-office-aln',
  templateUrl: './program-office-aln.component.html',
  styleUrl: './program-office-aln.component.scss',
})
export class ProgramOfficeAlnComponent {
  programOfficeSubALNForm = new FormGroup({
    fiscalYear: new FormControl('2024', [Validators.required]),
    alnSubProgram: new FormControl('84.002A', [Validators.required]),
    awardType: new FormControl('Discretinary', Validators.required),
    primaryProgramOffice: new FormControl('', Validators.required),
    primaryProgramOfficeDivison: new FormControl('', Validators.required),
    subProgramContact: new FormControl('', Validators.required),
    secondaryProgramOffice: new FormControl('', Validators.required),
  });

  submitted = false;

  constructor(
    private readonly createSubAlnComponent: CreateSubAlnComponent,
    private readonly subAlnComponent: SubAlnComponent,
    private readonly subALnService: AlnSubProgramService
  ) {}

  ngOnInit() {
    this.programOfficeSubALNForm.patchValue({
      fiscalYear: this.subALnService.createSubALN.fiscalYear,
      alnSubProgram: this.subALnService.createSubALN.alnNumber,
      awardType: this.subALnService.createSubALN.awardType,
    });

    if (this.subALnService.programOfficeSubALN.primaryProgramOffice != '') {
      this.programOfficeSubALNForm.patchValue({
        primaryProgramOffice: this.subALnService.programOfficeSubALN.primaryProgramOffice,
        primaryProgramOfficeDivison: this.subALnService.programOfficeSubALN.primaryProgramOfficeDivison,
        subProgramContact: this.subALnService.programOfficeSubALN.subProgramContact,
        secondaryProgramOffice: this.subALnService.programOfficeSubALN.secondaryProgramOffice
      });
    }
  }

  save() {
    this.subALnService.programOfficeSubALN.primaryProgramOffice =
      this.programOfficeSubALNForm.value.primaryProgramOffice ?? '';
    this.subALnService.programOfficeSubALN.primaryProgramOfficeDivison =
      this.programOfficeSubALNForm.value.primaryProgramOfficeDivison ?? '';
    this.subALnService.programOfficeSubALN.subProgramContact =
      this.programOfficeSubALNForm.value.subProgramContact ?? '';
    this.subALnService.programOfficeSubALN.secondaryProgramOffice =
      this.programOfficeSubALNForm.value.secondaryProgramOffice ?? '';
    this.createSubAlnComponent.tabActive = 'reporting';
  }

  previous() {
    this.createSubAlnComponent.tabActive = 'general';
  }

  goBack() {
    this.createSubAlnComponent.tabActive = '';
    this.subAlnComponent.sectionActive = 'list';
  }
}
