import { Component } from '@angular/core';
import { AlnSubProgramService } from '../services/aln-sub-program.service';

@Component({
  selector: 'app-sub-aln-confirm-program-office',
  templateUrl: './sub-aln-confirm-program-office.component.html',
  styleUrl: './sub-aln-confirm-program-office.component.scss',
})
export class SubAlnConfirmProgramOfficeComponent {
  confirmProgramOfficeData: any = {};

  constructor(private alnSubService: AlnSubProgramService) {}

  ngOnInit() {
    this.confirmProgramOfficeData = this.alnSubService.programOfficeSubALN;
  }
}
