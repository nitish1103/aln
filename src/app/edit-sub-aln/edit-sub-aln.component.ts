import { Component, Input } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { AlnSubProgramService } from '../services/aln-sub-program.service';

@Component({
  selector: 'app-edit-sub-aln',
  templateUrl: './edit-sub-aln.component.html',
  styleUrl: './edit-sub-aln.component.scss'
})
export class EditSubAlnComponent {
  @Input() stepper!: MatStepper;

  tabActive = '';
  
  constructor(private readonly subALnService: AlnSubProgramService) {

  }

  ngOnInit() {
    if (this.subALnService.lawSubAln.isEditing) {
      this.tabActive = 'law';
    }
  }

}
