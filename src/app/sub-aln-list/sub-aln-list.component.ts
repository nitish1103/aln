import { Component, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AlnService } from '../services/aln-service';
import { AlnSubProgramService } from '../services/aln-sub-program.service';
import { SubAlnComponent } from '../sub-aln/sub-aln.component';

@Component({
  selector: 'app-sub-aln-list',
  templateUrl: './sub-aln-list.component.html',
  styleUrl: './sub-aln-list.component.scss',
})
export class SubAlnListComponent {
  @Input() searchQuery!: string;

  userRole = '';

  fiscalYearQuery = '';
  agencyDesignatorCodeQuery = '';
  alnNumberQuery = '';
  subProgramIdQuery = '';
  subProgramTitleQuery = '';
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

  ELEMENT_DATA: any[] = [
    {
      "subprogramId": {
        "fiscalYear": 2924,
        "agencyCd": 84, 
        "aln": "0041", 
        "subprogramCd": "A"
      },
      "awardType": {
        "awardTypeCd": "DS",
        "awardtype": "Discretionary", 
        "validInd": "1"
      },
      "subprogramActionType": {
        "subprogramActionTypeCd": "FS",
        "subprogramActionType": "Funding Down the Slate", 
        "validind": "1"
      },
      "subprogramtitle": "Test Discretionary",
      "subprogramPurpose": "Purpose",
      "programWebsite":'',
      "performancePeriod": 30,
      "subAwardType": {
        "subAwardTypeCd": "RD",
        "subAwardType": "Research and Development",
        "validInd": ""
      },
      "reviewMethod": {
        "reviewMethodCd" : 'FR',
        "reviewMethod": "Field Reader",
        "validInd": "1"
      },
      "abstractType" : {
        "abstractTypeCd": "IA",
        "abstractType": "Individual Abstract", 
        "validInd":"1"
      },
      "numberBudgetPeriods": 12,
      "liquidationPeriod": 48,
      "suspensionPeriod": 15,
      "participantIndicator": "",
      "balanceRemainingNotification": "",
      "percentageThreshold": 70.00,
      "categoryCode":"",
      "grantAwardType":"",
      "actionDatetime" : '2024-06-11',
      "actionUserId": 0,
      "actionType": {
        "actionTypeCd": 1,
        "actionType": 'type',
        "validInd": "1"
      },
      "officeDetails":{
        "subprogramId": {
          "fiscalYear": 2024, 
          "agencyCd":84,
          "aln": "0041",
          "subprogramCd": "A"
        },
        "programOfficeCd": {
          "programOfficeCd" :"A",
          "programOfficeld": 23,
          "programOfficeNm": "Office of the Secretary",
          "programOfficeWebsite": "",
          "programOfficeShortNm": "OS",
          "agencyCd": 0,
          "validInd": null
        },
        "programOfficeDiv": {
          "programOfficeld": "23",
          "programOfficeDivId": "1",
          "programofficeDivName":"F",
          "programOfficeCd": {
            "programOfficeCd" :"F",
            "programOfficeld": 24,
            "programOfficeNm": "Office of Inspector General",
            "programOfficeWebsite": "",
            "programOfficeShortNm": "OIG",
            "agencyCd": 84,
            "validInd": null
          },
          "programOfficeDivShortNm": 'MIT'
        },
        "programContactId": 3,
        "programofficeInd":"",
        "actionDateTime": "2024-06-02",
        "actionUserId": 0,
        "actionTypeCd": null,
      },
      "reporting":{
        "subprogramId": {
          "fiscalYear": 2024, 
          "agencyCd":84,
          "aln": "0041",
          "subprogramCd": "A"
        },
        "performanceReports": {
          "performanceReportsCd": "A",
          "performanceReport": "Annual",
          "validInd": null
        },
        "numReportsPerBudgetPeriod": 5, 
        "finalPerformanceReport": '',
        "programFinancialReports": {
          "progFinancialReportsCd": "2", 
          "progFinancialReport": "Final", 
          "validInd": null
        },
        "actionDateTime": null,
        "accionUserId": 0,
        "actionTypeCode": null,
      },
      "costSharing" : {
        "subprogramId": {
          "fiscalYear": 2024, 
          "agencyCd":84,
          "aln": "0041",
          "subprogramCd": "A"
        },
        "paymentMethodCd":{
          "paymentMethodCd": "DD",
          "paymentMethod": "Draw Down",
           "validInd": "1"
        },
        "costShareRequired":"Y",
        "costSharePercentage": 18.00,
        "costShareAdjAllowed":"Y",
        "costShareMethodCd": {
          "costSharingCd": "CF",
          "costSharing": "Cost-Matching of the Federal Amount",
          "validInd": "1"
        },
        "maxdrawdownPctQ1": 25.00,
        "maxdrawdownPctQ2": 25.00,
        "maxdrawdownPctQ3": 25.00,
        "maxdrawdownPctQ4": 25.00,
        "indirectCostAllowed": "1",
        "programIndirectCostType":{
          "programIndirectCostTypeCd": 'RE',
          "programIndirectCostType":"Restricted",
          "validInd": "1"
        },
        "programIndirectCostRate": 12.99,
        "adminCostCapAllowed":"Y",
        "adminCostCap": 15.00,
        "actionDatetime": "2924-06-11",
        "actionUserId": 0,
        "actionTypeCode": null
      },
      "law": {
        "subprogramId": {
          "fiscalYear": 2024, 
          "agencyCd":84,
          "aln": "0041",
          "subprogramCd": "A"
        },
        "lawName": "series xyz",
        "lawPurpose": "purpose",
        "latestPublicLaw": "sdeswf",
        "title": "testing law",
        "section": "11",
        "cfrPart": "21",  
        "actionDatetime": "2024-06-11",
        "actionUserId": 0,
        "actionTypeCode": null,
        "programofficeCode": "8"
      },
      "accounting": {
        "subprogramId": {
          "fiscalYear": 2024, 
          "agencyCd":84,
          "aln": "0041",
          "subprogramCd": "A"
        },
      } 
    }
  ];
  TABLE_DATA: any[] = [];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  displayedColumns: string[] = [
    'fiscalYear',
    'aln',
    'action',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private alnService: AlnService, public dialog: MatDialog, 
    private subALnService: AlnSubProgramService,
    private SubAlnComponent: SubAlnComponent) {}

