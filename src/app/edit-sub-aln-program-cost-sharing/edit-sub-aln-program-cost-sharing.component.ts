import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { CreateSubAlnComponent } from '../create-sub-aln/create-sub-aln.component';
import { EditSubAlnComponent } from '../edit-sub-aln/edit-sub-aln.component';
import { AlnSubProgramService } from '../services/aln-sub-program.service';
import { PAYMENT_METHODS, INDIRECT_COST_TYPES } from '../services/aln-sub.interface';
import { SubAlnComponent } from '../sub-aln/sub-aln.component';

@Component({
  selector: 'app-edit-sub-aln-program-cost-sharing',
  templateUrl: './edit-sub-aln-program-cost-sharing.component.html',
  styleUrl: './edit-sub-aln-program-cost-sharing.component.scss'
})
export class EditSubAlnProgramCostSharingComponent {
  paymentMethods = PAYMENT_METHODS;
  indirectCostTypes = INDIRECT_COST_TYPES;
  fiscalYear = '';
  alnSubProgram = '';
  awardType = '';

  updateCostSharingSubALNForm = new FormGroup({
    fiscalYear: new FormControl('2024', [Validators.required]),
    alnSubProgram: new FormControl('84.002A', [Validators.required]),
    awardType: new FormControl('Discretinary', Validators.required),
    paymentMethod: new FormControl('', Validators.required),
    costShareRequired:  new FormControl('N', Validators.required),
    costSharePercentage: new FormControl(''),
    costShareMethod: new FormControl(''),
    costShareAdjustmentAllowed: new FormControl('N', Validators.required),
    programIndirectCostType: new FormControl('', Validators.required),
    maximumDrawDownPercentageQ1: new FormControl('', Validators.required),
    maximumDrawDownPercentageQ2: new FormControl('', Validators.required),
    maximumDrawDownPercentageQ3: new FormControl('', Validators.required),
    maximumDrawDownPercentageQ4: new FormControl('', Validators.required),
    indirectCostAllowed: new FormControl(1, Validators.required),
    programIndirectCostRate: new FormControl('', Validators.required),
    administrativeCostCap: new FormControl(''),
  });

  submitted = false;
  isCostShareRequired = false;
  isIndirectCostAllowed = true;
  isCostSharedAdjAllowed = false;
  admCostCapAllowed = false;

  constructor(
    private readonly subAln: SubAlnComponent,
    private readonly editSubAlnComponent: EditSubAlnComponent,
    public readonly subALnService: AlnSubProgramService
  ) {}

