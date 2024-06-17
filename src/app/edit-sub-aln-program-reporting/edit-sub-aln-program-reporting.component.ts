import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { EditSubAlnComponent } from '../edit-sub-aln/edit-sub-aln.component';
import { AlnSubProgramService } from '../services/aln-sub-program.service';
import { PERFORMANCE_REPORT_TYPES } from '../services/aln-sub.interface';
import { SubAlnComponent } from '../sub-aln/sub-aln.component';

@Component({
  selector: 'app-edit-sub-aln-program-reporting',
  templateUrl: './edit-sub-aln-program-reporting.component.html',
  styleUrl: './edit-sub-aln-program-reporting.component.scss'
})
export class EditSubAlnProgramReportingComponent {
  performanceReports = PERFORMANCE_REPORT_TYPES;
  fiscalYear = '';
  alnSubProgram = '';
  awardType = '';

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
    private readonly subAln: SubAlnComponent,
    private readonly editSubAlnComponent: EditSubAlnComponent,
    public readonly subALnService: AlnSubProgramService
  ) {}

  ngOnInit() {
    this.fiscalYear = this.subALnService.createSubALN.fiscalYear;
    this.alnSubProgram = this.subALnService.createSubALN.alnNumber;
    this.awardType = this.subALnService.createSubALN.awardDescription;

    if (this.subALnService.reportingSubALN.isEditing) {
      this.programFinancialReports = this.subALnService.programFinancialReports;
      this.finalPerformceReport = this.subALnService.finalPerformceReport;
      this.reportingSubALNForm.patchValue({
        performaceReport: this.subALnService.reportingSubALN.performaceReport,
        numberPerBudgetPeriod: this.subALnService.reportingSubALN.numberPerBudgetPeriod,
        programFinancialReport: this.subALnService.reportingSubALN.programFinancialReport
      })
    } else {
      this.programFinancialReports = this.subALnService.programFinancialReports;
      this.finalPerformceReport = this.subALnService.subAlnData.reporting.finalPerformanceReport;
      this.reportingSubALNForm.patchValue({
        performaceReport: this.subALnService.subAlnData.reporting.performanceReports.performanceReportsCd,
        numberPerBudgetPeriod: this.subALnService.subAlnData.reporting.numReportsPerBudgetPeriod,
        programFinancialReport: this.subALnService.subAlnData.reporting.programFinancialReports.progFinancialReportsCd
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
    this.subALnService.reportingSubALN.isEditing = true;
    this.subALnService.finalPerformceReport = this.finalPerformceReport;
    this.subALnService.programFinancialReports = this.programFinancialReports;
    this.subALnService.reportingSubALN.performaceReport =
      this.reportingSubALNForm.value.performaceReport ?? '';
    this.subALnService.reportingSubALN.numberPerBudgetPeriod =
      this.reportingSubALNForm.value.numberPerBudgetPeriod ?? '';
    this.subALnService.reportingSubALN.programFinancialReport =
      this.reportingSubALNForm.value.programFinancialReport ?? '';
    this.editSubAlnComponent.tabActive = 'costSharing';
  }

  previous() {
    this.editSubAlnComponent.tabActive = 'programOffice';
  }

  goBack() {
    this.editSubAlnComponent.tabActive = '';
    this.subAln.sectionActive = 'list';
  }
}
