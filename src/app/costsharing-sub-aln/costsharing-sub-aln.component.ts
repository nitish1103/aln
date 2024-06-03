import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { CreateSubAlnComponent } from '../create-sub-aln/create-sub-aln.component';
import { AlnSubProgramService } from '../services/aln-sub-program.service';
import { INDIRECT_COST_TYPES, PAYMENT_METHODS } from '../services/aln-sub.interface';
import { SubAlnComponent } from '../sub-aln/sub-aln.component';

@Component({
  selector: 'app-costsharing-sub-aln',
  templateUrl: './costsharing-sub-aln.component.html',
  styleUrl: './costsharing-sub-aln.component.scss',
})
export class CostsharingSubAlnComponent {
  paymentMethods = PAYMENT_METHODS;
  indirectCostTypes = INDIRECT_COST_TYPES;

  costSharingSubALNForm = new FormGroup({
    fiscalYear: new FormControl('2024', [Validators.required]),
    alnSubProgram: new FormControl('84.002A', [Validators.required]),
    awardType: new FormControl('Discretinary', Validators.required),
    paymentMethod: new FormControl('', Validators.required),
    costShareRequired:  new FormControl('N', Validators.required),
    costSharePercentage: new FormControl('', Validators.required),
    costShareMethod: new FormControl('restricted', Validators.required),
    costShareAdjustmentAllowed: new FormControl('N', Validators.required),
    programIndirectCostType: new FormControl('', Validators.required),
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

    if (this.subALnService.costSharingSubAln.paymentMethod != '') {
      this.costSharingSubALNForm.patchValue({
        paymentMethod: this.subALnService.costSharingSubAln.paymentMethod,
        costShareRequired: this.subALnService.costSharingSubAln.costShareRequired,
        costSharePercentage: this.subALnService.costSharingSubAln.costSharePercentage,
        costShareMethod: this.subALnService.costSharingSubAln.costShareMethod,
        costShareAdjustmentAllowed: this.subALnService.costSharingSubAln.costShareAdjustmentAllowed,
        programIndirectCostType: this.subALnService.costSharingSubAln.programIndirectCostType,
        maximumDrawDownPercentageQ1: this.subALnService.costSharingSubAln.maximumDrawDownPercentageQ1,
        maximumDrawDownPercentageQ2: this.subALnService.costSharingSubAln.maximumDrawDownPercentageQ2,
        maximumDrawDownPercentageQ3: this.subALnService.costSharingSubAln.maximumDrawDownPercentageQ3,
        maximumDrawDownPercentageQ4: this.subALnService.costSharingSubAln.maximumDrawDownPercentageQ4,
        indirectCostAllowed: Number(this.subALnService.costSharingSubAln.indirectCostAllowed),
        programIndirectCostRate:  this.subALnService.costSharingSubAln.programIndirectCostRate,
        administrativeCostCap:  this.subALnService.costSharingSubAln.administrativeCostCap,
      })
    }
  }

  save() {
    this.subALnService.costSharingSubAln.paymentMethod =
      this.costSharingSubALNForm.value.paymentMethod ?? '';
    this.subALnService.costSharingSubAln.costSharePercentage =
      this.costSharingSubALNForm.value.costSharePercentage ?? '';
    this.subALnService.costSharingSubAln.costShareMethod =
      this.costSharingSubALNForm.value.costShareMethod ?? '';
    this.subALnService.costSharingSubAln.costShareRequired =
      this.costSharingSubALNForm.value.costShareRequired ?? '';
    this.subALnService.costSharingSubAln.costShareAdjustmentAllowed = 
      this.costSharingSubALNForm.value.costShareAdjustmentAllowed ?? '';
    this.subALnService.costSharingSubAln.maximumDrawDownPercentageQ1 =
      this.costSharingSubALNForm.value.maximumDrawDownPercentageQ1 ?? '';
    this.subALnService.costSharingSubAln.maximumDrawDownPercentageQ2 =
      this.costSharingSubALNForm.value.maximumDrawDownPercentageQ2 ?? '';
    this.subALnService.costSharingSubAln.maximumDrawDownPercentageQ3 =
      this.costSharingSubALNForm.value.maximumDrawDownPercentageQ3 ?? '';
    this.subALnService.costSharingSubAln.maximumDrawDownPercentageQ4 =
      this.costSharingSubALNForm.value.maximumDrawDownPercentageQ4 ?? '';
    this.subALnService.costSharingSubAln.indirectCostAllowed =
      this.costSharingSubALNForm.value.indirectCostAllowed == 1 ? 'Y' : 'N';
    this.subALnService.costSharingSubAln.programIndirectCostRate =
      this.costSharingSubALNForm.value.programIndirectCostRate ?? '';
    this.subALnService.costSharingSubAln.administrativeCostCap =
      this.costSharingSubALNForm.value.administrativeCostCap ?? '';
    this.subALnService.costSharingSubAln.programIndirectCostType =
      this.costSharingSubALNForm.value.programIndirectCostType ?? '';
    this.createSubAlnComponent.tabActive = 'law';
  }

  setCostShareAdjAllowed(event:MatCheckboxChange) {
    if (event.checked) {
      this.costSharingSubALNForm.patchValue(({
        costShareAdjustmentAllowed: 'Y'
      }))
    } else {
      this.costSharingSubALNForm.patchValue(({
        costShareAdjustmentAllowed: 'N'
      }))
    }
  }

  setCostShareRequired(event:MatCheckboxChange) {
    if (event.checked) {
      this.costSharingSubALNForm.patchValue(({
        costShareRequired: 'Y'
      }))
    } else {
      this.costSharingSubALNForm.patchValue(({
        costShareRequired: 'N'
      }))
    }
  }

  previous() {
    this.createSubAlnComponent.tabActive = 'reporting';
  }

  goBack() {
    this.createSubAlnComponent.tabActive = '';
    this.subAlnComponent.sectionActive = 'list';
  }
}
