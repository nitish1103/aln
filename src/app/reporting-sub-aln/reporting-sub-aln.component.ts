import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { CreateSubAlnComponent } from '../create-sub-aln/create-sub-aln.component';
import { AlnSubProgramService } from '../services/aln-sub-program.service';
import { PERFORMANCE_REPORT_TYPES } from '../services/aln-sub.interface';
import { SubAlnComponent } from '../sub-aln/sub-aln.component';

@Component({
  selector: 'app-reporting-sub-aln',
  templateUrl: './reporting-sub-aln.component.html',
  styleUrl: './reporting-sub-aln.component.scss',
})
export class ReportingSubAlnComponent {
  performanceReports = PERFORMANCE_REPORT_TYPES;

  programFinancialReports:any[] = [];
  finalPerformceReport = false;

  reportingSubALNForm = new FormGroup({
    fiscalYear: new FormControl('2024', [Validators.required]),
    alnSubProgram: new FormControl('84.002A', [Validators.required]),
    awardType: new FormControl('Discretinary', Validators.required),
    performaceReport: new FormControl('', Validators.required),
    numberPerBudgetPeriod: new FormControl('', Validators.required),
    programFinancialReport: new FormControl('', Validators.required)
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

    if (this.subALnService.reportingSubALN.performaceReport != '') {
      this.programFinancialReports = this.subALnService.programFinancialReports;
      this.finalPerformceReport = this.subALnService.finalPerformceReport;
      this.reportingSubALNForm.patchValue({
        performaceReport: this.subALnService.reportingSubALN.performaceReport,
        numberPerBudgetPeriod: this.subALnService.reportingSubALN.numberPerBudgetPeriod,
        programFinancialReport: this.subALnService.reportingSubALN.programFinancialReport
      })
    }
  }

  setFinancialReport(report:string, event: MatCheckboxChange) {
    this.reportingSubALNForm.patchValue({
      programFinancialReport: report
    })

    if (event.checked) {
      this.programFinancialReports.push(report)
    } else {
      this.programFinancialReports = this.programFinancialReports.filter((rep:any) => rep !== report);
    }

    
  }

  setFinalPerformanceReport(event: MatCheckboxChange) {
    if (event.checked) {
      this.finalPerformceReport = true;
    } else {
      this.finalPerformceReport = false;
    }
  }

  save() {
    this.subALnService.finalPerformceReport = this.finalPerformceReport;
    this.subALnService.programFinancialReports = this.programFinancialReports;
    this.subALnService.reportingSubALN.performaceReport =
      this.reportingSubALNForm.value.performaceReport ?? '';
    this.subALnService.reportingSubALN.numberPerBudgetPeriod =
      this.reportingSubALNForm.value.numberPerBudgetPeriod ?? '';
    this.subALnService.reportingSubALN.programFinancialReport =
      this.reportingSubALNForm.value.programFinancialReport ?? '';
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
