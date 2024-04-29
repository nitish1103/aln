import { Component } from '@angular/core';
import { AlnService } from '../services/aln-service';

@Component({
  selector: 'app-approve-aln',
  templateUrl: './approve-aln.component.html',
  styleUrl: './approve-aln.component.scss',
})
export class ApproveAlnComponent {
  approveAlnData: any;
  approvalDate = '';
  markActive = false;
  orderActive = false;
  comment = '';

  constructor(private alnService: AlnService) {}

  ngOnInit() {
    this.approveAlnData = this.alnService.approveAlnData;
  }

  approve() {}

  reject() {}
}
