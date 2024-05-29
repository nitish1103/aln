import { Component, Input } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { CreateSubAlnComponent } from '../create-sub-aln/create-sub-aln.component';
import { AlnSubProgramService } from '../services/aln-sub-program.service';
import { SubAlnProgramComponent } from '../sub-aln-program/sub-aln-program.component';
import { SubAlnComponent } from '../sub-aln/sub-aln.component';

@Component({
  selector: 'app-sub-aln-summary-law',
  templateUrl: './sub-aln-summary-law.component.html',
  styleUrl: './sub-aln-summary-law.component.scss',
})
export class SubAlnSummaryLawComponent {
  @Input() stepper!: MatStepper;
  summarylawData: any = {};

  constructor(
    private readonly subAlnComponent: SubAlnComponent,
    private readonly subALnService: AlnSubProgramService,
    private readonly subALnProgram: SubAlnProgramComponent
  ) {}

  ngOnInit() {
    this.summarylawData = this.subALnService.lawSubAln;
  }

  previous() {
    this.stepper.previous();
  }

  goBack() {
    this.subAlnComponent.sectionActive = 'list';
  }

  continue() {
    this.subALnService.createSubAln().subscribe((response) => {
      this.stepper.next();
      this.subALnProgram.sectionActive = 'confirm';
    }, (error:any) => {
      console.log("===error", error)
    })
  }
}
