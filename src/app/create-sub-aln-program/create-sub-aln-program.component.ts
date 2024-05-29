import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable, startWith } from 'rxjs';
import { CreateSubAlnComponent } from '../create-sub-aln/create-sub-aln.component';
import { AlnService } from '../services/aln-service';
import { AlnSubProgramService } from '../services/aln-sub-program.service';
import {
  AWARD_TYPES,
  SUB_PROGRAM_ACTION_TYPES,
} from '../services/aln-sub.interface';
import { SubAlnProgramComponent } from '../sub-aln-program/sub-aln-program.component';
import { SubAlnComponent } from '../sub-aln/sub-aln.component';

@Component({
  selector: 'app-create-sub-aln-program',
  templateUrl: './create-sub-aln-program.component.html',
  styleUrl: './create-sub-aln-program.component.scss',
})
export class CreateSubAlnProgramComponent {
  submitted = false;
  createSubALNForm = new FormGroup({
    fiscalYear: new FormControl('', [Validators.required]),
    alnCode: new FormControl('', [Validators.required]),
    alnNumber: new FormControl('', [Validators.required]),
    subProgramId: new FormControl('', [Validators.required]),
    awardType: new FormControl('', [Validators.required]),
    subProgramActionType: new FormControl('', [Validators.required])
  });

  selectedDesignatorCode = '84';
  agencyDesignatorCodes = [
    '10',
    '11',
    '15',
    '16',
    '17',
    '23',
    '45',
    '47',
    '84',
    '93',
  ];

  myControl: FormControl = new FormControl();
  alnNumberList: any[] = [];
  filteredOptions!: Observable<string[]>;

  awardTypes = AWARD_TYPES;
  subProgramActionTypes = SUB_PROGRAM_ACTION_TYPES;

  constructor(
    private readonly subAln: SubAlnComponent,
    public dialog: MatDialog,
    private readonly alnService: AlnService,
    private readonly createSubAlnComponent: CreateSubAlnComponent,
    private readonly subALnService: AlnSubProgramService
  ) {}

  ngOnInit() {
    this.getALN();
  }

  save() {
    this.submitted = true;
    const { fiscalYear, alnCode, alnNumber, subProgramId, awardType, subProgramActionType } =
      this.createSubALNForm.value;
    console.log("========subProgramActionType", subProgramActionType)
    this.subALnService.createSubALN.fiscalYear = fiscalYear ?? '';
    this.subALnService.createSubALN.alnCode = alnCode ?? '';
    this.subALnService.createSubALN.alnNumber = alnNumber ?? '';
    this.subALnService.createSubALN.subProgramId = subProgramId ?? '';
    this.subALnService.createSubALN.awardType = awardType ?? '';
    this.subALnService.createSubALN.subProgramActionType = subProgramActionType ?? '';

    AWARD_TYPES.map((award:any) => {
      if (award.AWARD_TYPE_CD === awardType) {
        this.subALnService.createSubALN.awardDescription = award.AWARD_TYPE;
      }
    })

    this.createSubAlnComponent.tabActive = 'general';
  }

  setSubProgramActionType(subProgramActionType:string) {
    this.createSubALNForm.patchValue({
      subProgramActionType: subProgramActionType
    })
  }

  getALN() {
    this.alnService.getALNList().subscribe(
      (response: any) => {
        response.map((res: any, index:number) => {
          this.alnNumberList.push(res.alnNumber);
          if (index === response.length-1) {
            setTimeout(() => {
              this.filteredOptions = this.myControl.valueChanges.pipe(
                startWith(''),
                map((value) => this._filter(value))
              );
            }, 50);
          }
        });
        
      },
      (error: any) => {
        this.alnNumberList = ['24', '36', '42', '56'];
        setTimeout(() => {
          this.filteredOptions = this.myControl.valueChanges.pipe(
            startWith(''),
            map((value) => this._filter(value))
          );
        }, 50);
      }
    );
  }

  private _filter(value: string): string[] {
    this.createSubALNForm.patchValue({
      alnNumber: value
    });
    const filterValue = value.toLowerCase();
    return this.alnNumberList.filter((aln) =>
      aln.toLowerCase().includes(filterValue)
    );
  }

  goBack() {
    this.subAln.sectionActive = 'list';
  }

  previous() {
    this.subAln.sectionActive = 'list';
  }
}
