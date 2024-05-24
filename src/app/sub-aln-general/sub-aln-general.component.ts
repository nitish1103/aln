import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateSubAlnComponent } from '../create-sub-aln/create-sub-aln.component';
import { AlnSubProgramService } from '../services/aln-sub-program.service';
import { SubAlnProgramComponent } from '../sub-aln-program/sub-aln-program.component';
import { SubAlnComponent } from '../sub-aln/sub-aln.component';

@Component({
  selector: 'app-sub-aln-general',
  templateUrl: './sub-aln-general.component.html',
  styleUrl: './sub-aln-general.component.scss',
})
export class SubAlnGeneralComponent {
  generalSubALNForm = new FormGroup({
    fiscalYear: new FormControl('2024', [Validators.required]),
    alnSubProgram: new FormControl('84.002A', [Validators.required]),
    awardType: new FormControl('Discretinary', Validators.required),
    subProgramTitle: new FormControl('', Validators.required),
    subProgramPurpose: new FormControl('', Validators.required),
    programWebsite: new FormControl('', Validators.required),
    subAwardType: new FormControl('', Validators.required),
    reveiwMethod: new FormControl('', Validators.required),
    abstractType: new FormControl('', Validators.required),
    performancePeriod: new FormControl('', Validators.required),
    budgetPeriod: new FormControl('', Validators.required),
    liquidationPeriod: new FormControl('', Validators.required),
    suspensionPeriod: new FormControl('', Validators.required),
    percentageThreshold: new FormControl('', Validators.required),
    categoryCode: new FormControl('', Validators.required),
    grantAwardType: new FormControl('', Validators.required),
  });

  submitted = false;

  awardTypes = ['Award1', 'Award2'];
  reviewMethods = ['Review1', 'Review2'];
  abstractTypes = ['Abstract Type1', 'Abstract Type2'];

  constructor(
    private readonly createSubAlnComponent: CreateSubAlnComponent,
    private readonly subAlnComponent: SubAlnComponent,
    private readonly subALnService: AlnSubProgramService
  ) {}

  ngOnInit() {
    this.generalSubALNForm.patchValue({
      fiscalYear: this.subALnService.createSubALN.fiscalYear,
      alnSubProgram: this.subALnService.createSubALN.alnNumber,
      awardType: this.subALnService.createSubALN.awardType,
    });
  }

  save() {
    this.subALnService.generalSubALN.fiscalYear =
      this.generalSubALNForm.value.fiscalYear ?? '';
    this.subALnService.generalSubALN.alnSubProgram =
      this.generalSubALNForm.value.alnSubProgram ?? '';
    this.subALnService.generalSubALN.awardType =
      this.generalSubALNForm.value.awardType ?? '';
    this.subALnService.generalSubALN.subProgramTitle =
      this.generalSubALNForm.value.subProgramTitle ?? '';
    this.subALnService.generalSubALN.subProgramPurpose =
      this.generalSubALNForm.value.subProgramPurpose ?? '';
    this.subALnService.generalSubALN.programWebsite =
      this.generalSubALNForm.value.programWebsite ?? '';
    this.subALnService.generalSubALN.subAwardType =
      this.generalSubALNForm.value.subAwardType ?? '';
    this.subALnService.generalSubALN.reveiwMethod =
      this.generalSubALNForm.value.reveiwMethod ?? '';
    this.subALnService.generalSubALN.abstractType =
      this.generalSubALNForm.value.abstractType ?? '';
    this.subALnService.generalSubALN.performancePeriod =
      this.generalSubALNForm.value.performancePeriod ?? '';
    this.subALnService.generalSubALN.budgetPeriod =
      this.generalSubALNForm.value.budgetPeriod ?? '';
    this.subALnService.generalSubALN.liquidationPeriod =
      this.generalSubALNForm.value.liquidationPeriod ?? '';
    this.subALnService.generalSubALN.suspensionPeriod =
      this.generalSubALNForm.value.suspensionPeriod ?? '';
    this.subALnService.generalSubALN.percentageThreshold =
      this.generalSubALNForm.value.percentageThreshold ?? '';
    this.subALnService.generalSubALN.categoryCode =
      this.generalSubALNForm.value.categoryCode ?? '';
    this.subALnService.generalSubALN.grantAwardType =
      this.generalSubALNForm.value.grantAwardType ?? '';
    this.createSubAlnComponent.tabActive = 'programOffice';
  }

  previous() {
    this.createSubAlnComponent.tabActive = '';
  }

  goBack() {
    this.createSubAlnComponent.tabActive = '';
    this.subAlnComponent.sectionActive = 'list';
  }
}
