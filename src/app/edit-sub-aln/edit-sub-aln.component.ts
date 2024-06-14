import { Component, Input } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-edit-sub-aln',
  templateUrl: './edit-sub-aln.component.html',
  styleUrl: './edit-sub-aln.component.scss'
})
export class EditSubAlnComponent {
  @Input() stepper!: MatStepper;

  tabActive = '';

}
