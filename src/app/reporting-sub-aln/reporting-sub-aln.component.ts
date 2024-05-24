import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateSubAlnComponent } from '../create-sub-aln/create-sub-aln.component';
import { AlnSubProgramService } from '../services/aln-sub-program.service';
import { SubAlnComponent } from '../sub-aln/sub-aln.component';

@Component({
  selector: 'app-reporting-sub-aln',
  templateUrl: './reporting-sub-aln.component.html',
  styleUrl: './reporting-sub-aln.component.scss',
})
export class ReportingSubAlnComponent {
  performanceReports = ['Report1', 'Report2', 'Report3'];

  reportingSubALNForm = new FormGroup({
    fiscalYear: new FormControl('2024', [Validators.required]),
    alnSubProgram: new FormControl('84.002A', [Validators.required]),
    awardType: new FormControl('Discretinary', Validators.required),
    performaceReport: new FormControl('', Validators.required),
    numberPerBudgetPeriod: new FormControl('', Validators.required),
  });

  submitted = false;

  constructor(
    private readonly createSubAlnComponent: CreateSubAlnComponent,
    private readonly subAlnComponent: SubAlnComponent,
    private readonly subALnService: AlnSubProgramService
  ) {}

  ngOnInit() {
    this.reportingSubALNForm.patchValue({
      fiscalYear: this.subALnService.createSubALN.fiscalYear,
      alnSubProgram: this.subALnService.createSubALN.alnNumber,
      awardType: this.subALnService.createSubALN.awardType,
    });
  }

  save() {
    this.subALnService.reportingSubALN.performaceReport =
      this.reportingSubALNForm.value.performaceReport ?? '';
    this.subALnService.reportingSubALN.numberPerBudgetPeriod =
      this.reportingSubALNForm.value.numberPerBudgetPeriod ?? '';
    this.createSubAlnComponent.tabActive = 'costSharing';
  }

  previous() {
    this.createSubAlnComponent.tabActive = 'programOffice';
  }

  goBack() {
    this.createSubAlnComponent.tabActive = '';
    this.subAlnComponent.sectionActive = 'list';
  }
}
