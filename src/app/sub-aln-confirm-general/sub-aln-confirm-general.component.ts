import { Component } from '@angular/core';
import { AlnSubProgramService } from '../services/aln-sub-program.service';

@Component({
  selector: 'app-sub-aln-confirm-general',
  templateUrl: './sub-aln-confirm-general.component.html',
  styleUrl: './sub-aln-confirm-general.component.scss',
})
export class SubAlnConfirmGeneralComponent {
  summaryGeneralData: any = {};

  constructor(private alnSubService: AlnSubProgramService) {}

  ngOnInit() {
    this.summaryGeneralData = this.alnSubService.generalSubALN;
  }
}
