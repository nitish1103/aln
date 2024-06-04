import { Component, Input } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { AlnSubProgramService } from '../services/aln-sub-program.service';

@Component({
  selector: 'app-sub-aln-summary',
  templateUrl: './sub-aln-summary.component.html',
  styleUrl: './sub-aln-summary.component.scss',
})
export class SubAlnSummaryComponent {
  @Input() stepper!: MatStepper;

  isDiscretionary = false;

  tabActive = 'general';

  constructor(private readonly subAlnService: AlnSubProgramService) {
    this.isDiscretionary = this.subAlnService.isDiscretionary;
  }
}
