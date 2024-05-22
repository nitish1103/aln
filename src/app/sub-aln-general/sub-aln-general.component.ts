import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SubAlnProgramComponent } from '../sub-aln-program/sub-aln-program.component';
import { SubAlnComponent } from '../sub-aln/sub-aln.component';

@Component({
  selector: 'app-sub-aln-general',
  templateUrl: './sub-aln-general.component.html',
  styleUrl: './sub-aln-general.component.scss',
})
export class SubAlnGeneralComponent {
  generalSubALNForm = new FormGroup({
    fiscalYear: new FormControl('', [Validators.required]),
    alnSubProgram: new FormControl('', [Validators.required]),
  });

  submitted = false;

  constructor(
    private readonly subALnProgramComponent: SubAlnProgramComponent,
    private readonly subAlnComponent: SubAlnComponent
  ) {}

  save() {}

  previous() {
    this.subALnProgramComponent.tabActive = '';
  }

  goBack() {
    this.subALnProgramComponent.tabActive = '';
    this.subAlnComponent.sectionActive = 'list';
  }
}
