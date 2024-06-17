import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CreateSubAlnComponent } from '../create-sub-aln/create-sub-aln.component';
import { EditSubAlnComponent } from '../edit-sub-aln/edit-sub-aln.component';
import { AlnSubProgramService } from '../services/aln-sub-program.service';
import { SUB_AWARD_TYPES, REVIEW_METHODS, ABSTRACT_TYPES } from '../services/aln-sub.interface';
import { SubAlnComponent } from '../sub-aln/sub-aln.component';

@Component({
  selector: 'app-edit-sub-aln-program-accounting',
  templateUrl: './edit-sub-aln-program-accounting.component.html',
  styleUrl: './edit-sub-aln-program-accounting.component.scss'
})
export class EditSubAlnProgramAccountingComponent {
  fiscalYear = '';
  alnSubProgram = '';
  awardType = '';
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  updateAccountingSubALNForm = new FormGroup({
    fundCode: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    budgetFY: new FormControl('', Validators.required),
    organization: new FormControl('', Validators.required),
    limitation: new FormControl('', Validators.required),
    objectClass: new FormControl('', Validators.required),
    fundControlLevel: new FormControl('', Validators.required),
    activity: new FormControl('', Validators.required),
    aln: new FormControl('', Validators.required),
    sector: new FormControl('', Validators.required),
    cohort: new FormControl('', Validators.required)
  });

  submitted = false;

  awardTypes = SUB_AWARD_TYPES;
  reviewMethods = REVIEW_METHODS;
  abstractTypes = ABSTRACT_TYPES;
  ELEMENT_DATA: any[] = [];
  displayedColumns: string[] = ['accstd', 'classificationCode'];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

  constructor(
    private readonly subAln: SubAlnComponent,
    private readonly editSubAlnComponent: EditSubAlnComponent,
    public readonly subALnService: AlnSubProgramService
  ) {}

  ngOnInit() {

    if (this.subALnService.createSubALN.fiscalYear) {
      this.fiscalYear = this.subALnService.createSubALN.fiscalYear;
      this.alnSubProgram = this.subALnService.createSubALN.alnNumber;
      this.awardType = this.subALnService.createSubALN.awardDescription;

      if (this.subALnService.accouting.isEditing) {
        this.updateAccountingSubALNForm.patchValue({
          fundCode: this.subALnService.accouting.fundCode,
          category: this.subALnService.accouting.category,
          budgetFY: this.subALnService.accouting.budgetFY,
          organization: this.subALnService.accouting.organization,
          limitation: this.subALnService.accouting.limitation,
          objectClass: this.subALnService.accouting.objectClass,
          fundControlLevel: this.subALnService.accouting.fundControlLevel,
          activity: this.subALnService.accouting.activity,
          aln: this.subALnService.accouting.aln,
          sector: this.subALnService.accouting.sector,
          cohort: this.subALnService.accouting.cohort
        })  
      } else {
        this.updateAccountingSubALNForm.patchValue({
          fundCode: this.subALnService.accouting.fundCode,
          category: this.subALnService.accouting.category,
          budgetFY: this.subALnService.accouting.budgetFY,
          organization: this.subALnService.accouting.organization,
          limitation: this.subALnService.accouting.limitation,
          objectClass: this.subALnService.accouting.objectClass,
          fundControlLevel: this.subALnService.accouting.fundControlLevel,
          activity: this.subALnService.accouting.activity,
          aln: this.subALnService.accouting.aln,
          sector: this.subALnService.accouting.sector,
          cohort: this.subALnService.accouting.cohort
        })
  
      }
      
      if (this.subALnService.accountingData.length > 0) {
        this.ELEMENT_DATA = this.subALnService.accountingData;
      }
    }
  }

  save() {
    this.subALnService.accouting.isEditing = true;
    this.subALnService.accountingData = this.ELEMENT_DATA;
    this.subALnService.accouting.fundCode =
      this.updateAccountingSubALNForm.value.fundCode ?? '';
    this.subALnService.accouting.category =
      this.updateAccountingSubALNForm.value.category ?? '';
    this.subALnService.accouting.budgetFY =
      this.updateAccountingSubALNForm.value.budgetFY ?? '';
    this.subALnService.accouting.organization =
      this.updateAccountingSubALNForm.value.organization ?? '';
    this.subALnService.accouting.limitation =
      this.updateAccountingSubALNForm.value.limitation ?? '';
    this.subALnService.accouting.objectClass =
      this.updateAccountingSubALNForm.value.objectClass ?? '';
    this.subALnService.accouting.fundControlLevel =
      this.updateAccountingSubALNForm.value.fundControlLevel ?? '';
    this.subALnService.accouting.activity =
      this.updateAccountingSubALNForm.value.activity ?? '';
    this.subALnService.accouting.aln =
      this.updateAccountingSubALNForm.value.aln ?? '';
    this.subALnService.accouting.sector =
      this.updateAccountingSubALNForm.value.sector ?? '';
    this.subALnService.accouting.cohort =
      this.updateAccountingSubALNForm.value.cohort ?? '';
    this.editSubAlnComponent.tabActive = 'law';
  }

  previous() {
    this.editSubAlnComponent.tabActive = 'costSharing';
  }

  goBack() {
    this.editSubAlnComponent.tabActive = '';
    this.subAln.sectionActive = 'list';
  }
}
