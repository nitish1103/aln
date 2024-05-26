import { Component } from '@angular/core';
import { AlnSubProgramService } from '../services/aln-sub-program.service';

@Component({
  selector: 'app-sub-aln-confirm-reporting',
  templateUrl: './sub-aln-confirm-reporting.component.html',
  styleUrl: './sub-aln-confirm-reporting.component.scss',
})
export class SubAlnConfirmReportingComponent {
  confirmReportingData: any = {};

  constructor(private alnSubService: AlnSubProgramService) {}

  ngOnInit() {
    this.confirmReportingData = this.alnSubService.reportingSubALN;
  }
}
