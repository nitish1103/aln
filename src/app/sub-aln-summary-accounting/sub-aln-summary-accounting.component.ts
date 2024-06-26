import { Component } from '@angular/core';
import { AlnSubProgramService } from '../services/aln-sub-program.service';
import { SubAlnSummaryComponent } from '../sub-aln-summary/sub-aln-summary.component';

@Component({
  selector: 'app-sub-aln-summary-accounting',
  templateUrl: './sub-aln-summary-accounting.component.html',
  styleUrl: './sub-aln-summary-accounting.component.scss'
})
export class SubAlnSummaryAccountingComponent {
  summaryAccountingData: any = {};

  awardType = '';
  fiscalYear = '';
  alnSubProgram = '';

  constructor(private alnSubService: AlnSubProgramService, private readonly summaryComponent: SubAlnSummaryComponent) {}

  ngOnInit() {
    this.summaryAccountingData = this.alnSubService.accouting;
    this.awardType = this.alnSubService.createSubALN.awardDescription;
    this.fiscalYear = this.alnSubService.createSubALN.fiscalYear;
    this.alnSubProgram = this.alnSubService.createSubALN.alnNumber;
  }

  previous() {
    this.summaryComponent.tabActive = 'costSharing';
  }

  next() {
    this.summaryComponent.tabActive = 'law';
  }
}
