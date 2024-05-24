import { Component } from '@angular/core';
import { AlnSubProgramService } from '../services/aln-sub-program.service';

@Component({
  selector: 'app-sub-aln-summary-reporting',
  templateUrl: './sub-aln-summary-reporting.component.html',
  styleUrl: './sub-aln-summary-reporting.component.scss',
})
export class SubAlnSummaryReportingComponent {
  summaryReportingData: any = {};

  constructor(private alnSubService: AlnSubProgramService) {}

  ngOnInit() {
    this.summaryReportingData = this.alnSubService.reportingSubALN;
  }
}
