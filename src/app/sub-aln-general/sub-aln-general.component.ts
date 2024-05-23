import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateSubAlnComponent } from '../create-sub-aln/create-sub-aln.component';
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
    private readonly subAlnComponent: SubAlnComponent
  ) {}

  save() {
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
