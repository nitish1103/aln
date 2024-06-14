import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable, startWith } from 'rxjs';
import { EditSubAlnComponent } from '../edit-sub-aln/edit-sub-aln.component';
import { AlnService } from '../services/aln-service';
import { AlnSubProgramService } from '../services/aln-sub-program.service';
import { AWARD_TYPES } from '../services/aln-sub.interface';
import { SubAlnComponent } from '../sub-aln/sub-aln.component';

@Component({
  selector: 'app-edit-sub-aln-program',
  templateUrl: './edit-sub-aln-program.component.html',
  styleUrl: './edit-sub-aln-program.component.scss'
})
export class EditSubAlnProgramComponent {
  submitted = false;
  updateSubALNForm = new FormGroup({
    fiscalYear: new FormControl('', [Validators.required]),
    alnCode: new FormControl('', [Validators.required]),
    alnNumber: new FormControl('', [Validators.required]),
    subProgramId: new FormControl('', [Validators.required]),
    awardType: new FormControl('DS', [Validators.required]),
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
  subALns: any[] = [];
  checkedActionTypes: string[] = [];
  filteredOptions!: Observable<string[]>;
  subAlnAlreadyExists = false;

  awardTypes = AWARD_TYPES;
  subProgramActionTypes = [
    {
      SUB_PROGRAM_ACTION_TYPE_CD: 'NC',
      SUB_PROGRAM_ACTION_TYPE: 'New',
      checked: false
    },
    {
      SUB_PROGRAM_ACTION_TYPE_CD: 'NCC',
      SUB_PROGRAM_ACTION_TYPE: 'Non-Competing Continuation',
      checked: false
    },
    {
      SUB_PROGRAM_ACTION_TYPE_CD: 'FDS',
      SUB_PROGRAM_ACTION_TYPE: 'Funding Down the Slate',
      checked: false
    },
  ];

  constructor(
    private readonly subAln: SubAlnComponent,
    public dialog: MatDialog,
    private readonly alnService: AlnService,
    private readonly editSubAlnComponent: EditSubAlnComponent,
    public readonly subALnService: AlnSubProgramService
  ) {}

  ngOnInit() {
    this.getALN();
    this.getSubALNList();
    if (this.subALnService.subAlnData.subprogramId.fiscalYear) {
      //this.checkedActionTypes = this.subALnService.checkedActionTypes;
      this.patchValues();
    }
  }

  setSubProgramActionTypeValue() {
    const awardType  = this.updateSubALNForm.value.awardType;
    if (awardType === 'DS' || awardType === 'FM') {
      this.checkedActionTypes = [];
      this.subProgramActionTypes = [
        {
          SUB_PROGRAM_ACTION_TYPE_CD: 'NC',
          SUB_PROGRAM_ACTION_TYPE: 'New',
          checked: false
        },
        {
          SUB_PROGRAM_ACTION_TYPE_CD: 'NCC',
          SUB_PROGRAM_ACTION_TYPE: 'Non-Competing Continuation',
          checked: false
        },
        {
          SUB_PROGRAM_ACTION_TYPE_CD: 'FDS',
          SUB_PROGRAM_ACTION_TYPE: 'Funding Down the Slate',
          checked: false
        }
      ]
    } else {
      this.updateSubALNForm.patchValue({
        subProgramActionType: 'NW'
      })
      this.checkedActionTypes = ['NC']
      this.subProgramActionTypes = [
        {
          SUB_PROGRAM_ACTION_TYPE_CD: 'NC',
          SUB_PROGRAM_ACTION_TYPE: 'New',
          checked: true
        }
      ] 
    }
  }

  save() {
    this.submitted = true;
    const { fiscalYear, alnCode, alnNumber, subProgramId, awardType, subProgramActionType } =
      this.updateSubALNForm.value;
    if (this.subALns.filter((aln:any) => aln.subprogramId.aln == alnNumber && aln.subprogramId.subprogramCd == subProgramId).length > 0) {
      this.subAlnAlreadyExists = true;
    } else {
      if (awardType === 'DS' || awardType === 'FM') {
        this.subALnService.isDiscretionary = true;
      } else {
        this.subALnService.isDiscretionary = false;
      }
      this.subALnService.createSubALN.fiscalYear = fiscalYear ?? '';
      this.subALnService.createSubALN.alnCode = alnCode ?? '';
      this.subALnService.createSubALN.alnNumber = alnNumber ?? '';
      this.subALnService.createSubALN.subProgramId = subProgramId ?? '';
      this.subALnService.createSubALN.awardType = awardType ?? '';
      this.subALnService.createSubALN.subProgramActionType = subProgramActionType ?? '';
  
      this.subALnService.checkedActionTypes = this.checkedActionTypes;
  
      AWARD_TYPES.map((award:any) => {
        if (award.AWARD_TYPE_CD === awardType) {
          this.subALnService.createSubALN.awardDescription = award.AWARD_TYPE;
        }
      })
  
      this.editSubAlnComponent.tabActive = 'general';
    }
    
  }

  patchValues() {
    this.updateSubALNForm.patchValue({
      fiscalYear: this.subALnService.subAlnData.subprogramId.fiscalYear,
      alnCode: this.subALnService.subAlnData.subprogramId.agencyCd.toString(),
      alnNumber: this.subALnService.subAlnData.subprogramId.aln,
      subProgramId: this.subALnService.subAlnData.subprogramId.subprogramCd,
      awardType: this.subALnService.subAlnData.awardType.awardTypeCd,
      subProgramActionType: this.subALnService.subAlnData.subprogramActionType.subprogramActionTypeCd
    })
    if (this.subALnService.subAlnData.subprogramId.aln) {
      this.myControl.patchValue(this.subALnService.subAlnData.subprogramId.aln);
    }
  }

  setSubProgramActionType(subProgramActionType:string, event: MatCheckboxChange) {
    if (event.checked) {
      this.checkedActionTypes.push(subProgramActionType);
    } else {
      this.checkedActionTypes = this.checkedActionTypes.filter((type:string) => type !== subProgramActionType);
    }

    this.setActionType();
  }

  setActionType() {
    if (this.checkedActionTypes.indexOf('NC') > -1 && this.checkedActionTypes.indexOf('NCC') > -1 && this.checkedActionTypes.indexOf('FDS') > -1) {
      this.updateSubALNForm.patchValue({
        subProgramActionType: 'AL'
      })
    } else if (this.checkedActionTypes.indexOf('NC') > -1 && this.checkedActionTypes.indexOf('NCC') === -1 && this.checkedActionTypes.indexOf('FDS') === -1) {
      this.updateSubALNForm.patchValue({
        subProgramActionType: 'NW'
      })
    } else if (this.checkedActionTypes.indexOf('NC') === -1 && this.checkedActionTypes.indexOf('NCC') > -1 && this.checkedActionTypes.indexOf('FDS') === -1) {
      this.updateSubALNForm.patchValue({
        subProgramActionType: 'CC'
      })
    } else if (this.checkedActionTypes.indexOf('NC') === -1 && this.checkedActionTypes.indexOf('NCC') === -1 && this.checkedActionTypes.indexOf('FDS') > -1) {
      this.updateSubALNForm.patchValue({
        subProgramActionType: 'FS'
      })
    } else if (this.checkedActionTypes.indexOf('NC') === -1 && this.checkedActionTypes.indexOf('NCC') > -1 && this.checkedActionTypes.indexOf('FDS') > -1) {
      this.updateSubALNForm.patchValue({
        subProgramActionType: 'CF'
      })
    } else if (this.checkedActionTypes.indexOf('NC') > -1 && this.checkedActionTypes.indexOf('NCC') > -1 && this.checkedActionTypes.indexOf('FDS') === -1) {
      this.updateSubALNForm.patchValue({
        subProgramActionType: 'NC'
      })
    } else if (this.checkedActionTypes.indexOf('NC') > -1 && this.checkedActionTypes.indexOf('NCC') === -1 && this.checkedActionTypes.indexOf('FDS') > -1) {
      this.updateSubALNForm.patchValue({
        subProgramActionType: 'NF'
      })
    }
  }

  onlyNumberKey(event:any) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 65 && event.charCode <= 122;
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
        this.alnNumberList = ['24', '36', '42', '0049'];
        setTimeout(() => {
          this.filteredOptions = this.myControl.valueChanges.pipe(
            startWith(''),
            map((value) => this._filter(value))
          );
        }, 50);
      }
    );
  }

  getSubALNList() {
    this.subALnService.getAllSubAlns().subscribe(
      (response: any) => {
        this.subALns = response;
      },
      (error: any) => {
       this.subALns = [{
        "subprogramId": {
          "fiscalYear": 2021,
          "agencyCd": "84",
          "aln": "0049",
          "subprogramCd": "A"
        }
       }]
      }
    );
  }

  private _filter(value: string): string[] {
    this.updateSubALNForm.patchValue({
      alnNumber: value ? value : this.subALnService.subAlnData.subprogramId.aln
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
