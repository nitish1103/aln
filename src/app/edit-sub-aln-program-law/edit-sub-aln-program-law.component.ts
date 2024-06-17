import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { CreateSubAlnComponent } from '../create-sub-aln/create-sub-aln.component';
import { EditSubAlnComponent } from '../edit-sub-aln/edit-sub-aln.component';
import { AlnSubProgramService } from '../services/aln-sub-program.service';
import { SubAlnProgramComponent } from '../sub-aln-program/sub-aln-program.component';
import { SubAlnComponent } from '../sub-aln/sub-aln.component';

@Component({
  selector: 'app-edit-sub-aln-program-law',
  templateUrl: './edit-sub-aln-program-law.component.html',
  styleUrl: './edit-sub-aln-program-law.component.scss'
})
export class EditSubAlnProgramLawComponent {
  @Input() stepper!: MatStepper;

  fiscalYear = '';
  alnSubProgram = '';
  awardType = '';

  lawUpdateSubALNForm = new FormGroup({
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
    private readonly subAln: SubAlnComponent,
    private readonly editSubAlnComponent: EditSubAlnComponent,
    public readonly subALnService: AlnSubProgramService
  ) {}

  ngOnInit() {
    this.fiscalYear = this.subALnService.createSubALN.fiscalYear;
    this.alnSubProgram = this.subALnService.createSubALN.alnNumber;
    this.awardType = this.subALnService.createSubALN.awardDescription;

    if (this.subALnService.lawSubAln.isEditing) {
      this.lawUpdateSubALNForm.patchValue({
        lawName: this.subALnService.lawSubAln.lawName,
        lawPurpose: this.subALnService.lawSubAln.lawPurpose,
        latestPublicLaw: this.subALnService.lawSubAln.latestPublicLaw,
        title: this.subALnService.lawSubAln.title,
        section: this.subALnService.lawSubAln.section,
        cfrPart: this.subALnService.lawSubAln.cfrPart
      });
    } else {
      this.lawUpdateSubALNForm.patchValue({
        lawName: this.subALnService.subAlnData.law.lawName,
        lawPurpose: this.subALnService.subAlnData.law.lawPurpose,
        latestPublicLaw: this.subALnService.subAlnData.law.latestPublicLaw,
        title: this.subALnService.subAlnData.law.title,
        section: this.subALnService.subAlnData.law.section,
        cfrPart: this.subALnService.subAlnData.law.cfrPart
      });
    }
  }

  save() {
    this.subALnService.lawSubAln.isEditing = true;
    this.subALnService.lawSubAln.lawName =
      this.lawUpdateSubALNForm.value.lawName ?? '';
    this.subALnService.lawSubAln.lawPurpose =
      this.lawUpdateSubALNForm.value.lawPurpose ?? '';
    this.subALnService.lawSubAln.latestPublicLaw =
      this.lawUpdateSubALNForm.value.latestPublicLaw ?? '';
    this.subALnService.lawSubAln.title = this.lawUpdateSubALNForm.value.title ?? '';
    this.subALnService.lawSubAln.section =
      this.lawUpdateSubALNForm.value.section ?? '';
    this.subALnService.lawSubAln.cfrPart =
      this.lawUpdateSubALNForm.value.cfrPart ?? '';
    this.subAln.sectionActive = 'summary';
    this.stepper.next();
  }

  previous() {
    this.editSubAlnComponent.tabActive = 'costSharing';
  }

  goBack() {
    this.editSubAlnComponent.tabActive = '';
    this.subAln.sectionActive = 'list';
  }
}
