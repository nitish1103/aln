import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CreateSubAlnComponent } from '../create-sub-aln/create-sub-aln.component';
import { AlnSubProgramService } from '../services/aln-sub-program.service';
import { SUB_AWARD_TYPES, REVIEW_METHODS, ABSTRACT_TYPES } from '../services/aln-sub.interface';
import { SubAlnComponent } from '../sub-aln/sub-aln.component';

@Component({
  selector: 'app-accouting-sub-aln',
  templateUrl: './accouting-sub-aln.component.html',
  styleUrl: './accouting-sub-aln.component.scss'
})
export class AccoutingSubAlnComponent {
  fiscalYear = '';
  alnSubProgram = '';
  awardType = '';
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  accountingSubALNForm = new FormGroup({
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
    private readonly createSubAlnComponent: CreateSubAlnComponent,
    private readonly subAlnComponent: SubAlnComponent,
    private readonly subALnService: AlnSubProgramService
  ) {}

  ngOnInit() {

    if (this.subALnService.createSubALN.fiscalYear) {
      this.fiscalYear = this.subALnService.createSubALN.fiscalYear;
      this.alnSubProgram = this.subALnService.createSubALN.alnNumber;
      this.awardType = this.subALnService.createSubALN.awardDescription;

      this.accountingSubALNForm.patchValue({
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

      if (this.subALnService.accountingData.length > 0) {
        this.ELEMENT_DATA = this.subALnService.accountingData;
      }
    }
  }

  save() {
    this.subALnService.accountingData = this.ELEMENT_DATA;
    this.subALnService.accouting.fundCode =
      this.accountingSubALNForm.value.fundCode ?? '';
    this.subALnService.accouting.category =
      this.accountingSubALNForm.value.category ?? '';
    this.subALnService.accouting.budgetFY =
      this.accountingSubALNForm.value.budgetFY ?? '';
    this.subALnService.accouting.organization =
      this.accountingSubALNForm.value.organization ?? '';
    this.subALnService.accouting.limitation =
      this.accountingSubALNForm.value.limitation ?? '';
    this.subALnService.accouting.objectClass =
      this.accountingSubALNForm.value.objectClass ?? '';
    this.subALnService.accouting.fundControlLevel =
      this.accountingSubALNForm.value.fundControlLevel ?? '';
    this.subALnService.accouting.activity =
      this.accountingSubALNForm.value.activity ?? '';
    this.subALnService.accouting.aln =
      this.accountingSubALNForm.value.aln ?? '';
    this.subALnService.accouting.sector =
      this.accountingSubALNForm.value.sector ?? '';
    this.subALnService.accouting.cohort =
      this.accountingSubALNForm.value.cohort ?? '';
    this.createSubAlnComponent.tabActive = 'law';
  }

  previous() {
    this.createSubAlnComponent.tabActive = 'costSharing';
  }

  goBack() {
    this.createSubAlnComponent.tabActive = '';
    this.subAlnComponent.sectionActive = 'list';
  }
}