  ngOnInit() {
    this.fiscalYear = this.subALnService.createSubALN.fiscalYear;
    this.alnSubProgram = this.subALnService.createSubALN.alnNumber;
    this.awardType = this.subALnService.createSubALN.awardDescription;


    if (this.subALnService.costSharingSubAln.isEditing) {
      if (this.subALnService.costSharingSubAln.paymentMethod != '') {
        this.updateCostSharingSubALNForm.patchValue({
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
  
        this.isCostShareRequired = this.subALnService.costSharingSubAln.isCostShareRequired;
        this.isIndirectCostAllowed = this.subALnService.costSharingSubAln.isIndirectCostAllowed;
        this.isCostSharedAdjAllowed = this.subALnService.costSharingSubAln.isCostSharedAdjAllowed;
        this.admCostCapAllowed = this.subALnService.costSharingSubAln.admCostCapAllowed;
  
        if (this.isIndirectCostAllowed) {
          this.updateCostSharingSubALNForm.get('programIndirectCostRate')?.addValidators(Validators.required);
          this.updateCostSharingSubALNForm.get('programIndirectCostType')?.addValidators(Validators.required);
          this.updateCostSharingSubALNForm.get('programIndirectCostRate')?.updateValueAndValidity();
          this.updateCostSharingSubALNForm.get('programIndirectCostType')?.updateValueAndValidity();
        } else {
          this.updateCostSharingSubALNForm.get('programIndirectCostRate')?.removeValidators(Validators.required);
          this.updateCostSharingSubALNForm.get('programIndirectCostType')?.removeValidators(Validators.required);
          this.updateCostSharingSubALNForm.get('programIndirectCostRate')?.updateValueAndValidity();
          this.updateCostSharingSubALNForm.get('programIndirectCostType')?.updateValueAndValidity();
        }
      }
    } else {
      this.updateCostSharingSubALNForm.patchValue({
        paymentMethod: this.subALnService.subAlnData.costSharing.paymentMethodCd.paymentMethodCd,
        costShareRequired: this.subALnService.subAlnData.costSharing.costShareRequired,
        costSharePercentage: this.subALnService.subAlnData.costSharing.costSharePercentage,
        costShareMethod: this.subALnService.subAlnData.costSharing.costShareMethodCd.costSharingCd,
        costShareAdjustmentAllowed: this.subALnService.subAlnData.costSharing.costShareAdjAllowed,
        programIndirectCostType: this.subALnService.subAlnData.costSharing.programIndirectCostType.programIndirectCostTypeCd,
        maximumDrawDownPercentageQ1: this.subALnService.subAlnData.costSharing.maxdrawdownPctQ1,
        maximumDrawDownPercentageQ2: this.subALnService.subAlnData.costSharing.maxdrawdownPctQ2,
        maximumDrawDownPercentageQ3: this.subALnService.subAlnData.costSharing.maxdrawdownPctQ3,
        maximumDrawDownPercentageQ4: this.subALnService.subAlnData.costSharing.maxdrawdownPctQ4,
        indirectCostAllowed: Number(this.subALnService.subAlnData.costSharing.indirectCostAllowed),
        programIndirectCostRate:  this.subALnService.subAlnData.costSharing.programIndirectCostRate,
        administrativeCostCap:  this.subALnService.subAlnData.costSharing.adminCostCap,
      })

      if (this.subALnService.subAlnData.costSharing.indirectCostAllowed === '1') {
        this.updateCostSharingSubALNForm.get('programIndirectCostRate')?.addValidators(Validators.required);
        this.updateCostSharingSubALNForm.get('programIndirectCostType')?.addValidators(Validators.required);
        this.updateCostSharingSubALNForm.get('programIndirectCostRate')?.updateValueAndValidity();
        this.updateCostSharingSubALNForm.get('programIndirectCostType')?.updateValueAndValidity();
      } else {
        this.updateCostSharingSubALNForm.get('programIndirectCostRate')?.removeValidators(Validators.required);
        this.updateCostSharingSubALNForm.get('programIndirectCostType')?.removeValidators(Validators.required);
        this.updateCostSharingSubALNForm.get('programIndirectCostRate')?.updateValueAndValidity();
        this.updateCostSharingSubALNForm.get('programIndirectCostType')?.updateValueAndValidity();
      }

      this.isCostShareRequired = this.subALnService.subAlnData.costSharing.costShareRequired === 'Y' ? true : false;
      this.isCostSharedAdjAllowed = this.subALnService.subAlnData.costSharing.costShareAdjAllowed === 'Y' ? true : false;
      this.isIndirectCostAllowed = this.subALnService.subAlnData.costSharing.costShareAdjAllowed === '1' ? true : false;
      this.admCostCapAllowed = this.subALnService.subAlnData.costSharing.indirectCostAllowed === '1' ? true : false;
    }
    
  }

  save() {
    this.subALnService.costSharingSubAln.isEditing = true;
    this.subALnService.costSharingSubAln.paymentMethod =
      this.updateCostSharingSubALNForm.value.paymentMethod ?? '';
    this.subALnService.costSharingSubAln.costSharePercentage =
      this.updateCostSharingSubALNForm.value.costSharePercentage ?? '';
    this.subALnService.costSharingSubAln.costShareMethod =
      this.updateCostSharingSubALNForm.value.costShareMethod ?? '';
    this.subALnService.costSharingSubAln.costShareRequired =
      this.updateCostSharingSubALNForm.value.costShareRequired ?? '';
    this.subALnService.costSharingSubAln.costShareAdjustmentAllowed = 
      this.updateCostSharingSubALNForm.value.costShareAdjustmentAllowed ?? '';
    this.subALnService.costSharingSubAln.maximumDrawDownPercentageQ1 =
      this.updateCostSharingSubALNForm.value.maximumDrawDownPercentageQ1 ?? '';
    this.subALnService.costSharingSubAln.maximumDrawDownPercentageQ2 =
      this.updateCostSharingSubALNForm.value.maximumDrawDownPercentageQ2 ?? '';
    this.subALnService.costSharingSubAln.maximumDrawDownPercentageQ3 =
      this.updateCostSharingSubALNForm.value.maximumDrawDownPercentageQ3 ?? '';
    this.subALnService.costSharingSubAln.maximumDrawDownPercentageQ4 =
      this.updateCostSharingSubALNForm.value.maximumDrawDownPercentageQ4 ?? '';
    this.subALnService.costSharingSubAln.indirectCostAllowed =
      this.updateCostSharingSubALNForm.value.indirectCostAllowed == 1 ? 'Y' : 'N';
    this.subALnService.costSharingSubAln.programIndirectCostRate =
      this.updateCostSharingSubALNForm.value.programIndirectCostRate ?? '';
    this.subALnService.costSharingSubAln.administrativeCostCap =
      this.updateCostSharingSubALNForm.value.administrativeCostCap ?? '';
    this.subALnService.costSharingSubAln.programIndirectCostType =
      this.updateCostSharingSubALNForm.value.programIndirectCostType ?? '';
    this.subALnService.costSharingSubAln.isCostShareRequired = this.isCostShareRequired;
    this.subALnService.costSharingSubAln.isIndirectCostAllowed = this.isIndirectCostAllowed;
    this.subALnService.costSharingSubAln.isCostSharedAdjAllowed = this.isCostSharedAdjAllowed;
    this.subALnService.costSharingSubAln.admCostCapAllowed = this.admCostCapAllowed;
    this.editSubAlnComponent.tabActive = this.subALnService.isDiscretionary ? 'accounting' : 'law';
  }

  setCostShareAdjAllowed(event:MatCheckboxChange) {
    if (event.checked) {
      this.isCostSharedAdjAllowed = true;
      this.updateCostSharingSubALNForm.patchValue(({
        costShareAdjustmentAllowed: 'Y'
      }))
    } else {
      this.isCostSharedAdjAllowed = false;
      this.updateCostSharingSubALNForm.patchValue(({
        costShareAdjustmentAllowed: 'N'
      }))
      
    }
  }

  setAdminCostCapAllowed(event:MatCheckboxChange) {
    if (event.checked) {
      this.admCostCapAllowed = true;
      this.updateCostSharingSubALNForm.patchValue(({
        costShareAdjustmentAllowed: 'Y'
      }))
    } else {
      this.admCostCapAllowed = false;
      this.updateCostSharingSubALNForm.patchValue(({
        costShareAdjustmentAllowed: 'N'
      }))
    }
  }

  setCostShareRequired(event:MatCheckboxChange) {
    if (event.checked) {
      this.isCostShareRequired = true;
      this.updateCostSharingSubALNForm.patchValue(({
        costShareRequired: 'Y'
      }))
    } else {
      this.isCostShareRequired = false;
      this.updateCostSharingSubALNForm.patchValue(({
        costShareRequired: 'N'
      }))
    }
  }

  previous() {
    this.editSubAlnComponent.tabActive = 'reporting';
  }

  goBack() {
    this.editSubAlnComponent.tabActive = '';
    this.subAln.sectionActive = 'list';
  }

  setIndirectCostType(indirectCostAllowed: string) {
    if (indirectCostAllowed === 'Y') {
      this.isIndirectCostAllowed = true;
      this.updateCostSharingSubALNForm.get('programIndirectCostRate')?.addValidators(Validators.required);
      this.updateCostSharingSubALNForm.get('programIndirectCostType')?.addValidators(Validators.required);
      this.updateCostSharingSubALNForm.get('programIndirectCostRate')?.updateValueAndValidity();
      this.updateCostSharingSubALNForm.get('programIndirectCostType')?.updateValueAndValidity();
    } else {
      this.isIndirectCostAllowed = false;
      this.updateCostSharingSubALNForm.get('programIndirectCostRate')?.removeValidators(Validators.required);
      this.updateCostSharingSubALNForm.get('programIndirectCostType')?.removeValidators(Validators.required);
      this.updateCostSharingSubALNForm.get('programIndirectCostRate')?.updateValueAndValidity();
      this.updateCostSharingSubALNForm.get('programIndirectCostType')?.updateValueAndValidity();
    }
  }
}
