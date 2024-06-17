import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditSubAlnComponent } from '../edit-sub-aln/edit-sub-aln.component';
import { AlnService } from '../services/aln-service';
import { AlnSubProgramService } from '../services/aln-sub-program.service';
import { SUB_AWARD_TYPES, REVIEW_METHODS, ABSTRACT_TYPES } from '../services/aln-sub.interface';
import { SubAlnComponent } from '../sub-aln/sub-aln.component';

@Component({
  selector: 'app-edit-sub-aln-program-general',
  templateUrl: './edit-sub-aln-program-general.component.html',
  styleUrl: './edit-sub-aln-program-general.component.scss'
})
export class EditSubAlnProgramGeneralComponent {
  fiscalYear = '';
  alnSubProgram = '';
  awardType = '';

  updateGeneralSubALNForm = new FormGroup({
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

  awardTypes = SUB_AWARD_TYPES;
  reviewMethods = REVIEW_METHODS;
  abstractTypes = ABSTRACT_TYPES;

  constructor(
    private readonly subAln: SubAlnComponent,
    public dialog: MatDialog,
    private readonly editSubAlnComponent: EditSubAlnComponent,
    public readonly subALnService: AlnSubProgramService
  ) {}

  ngOnInit() {
    this.updateGeneralSubALNForm.patchValue({
      fiscalYear: this.subALnService.createSubALN.fiscalYear,
      alnSubProgram: this.subALnService.createSubALN.alnNumber,
      awardType: this.subALnService.createSubALN.awardType,
    });

    if (this.subALnService.createSubALN.fiscalYear) {
      this.fiscalYear = this.subALnService.createSubALN.fiscalYear;
      this.alnSubProgram = this.subALnService.createSubALN.alnNumber;
      this.awardType = this.subALnService.createSubALN.awardDescription;

      if (this.subALnService.generalSubALN.isEditing) {
        this.updateGeneralSubALNForm.patchValue({
          subProgramTitle: this.subALnService.generalSubALN.subProgramTitle,
          subProgramPurpose: this.subALnService.generalSubALN.subProgramPurpose,
          programWebsite: this.subALnService.generalSubALN.programWebsite,
          subAwardType: this.subALnService.generalSubALN.subAwardType,
          reveiwMethod: this.subALnService.generalSubALN.reveiwMethod,
          abstractType: this.subALnService.generalSubALN.abstractType,
          performancePeriod: this.subALnService.generalSubALN.performancePeriod,
          budgetPeriod: this.subALnService.generalSubALN.budgetPeriod,
          liquidationPeriod: this.subALnService.generalSubALN.liquidationPeriod,
          suspensionPeriod: this.subALnService.generalSubALN.suspensionPeriod,
          percentageThreshold: this.subALnService.generalSubALN.percentageThreshold,
          categoryCode: this.subALnService.generalSubALN.categoryCode,
          grantAwardType: this.subALnService.generalSubALN.grantAwardType,
        })
      } else {
        this.updateGeneralSubALNForm.patchValue({
          subProgramTitle: this.subALnService.subAlnData.subprogramTitle,
          subProgramPurpose: this.subALnService.subAlnData.subprogramPurpose,
          programWebsite: this.subALnService.subAlnData.programWebsite,
          subAwardType: this.subALnService.subAlnData.subAwardType.subAwardTypeCd,
          reveiwMethod: this.subALnService.subAlnData.reviewMethod.reviewMethodCd,
          abstractType: this.subALnService.subAlnData.abstractType.abstractTypeCd,
          performancePeriod: this.subALnService.subAlnData.performancePeriod,
          budgetPeriod: this.subALnService.subAlnData.numberBudgetPeriods,
          liquidationPeriod: this.subALnService.subAlnData.liquidationPeriod,
          suspensionPeriod: this.subALnService.subAlnData.suspensionPeriod,
          percentageThreshold: this.subALnService.subAlnData.percentageThreshold,
          categoryCode: '',
          grantAwardType: this.subALnService.subAlnData.grantAwardType,
        })
      }
    }
  }

  save() {
    this.subALnService.generalSubALN.fiscalYear =
      this.updateGeneralSubALNForm.value.fiscalYear ?? '';
    this.subALnService.generalSubALN.alnSubProgram =
      this.updateGeneralSubALNForm.value.alnSubProgram ?? '';
    this.subALnService.generalSubALN.awardType =
      this.updateGeneralSubALNForm.value.awardType ?? '';
    this.subALnService.generalSubALN.subProgramTitle =
      this.updateGeneralSubALNForm.value.subProgramTitle ?? '';
    this.subALnService.generalSubALN.subProgramPurpose =
      this.updateGeneralSubALNForm.value.subProgramPurpose ?? '';
    this.subALnService.generalSubALN.programWebsite =
      this.updateGeneralSubALNForm.value.programWebsite ?? '';
    this.subALnService.generalSubALN.subAwardType =
      this.updateGeneralSubALNForm.value.subAwardType ?? '';
    this.subALnService.generalSubALN.reveiwMethod =
      this.updateGeneralSubALNForm.value.reveiwMethod ?? '';
    this.subALnService.generalSubALN.abstractType =
      this.updateGeneralSubALNForm.value.abstractType ?? '';
    this.subALnService.generalSubALN.performancePeriod =
      this.updateGeneralSubALNForm.value.performancePeriod ?? '';
    this.subALnService.generalSubALN.budgetPeriod =
      this.updateGeneralSubALNForm.value.budgetPeriod ?? '';
    this.subALnService.generalSubALN.liquidationPeriod =
      this.updateGeneralSubALNForm.value.liquidationPeriod ?? '';
    this.subALnService.generalSubALN.suspensionPeriod =
      this.updateGeneralSubALNForm.value.suspensionPeriod ?? '';
    this.subALnService.generalSubALN.percentageThreshold =
      this.updateGeneralSubALNForm.value.percentageThreshold ?? '';
    this.subALnService.generalSubALN.categoryCode =
      this.updateGeneralSubALNForm.value.categoryCode ?? '';
    this.subALnService.generalSubALN.grantAwardType =
      this.updateGeneralSubALNForm.value.grantAwardType ?? '';
    this.subALnService.generalSubALN.isEditing = true;
    this.editSubAlnComponent.tabActive = 'programOffice';
  }

  previous() {
    this.editSubAlnComponent.tabActive = '';
  }

  goBack() {
    this.editSubAlnComponent.tabActive = '';
    this.subAln.sectionActive = 'list';
  }
}
