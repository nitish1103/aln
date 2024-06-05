import { Component } from '@angular/core';
import { AlnSubProgramService } from '../services/aln-sub-program.service';
import { SubAlnConfirmComponent } from '../sub-aln-confirm/sub-aln-confirm.component';

@Component({
  selector: 'app-sub-aln-confirm-general',
  templateUrl: './sub-aln-confirm-general.component.html',
  styleUrl: './sub-aln-confirm-general.component.scss',
})
export class SubAlnConfirmGeneralComponent {
  summaryGeneralData: any = {};

  constructor(private alnSubService: AlnSubProgramService, private readonly subALnConfirmComponent: SubAlnConfirmComponent) {}

  ngOnInit() {
    this.summaryGeneralData = this.alnSubService.generalSubALN;
  }

  next() {
    this.subALnConfirmComponent.tabActive = 'programOffice';
  }
}
