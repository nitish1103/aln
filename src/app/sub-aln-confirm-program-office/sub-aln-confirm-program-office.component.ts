import { Component } from '@angular/core';
import { AlnSubProgramService } from '../services/aln-sub-program.service';
import { SubAlnConfirmComponent } from '../sub-aln-confirm/sub-aln-confirm.component';

@Component({
  selector: 'app-sub-aln-confirm-program-office',
  templateUrl: './sub-aln-confirm-program-office.component.html',
  styleUrl: './sub-aln-confirm-program-office.component.scss',
})
export class SubAlnConfirmProgramOfficeComponent {
  confirmProgramOfficeData: any = {};

  constructor(private alnSubService: AlnSubProgramService,private readonly subALnConfirmComponent: SubAlnConfirmComponent) {}

  ngOnInit() {
    this.confirmProgramOfficeData = this.alnSubService.programOfficeSubALN;
  }

  previous() {
    this.subALnConfirmComponent.tabActive = 'general';
  }

  next() {
    this.subALnConfirmComponent.tabActive = 'reporting';
  }
}
