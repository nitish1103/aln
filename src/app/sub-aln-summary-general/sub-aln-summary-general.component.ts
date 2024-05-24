import { Component } from '@angular/core';
import { AlnSubProgramService } from '../services/aln-sub-program.service';

@Component({
  selector: 'app-sub-aln-summary-general',
  templateUrl: './sub-aln-summary-general.component.html',
  styleUrl: './sub-aln-summary-general.component.scss',
})
export class SubAlnSummaryGeneralComponent {
  summaryGeneralData: any = {};

  constructor(private alnSubService: AlnSubProgramService) {}

  ngOnInit() {
    this.summaryGeneralData = this.alnSubService.generalSubALN;
  }
}
