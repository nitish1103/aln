import { Component } from '@angular/core';
import { AlnSubProgramService } from '../services/aln-sub-program.service';
import { FED_OFFICE_CODES, FED_OFFICE_DIV_CODES } from '../services/aln-sub.interface';
import { SubAlnSummaryComponent } from '../sub-aln-summary/sub-aln-summary.component';

@Component({
  selector: 'app-sub-aln-summary-program-office',
  templateUrl: './sub-aln-summary-program-office.component.html',
  styleUrl: './sub-aln-summary-program-office.component.scss',
})
export class SubAlnSummaryProgramOfficeComponent {
  summaryProgramOfficeData: any = {};

  primaryProgramOffice = '';
  primaryProgramOfficeDiv = '';
  subProgramContact = '';

  constructor(private alnSubService: AlnSubProgramService,private readonly summaryComponent: SubAlnSummaryComponent) {}

  ngOnInit() {
    this.summaryProgramOfficeData = this.alnSubService.programOfficeSubALN;
    this.primaryProgramOffice = FED_OFFICE_CODES.filter((fedCode:any) => fedCode.FED_OFFICE_SHORT_NM === this.alnSubService.programOfficeSubALN.primaryProgramOffice)[0].FED_OFFICE_NM;
    this.primaryProgramOfficeDiv = FED_OFFICE_DIV_CODES.filter((fedCode:any) => fedCode.FED_OFFICE_DIV_SHORT_NM === this.alnSubService.programOfficeSubALN.primaryProgramOfficeDivison)[0].FED_OFFICE_NM;
    this.subProgramContact = this.alnSubService.divPersons.filter((person:any) => person.progOfficeDivPersonalId.progOfficeDivPersonId == this.alnSubService.programOfficeSubALN.subProgramContact)[0].programOfficeDivPersonName;
  }

  previous() {
    this.summaryComponent.tabActive = 'general';
  }

  next() {
    this.summaryComponent.tabActive = 'reporting';
  }
}
