import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateSubAlnComponent } from '../create-sub-aln/create-sub-aln.component';
import { AlnSubProgramService } from '../services/aln-sub-program.service';
import { SubAlnComponent } from '../sub-aln/sub-aln.component';

@Component({
  selector: 'app-costsharing-sub-aln',
  templateUrl: './costsharing-sub-aln.component.html',
  styleUrl: './costsharing-sub-aln.component.scss',
})
export class CostsharingSubAlnComponent {
  paymentMethods = ['Method1', 'Method2', 'Method3'];

  costSharingSubALNForm = new FormGroup({
    fiscalYear: new FormControl('2024', [Validators.required]),
    alnSubProgram: new FormControl('84.002A', [Validators.required]),
    awardType: new FormControl('Discretinary', Validators.required),
    paymentMethod: new FormControl('', Validators.required),
    costSharePercentage: new FormControl('', Validators.required),
    costShareMethod: new FormControl(1, Validators.required),
    maximumDrawDownPercentageQ1: new FormControl('', Validators.required),
    maximumDrawDownPercentageQ2: new FormControl('', Validators.required),
    maximumDrawDownPercentageQ3: new FormControl('', Validators.required),
    maximumDrawDownPercentageQ4: new FormControl('', Validators.required),
    indirectCostAllowed: new FormControl(1, Validators.required),
    programIndirectCostRate: new FormControl('', Validators.required),
    administrativeCostCap: new FormControl('', Validators.required),
  });

  submitted = false;

  constructor(
    private readonly createSubAlnComponent: CreateSubAlnComponent,
    private readonly subAlnComponent: SubAlnComponent,
    private readonly subALnService: AlnSubProgramService
  ) {}

  ngOnInit() {
    this.costSharingSubALNForm.patchValue({
      fiscalYear: this.subALnService.createSubALN.fiscalYear,
      alnSubProgram: this.subALnService.createSubALN.alnNumber,
      awardType: this.subALnService.createSubALN.awardType,
    });
  }

  save() {
    this.createSubAlnComponent.tabActive = 'law';
  }

  previous() {
    this.createSubAlnComponent.tabActive = 'reporting';
  }

  goBack() {
    this.createSubAlnComponent.tabActive = '';
    this.subAlnComponent.sectionActive = 'list';
  }
}
