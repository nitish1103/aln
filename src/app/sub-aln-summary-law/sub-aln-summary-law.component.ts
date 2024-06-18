import { Component, Input } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { CreateSubAlnComponent } from '../create-sub-aln/create-sub-aln.component';
import { AlnSubProgramService } from '../services/aln-sub-program.service';
import { SubAlnProgramComponent } from '../sub-aln-program/sub-aln-program.component';
import { SubAlnSummaryComponent } from '../sub-aln-summary/sub-aln-summary.component';
import { SubAlnComponent } from '../sub-aln/sub-aln.component';
import { UpdateSubAlnComponent } from '../update-sub-aln/update-sub-aln.component';

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
    private readonly subALnProgram: SubAlnProgramComponent,
    private readonly summaryComponent: SubAlnSummaryComponent,
    private readonly updateSubALnComponent: UpdateSubAlnComponent
  ) {}

  ngOnInit() {
    this.summarylawData = this.subALnService.lawSubAln;
  }

  previous() {
    if (this.subALnService.isDiscretionary) {
      this.summaryComponent.tabActive = 'costSharing';
    } else {
      this.summaryComponent.tabActive = 'accounting';
    }

  }

  goBack() {
    this.subAlnComponent.sectionActive = 'list';
  }

  continue() {
    this.subALnService.createSubAln().subscribe((response) => {
      this.stepper.next();
      if (this.subALnService.isEditing) {
        this.updateSubALnComponent.sectionActive = 'confirm';
      } else {
        this.subALnProgram.sectionActive = 'confirm';
      }
      
    }, (error:any) => {
      this.stepper.next();
      if (this.subALnService.isEditing) {
        this.updateSubALnComponent.sectionActive = 'confirm';
      } else {
        this.subALnProgram.sectionActive = 'confirm';
      }
    })
  }
}
