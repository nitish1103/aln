import { Component } from '@angular/core';
import { AlnSubProgramService } from '../services/aln-sub-program.service';
import { ABSTRACT_TYPES, REVIEW_METHODS, SUB_AWARD_TYPES } from '../services/aln-sub.interface';
import { SubAlnSummaryComponent } from '../sub-aln-summary/sub-aln-summary.component';
import { SubAlnProgramComponent } from '../sub-aln-program/sub-aln-program.component';

@Component({
  selector: 'app-sub-aln-summary-general',
  templateUrl: './sub-aln-summary-general.component.html',
  styleUrl: './sub-aln-summary-general.component.scss',
})
export class SubAlnSummaryGeneralComponent {
  summaryGeneralData: any = {};

  awardType = '';
  subAwardType = '';
  reveiwMethod = '';
  abstractType = '';

  constructor(private alnSubService: AlnSubProgramService, 
    private readonly subALnProgram: SubAlnProgramComponent,
    private readonly summaryComponent: SubAlnSummaryComponent) {}

  ngOnInit() {
    this.summaryGeneralData = this.alnSubService.generalSubALN;
    this.awardType = this.alnSubService.createSubALN.awardDescription;
    this.subAwardType = SUB_AWARD_TYPES.filter((subAward:any) => subAward.SUB_AWARD_TYPE_CD == this.summaryGeneralData.subAwardType)[0].SUB_AWARD_TYPE;
    this.reveiwMethod = REVIEW_METHODS.filter((review:any) => review.REVIEW_METHOD_CD == this.summaryGeneralData.reveiwMethod)[0].REVIEW_METHOD;
    this.abstractType = ABSTRACT_TYPES.filter((absType:any) => absType.ABSTRACT_TYPE_CD == this.summaryGeneralData.abstractType)[0].ABSTRACT_TYPE;
  }

  previous() {
    this.subALnProgram.sectionActive = 'create';
    this.summaryComponent.stepper.previous();
  }

  next() {
    this.summaryComponent.tabActive = 'programOffice';
  }
}
