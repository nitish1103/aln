import { Component, Input } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { AlnSubProgramService } from '../services/aln-sub-program.service';
import { SubAlnSummaryComponent } from '../sub-aln-summary/sub-aln-summary.component';
import { SubAlnComponent } from '../sub-aln/sub-aln.component';

@Component({
  selector: 'app-sub-aln-confirm-law',
  templateUrl: './sub-aln-confirm-law.component.html',
  styleUrl: './sub-aln-confirm-law.component.scss',
})
export class SubAlnConfirmLawComponent {
  confirmLawData: any = {};

  constructor(
    private alnSubService: AlnSubProgramService,
    private readonly subAlnComponent: SubAlnComponent,
    private readonly router: Router,
    private readonly summaryComponent: SubAlnSummaryComponent
  ) {}

  ngOnInit() {
    this.confirmLawData = this.alnSubService.lawSubAln;
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  done() {
    this.subAlnComponent.sectionActive = 'list';
  }
}
