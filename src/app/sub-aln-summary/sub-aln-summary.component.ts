import { Component, Input } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-sub-aln-summary',
  templateUrl: './sub-aln-summary.component.html',
  styleUrl: './sub-aln-summary.component.scss',
})
export class SubAlnSummaryComponent {
  @Input() stepper!: MatStepper;

  tabActive = 'general';
}
