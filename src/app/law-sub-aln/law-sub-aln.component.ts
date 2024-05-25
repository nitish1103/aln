import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { CreateSubAlnComponent } from '../create-sub-aln/create-sub-aln.component';
import { AlnSubProgramService } from '../services/aln-sub-program.service';
import { SubAlnProgramComponent } from '../sub-aln-program/sub-aln-program.component';
import { SubAlnComponent } from '../sub-aln/sub-aln.component';

@Component({
  selector: 'app-law-sub-aln',
  templateUrl: './law-sub-aln.component.html',
  styleUrl: './law-sub-aln.component.scss',
})
export class LawSubAlnComponent {
  @Input() stepper!: MatStepper;

  lawSubALNForm = new FormGroup({
    fiscalYear: new FormControl('2024', [Validators.required]),
    alnSubProgram: new FormControl('84.002A', [Validators.required]),
    awardType: new FormControl('Discretinary', Validators.required),
    lawName: new FormControl('', Validators.required),
    lawPurpose: new FormControl('', Validators.required),
    latestPublicLaw: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    section: new FormControl('', Validators.required),
    cfrPart: new FormControl('', Validators.required),
  });

  submitted = false;

  constructor(
    private readonly createSubAlnComponent: CreateSubAlnComponent,
    private readonly subAlnComponent: SubAlnComponent,
    private readonly subALnService: AlnSubProgramService,
    private readonly subALnProgram: SubAlnProgramComponent
  ) {}

  ngOnInit() {
    this.lawSubALNForm.patchValue({
      fiscalYear: this.subALnService.createSubALN.fiscalYear,
      alnSubProgram: this.subALnService.createSubALN.alnNumber,
      awardType: this.subALnService.createSubALN.awardType,
    });
  }

  save() {
    this.subALnService.lawSubAln.lawName =
      this.lawSubALNForm.value.lawName ?? '';
    this.subALnService.lawSubAln.lawPurpose =
      this.lawSubALNForm.value.lawPurpose ?? '';
    this.subALnService.lawSubAln.latestPublicLaw =
      this.lawSubALNForm.value.latestPublicLaw ?? '';
    this.subALnService.lawSubAln.title = this.lawSubALNForm.value.title ?? '';
    this.subALnService.lawSubAln.section =
      this.lawSubALNForm.value.section ?? '';
    this.subALnService.lawSubAln.cfrPart =
      this.lawSubALNForm.value.cfrPart ?? '';
    this.subALnProgram.sectionActive = 'summary';
    this.createSubAlnComponent.tabActive = '';
    this.stepper.next();
  }

  previous() {
    this.createSubAlnComponent.tabActive = 'costSharing';
  }

  goBack() {
    this.createSubAlnComponent.tabActive = '';
    this.subAlnComponent.sectionActive = 'list';
  }
}