  async ngOnInit() {
    this.subALnService.resetValues();
  }

  getALN() {
    this.TABLE_DATA = this.ELEMENT_DATA;
    this.dataSource = new MatTableDataSource();
    this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
    setTimeout(() => {
      this.timeOutFunction();
    }, 50);
  }

  public timeOutFunction() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sortingDataAccessor = (
      data: any,
      sortHeaderId: string
    ): string => {
      if (typeof data[sortHeaderId] === 'string') {
        return data[sortHeaderId].toLocaleLowerCase();
      }

      return data[sortHeaderId];
    };
    this.dataSource.sort = this.sort;
  }

  search() {
    this.ELEMENT_DATA = this.TABLE_DATA.filter(
      (data) => data.subprogramId.fiscalYear.includes(parseInt(this.fiscalYearQuery)) && data.subprogramId.agencyCd.includes(parseInt(this.agencyDesignatorCodeQuery)) 
                && data.subprogramId.aln.includes(this.alnNumberQuery) && data.subprogramTitle.includes(this.subProgramTitleQuery)
    );  

    this.dataSource = new MatTableDataSource();
    this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
    setTimeout(() => {
      this.timeOutFunction();
    }, 50);
  }

  clear() {
    this.fiscalYearQuery = '';
    this.agencyDesignatorCodeQuery = '';
    this.alnNumberQuery = '';
    this.subProgramIdQuery = '';
    this.subProgramTitleQuery = '';
    this.ELEMENT_DATA = this.TABLE_DATA;
    this.dataSource = new MatTableDataSource();
    this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
    setTimeout(() => {
      this.timeOutFunction();
    }, 50);
  }

  edit(selectedElement: any) {
    this.subALnService.isEditing = true;
    this.subALnService.subAlnData = selectedElement;
    this.SubAlnComponent.sectionActive = 'update';
  }

}
