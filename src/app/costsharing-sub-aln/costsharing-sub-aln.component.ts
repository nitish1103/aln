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
    costShareMethod: new FormControl('restricted', Validators.required),
    programIndirectCostType: new FormControl(1, Validators.required),
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
    this.subALnService.costSharingSubAln.paymentMethod =
      this.costSharingSubALNForm.value.paymentMethod ?? '';
    this.subALnService.costSharingSubAln.costSharePercentage =
      this.costSharingSubALNForm.value.costSharePercentage ?? '';
    this.subALnService.costSharingSubAln.costShareMethod =
      this.costSharingSubALNForm.value.costShareMethod ?? '';
    this.subALnService.costSharingSubAln.maximumDrawDownPercentageQ1 =
      this.costSharingSubALNForm.value.maximumDrawDownPercentageQ1 ?? '';
    this.subALnService.costSharingSubAln.maximumDrawDownPercentageQ2 =
      this.costSharingSubALNForm.value.maximumDrawDownPercentageQ2 ?? '';
    this.subALnService.costSharingSubAln.maximumDrawDownPercentageQ3 =
      this.costSharingSubALNForm.value.maximumDrawDownPercentageQ3 ?? '';
    this.subALnService.costSharingSubAln.maximumDrawDownPercentageQ4 =
      this.costSharingSubALNForm.value.maximumDrawDownPercentageQ4 ?? '';
    this.subALnService.costSharingSubAln.indirectCostAllowed =
      this.costSharingSubALNForm.value.indirectCostAllowed == 1 ? 'Yes' : 'No';
    this.subALnService.costSharingSubAln.programIndirectCostRate =
      this.costSharingSubALNForm.value.programIndirectCostRate ?? '';
    this.subALnService.costSharingSubAln.administrativeCostCap =
      this.costSharingSubALNForm.value.administrativeCostCap ?? '';
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
