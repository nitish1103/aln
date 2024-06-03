import { Component } from '@angular/core';
import { AlnSubProgramService } from '../services/aln-sub-program.service';
import { PAYMENT_METHODS } from '../services/aln-sub.interface';

@Component({
  selector: 'app-sub-aln-summary-cost-sharing',
  templateUrl: './sub-aln-summary-cost-sharing.component.html',
  styleUrl: './sub-aln-summary-cost-sharing.component.scss',
})
export class SubAlnSummaryCostSharingComponent {
  summaryCostSharingData: any = {};
  paymentMethod = '';

  constructor(private alnSubService: AlnSubProgramService) {}

  ngOnInit() {
    this.summaryCostSharingData = this.alnSubService.costSharingSubAln;
    this.paymentMethod = PAYMENT_METHODS.filter((pay:any) => pay.PAYMENT_METHOD_CD == this.summaryCostSharingData.paymentMethod)[0].PAYMENT_METHOD;

  }
}
