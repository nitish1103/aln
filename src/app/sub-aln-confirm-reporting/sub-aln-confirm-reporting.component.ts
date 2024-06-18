import { Component } from '@angular/core';
import { AlnSubProgramService } from '../services/aln-sub-program.service';
import { SubAlnConfirmComponent } from '../sub-aln-confirm/sub-aln-confirm.component';

@Component({
  selector: 'app-sub-aln-confirm-reporting',
  templateUrl: './sub-aln-confirm-reporting.component.html',
  styleUrl: './sub-aln-confirm-reporting.component.scss',
})
export class SubAlnConfirmReportingComponent {
  confirmReportingData: any = {};
  isEditing = false;

  constructor(private alnSubService: AlnSubProgramService,private readonly subALnConfirmComponent: SubAlnConfirmComponent) {}

  ngOnInit() {
    this.isEditing = this.alnSubService.isEditing;
    this.confirmReportingData = this.alnSubService.reportingSubALN;
  }

  previous() {
    this.subALnConfirmComponent.tabActive = 'programOffice';
  }

  next() {
    this.subALnConfirmComponent.tabActive = 'costSharing';
  }
}
