import { Component, Input } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-sub-aln-confirm',
  templateUrl: './sub-aln-confirm.component.html',
  styleUrl: './sub-aln-confirm.component.scss',
})
export class SubAlnConfirmComponent {
  @Input() stepper!: MatStepper;

  tabActive = 'general';
}
