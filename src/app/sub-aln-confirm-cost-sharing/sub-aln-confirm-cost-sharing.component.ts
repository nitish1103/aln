import { Component } from '@angular/core';
import { AlnSubProgramService } from '../services/aln-sub-program.service';

@Component({
  selector: 'app-sub-aln-confirm-cost-sharing',
  templateUrl: './sub-aln-confirm-cost-sharing.component.html',
  styleUrl: './sub-aln-confirm-cost-sharing.component.scss',
})
export class SubAlnConfirmCostSharingComponent {
  confirmCostSharingData: any = {};

  constructor(private alnSubService: AlnSubProgramService) {}

  ngOnInit() {
    this.confirmCostSharingData = this.alnSubService.costSharingSubAln;
  }
}
