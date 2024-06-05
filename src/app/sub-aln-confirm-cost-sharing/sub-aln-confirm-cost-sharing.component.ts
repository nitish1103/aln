import { Component } from '@angular/core';
import { AlnSubProgramService } from '../services/aln-sub-program.service';
import { SubAlnConfirmComponent } from '../sub-aln-confirm/sub-aln-confirm.component';

@Component({
  selector: 'app-sub-aln-confirm-cost-sharing',
  templateUrl: './sub-aln-confirm-cost-sharing.component.html',
  styleUrl: './sub-aln-confirm-cost-sharing.component.scss',
})
export class SubAlnConfirmCostSharingComponent {
  confirmCostSharingData: any = {};

  constructor(private alnSubService: AlnSubProgramService, private readonly subALnConfirmComponent: SubAlnConfirmComponent) {}

  ngOnInit() {
    this.confirmCostSharingData = this.alnSubService.costSharingSubAln;
  }

  previous() {
    this.subALnConfirmComponent.tabActive = 'reporting';
  }

  next() {
    this.subALnConfirmComponent.tabActive = 'law';
  }
}
