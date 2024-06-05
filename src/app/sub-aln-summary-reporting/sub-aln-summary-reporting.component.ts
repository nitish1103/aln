import { Component } from '@angular/core';
import { AlnSubProgramService } from '../services/aln-sub-program.service';
import { PERFORMANCE_REPORT_TYPES } from '../services/aln-sub.interface';
import { SubAlnSummaryComponent } from '../sub-aln-summary/sub-aln-summary.component';

@Component({
  selector: 'app-sub-aln-summary-reporting',
  templateUrl: './sub-aln-summary-reporting.component.html',
  styleUrl: './sub-aln-summary-reporting.component.scss',
})
export class SubAlnSummaryReportingComponent {
  summaryReportingData: any = {};
  performanceReport = '';

  constructor(private alnSubService: AlnSubProgramService, private readonly summaryComponent: SubAlnSummaryComponent) {}

  ngOnInit() {
    this.summaryReportingData = this.alnSubService.reportingSubALN;
    this.performanceReport = PERFORMANCE_REPORT_TYPES.filter((report:any) => report.PERF_RPT_TYPE_CD == this.summaryReportingData.performaceReport)[0].PERF_RPT_TYPE;

  }

  previous() {
    this.summaryComponent.tabActive = 'programOffice';
  }

  next() {
    this.summaryComponent.tabActive = 'costSharing';
  }
}
