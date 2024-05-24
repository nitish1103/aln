import { Component } from '@angular/core';
import { AlnSubProgramService } from '../services/aln-sub-program.service';

@Component({
  selector: 'app-sub-aln-summary-program-office',
  templateUrl: './sub-aln-summary-program-office.component.html',
  styleUrl: './sub-aln-summary-program-office.component.scss',
})
export class SubAlnSummaryProgramOfficeComponent {
  summaryProgramOfficeData: any = {};

  constructor(private alnSubService: AlnSubProgramService) {}

  ngOnInit() {
    this.summaryProgramOfficeData = this.alnSubService.programOfficeSubALN;
  }
}
