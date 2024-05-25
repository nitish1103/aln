import { Component } from '@angular/core';
import { AlnSubProgramService } from '../services/aln-sub-program.service';

@Component({
  selector: 'app-sub-aln-summary-cost-sharing',
  templateUrl: './sub-aln-summary-cost-sharing.component.html',
  styleUrl: './sub-aln-summary-cost-sharing.component.scss',
})
export class SubAlnSummaryCostSharingComponent {
  summaryCostSharingData: any = {};

  constructor(private alnSubService: AlnSubProgramService) {}

  ngOnInit() {
    this.summaryCostSharingData = this.alnSubService.costSharingSubAln;
  }
}
