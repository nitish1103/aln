import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ABSTRACT_TYPES, AWARD_TYPES, FED_OFFICE_CODES, FED_OFFICE_DIV_CODES, INDIRECT_COST_TYPES, PAYMENT_METHODS, PERFORMANCE_REPORT_TYPES, REVIEW_METHODS, SUB_AWARD_TYPES, SUB_PROGRAM_ACTION_TYPES } from './aln-sub.interface';

@Injectable({
  providedIn: 'root',
})

/**
 * This class is for creating services related to aln
 */
export class AlnSubProgramService {
  programFinancialReports:any[] = [];
  checkedActionTypes:any[] = [];
  divPersons:any[] = [];
  accountingData:any[] = [];
  isDiscretionary = false;
  finalPerformceReport = false;
  isEditing = false;
  subAlnData:any;
  createSubALN = {
    fiscalYear: '',
    alnCode: '',
    alnNumber: '',
    subProgramId: '',
    awardType: '',
    awardDescription: '',
    subProgramActionType: ''
  };

  generalSubALN = {
    fiscalYear: '',
    alnSubProgram: '',
    awardType: '',
    subProgramTitle: '',
    subProgramPurpose: '',
    programWebsite: '',
    subAwardType: '',
    reveiwMethod: '',
    abstractType: '',
    performancePeriod: '',
    budgetPeriod: '',
    liquidationPeriod: '',
    suspensionPeriod: '',
    percentageThreshold: '',
    categoryCode: '',
    grantAwardType: '',
  };

  programOfficeSubALN = {
    primaryProgramOffice: '',
    primaryProgramOfficeDivison: '',
    subProgramContact: '',
    secondaryProgramOffice: '',
  };

  reportingSubALN = {
    performaceReport: '',
    numberPerBudgetPeriod: '',
    programFinancialReport: ''
  };

  costSharingSubAln = {
    paymentMethod: '',
    costSharePercentage: '',
    costShareMethod: '',
    costShareRequired: '',
    costShareAdjustmentAllowed: '',
    maximumDrawDownPercentageQ1: '',
    maximumDrawDownPercentageQ2: '',
    maximumDrawDownPercentageQ3: '',
    maximumDrawDownPercentageQ4: '',
    indirectCostAllowed: '',
    programIndirectCostRate: '',
    administrativeCostCap: '',
    programIndirectCostType: '',
    isCostShareRequired : false,
    isIndirectCostAllowed : true,
    isCostSharedAdjAllowed : false,
    admCostCapAllowed : false
  };

  lawSubAln = {
    lawName: '',
    lawPurpose: '',
    latestPublicLaw: '',
    title: '',
    section: '',
    cfrPart: '',
  };

  accouting = {
    fundCode: '',
    category: '',
    budgetFY: '',
    organization: '',
    limitation: '',
    objectClass: '',
    fundControlLevel: '',
    activity: '',
    aln: '',
    sector: '',
    cohort: ''
  }

  resetValues() {
    this.createSubALN = {
      fiscalYear: '',
      alnCode: '',
      alnNumber: '',
      subProgramId: '',
      awardType: '',
      awardDescription: '',
      subProgramActionType: ''
    }

    this.generalSubALN = {
      fiscalYear: '',
      alnSubProgram: '',
      awardType: '',
      subProgramTitle: '',
      subProgramPurpose: '',
      programWebsite: '',
      subAwardType: '',
      reveiwMethod: '',
      abstractType: '',
      performancePeriod: '',
      budgetPeriod: '',
      liquidationPeriod: '',
      suspensionPeriod: '',
      percentageThreshold: '',
      categoryCode: '',
      grantAwardType: '',
    }
    this.programOfficeSubALN = {
      primaryProgramOffice: '',
      primaryProgramOfficeDivison: '',
      subProgramContact: '',
      secondaryProgramOffice: '',
    };
  
    this.reportingSubALN = {
      performaceReport: '',
      numberPerBudgetPeriod: '',
      programFinancialReport: ''
    };
  
    this.costSharingSubAln = {
      paymentMethod: '',
      costSharePercentage: '',
      costShareMethod: '',
      costShareRequired: '',
      costShareAdjustmentAllowed: '',
      maximumDrawDownPercentageQ1: '',
      maximumDrawDownPercentageQ2: '',
      maximumDrawDownPercentageQ3: '',
      maximumDrawDownPercentageQ4: '',
      indirectCostAllowed: '',
      programIndirectCostRate: '',
      administrativeCostCap: '',
      programIndirectCostType: '',
      isCostShareRequired : false,
      isIndirectCostAllowed : true,
      isCostSharedAdjAllowed : false,
      admCostCapAllowed : false
    };
  
    this.lawSubAln = {
      lawName: '',
      lawPurpose: '',
      latestPublicLaw: '',
      title: '',
      section: '',
      cfrPart: '',
    };
  }

  constructor(private readonly httpClient: HttpClient) {}

  /**
   * method to create sub program ALN
   */
  public createSubAln(): Observable<any> {
    let awardType = AWARD_TYPES.filter((award:any) => award.AWARD_TYPE_CD === this.createSubALN.awardType)[0];
    let subProgramActionType = SUB_PROGRAM_ACTION_TYPES.filter((program:any) => program.SUB_PROGRAM_ACTION_TYPE_CD === this.createSubALN.subProgramActionType)[0];
    let subAwardType = SUB_AWARD_TYPES.filter((subaward:any) => subaward.SUB_AWARD_TYPE_CD === this.generalSubALN.subAwardType)[0];
    let reviewMethod = REVIEW_METHODS.filter((review:any) => review.REVIEW_METHOD_CD === this.generalSubALN.reveiwMethod)[0];
    let abstractType = ABSTRACT_TYPES.filter((absType:any) => absType.ABSTRACT_TYPE_CD === this.generalSubALN.abstractType)[0];
    let performaceReport = PERFORMANCE_REPORT_TYPES.filter((report:any) => report.PERF_RPT_TYPE_CD === this.reportingSubALN.performaceReport)[0];
    let paymentMethod = PAYMENT_METHODS.filter((payment:any) => payment.PAYMENT_METHOD_CD === this.costSharingSubAln.paymentMethod)[0];
    let indirectCostType = INDIRECT_COST_TYPES.filter((cost:any) => cost.INDIRECT_COST_TYPE_CD === this.costSharingSubAln.programIndirectCostType)[0];
    let primaryProgramOffice = FED_OFFICE_CODES.filter((fedCode:any) => fedCode.FED_OFFICE_SHORT_NM === this.programOfficeSubALN.primaryProgramOffice)[0];
    let primaryProgramOfficeDiv = FED_OFFICE_DIV_CODES.filter((fedCode:any) => fedCode.FED_OFFICE_DIV_SHORT_NM === this.programOfficeSubALN.primaryProgramOfficeDivison)[0];
    let subProgramContact = this.divPersons.filter((person:any) => person.progOfficeDivPersonalId.progOfficeDivPersonId === this.programOfficeSubALN.subProgramContact)[0];




    let data = {
      "subProgramId": {
        "fiscalYear": Number(this.createSubALN.fiscalYear),
        "agencyCd": Number(this.createSubALN.alnCode),
        "aln": this.createSubALN.alnNumber,
        "subProgramCd": 'FS'
      },
      "awardType": {
        "awardTypeCd": awardType.AWARD_TYPE_CD,
        "awardType": awardType.AWARD_TYPE_CD,
        "validInd": '1'
      },
      "subprogramActionType": {
        "subprogramActionTypeCd": subProgramActionType.SUB_PROGRAM_ACTION_TYPE_CD,
        "subprogramActionType": subProgramActionType.SUB_PROGRAM_ACTION_TYPE,
        "validInd": '1'
      },
      "subprogramTitle": this.generalSubALN.subProgramTitle,
      "subprogramPurpose": this.generalSubALN.subProgramPurpose,
      "programWebsite": this.generalSubALN.programWebsite,
      "performancePeriod": Number(this.generalSubALN.performancePeriod),
      "subAwardType": {
        "subAwardTypeCd": subAwardType.SUB_AWARD_TYPE_CD,
        "subAwardType": subAwardType.SUB_AWARD_TYPE,
        "validInd": "1"
      },
      "reviewMethod": {
        "reviewMethodCd": reviewMethod.REVIEW_METHOD_CD,
        "reviewMethod": reviewMethod.REVIEW_METHOD,
        "validInd": "1"
      },
      "abstractType": {
        "abstractTypeCd": abstractType.ABSTRACT_TYPE_CD,
        "abstractType": abstractType.ABSTRACT_TYPE,
        "validInd": "1"
      },
      "numberBudgetPeriods": Number(this.generalSubALN.budgetPeriod),
      "liquidationPeriod": Number(this.generalSubALN.liquidationPeriod),
      "suspensionPeriod": Number(this.generalSubALN.suspensionPeriod),
      "participantIndicator": "",
      "balanceRemainingNotification": "",
      "subAwardTotal": 12.5,
      "categoryCode": this.generalSubALN.categoryCode,
      "grantAwardYear": Number(this.generalSubALN.grantAwardType),
      "actionDatetime": new Date().toISOString(),
      "actionUserid": 1,
      "actionType": {
        "actionTypeCd": "1",
        "actionType": 'type',
        "validInd": "1",
      },
      "reporting": {
        "subprogramId": {
          "fiscalYear": Number(this.createSubALN.fiscalYear),
          "agencyCd": Number(this.createSubALN.alnCode),
          "aln": this.createSubALN.alnNumber,
          "subprogramCd": "NW"
        },
        "performanceReports": {
          "performanceReportsCd": performaceReport.PERF_RPT_TYPE_CD,
          "performanceReport": performaceReport.PERF_RPT_TYPE
        },
        "numReportsPerBudgetPeriod": Number(this.reportingSubALN.numberPerBudgetPeriod),
        "finalPerformanceReport": "",
        "programFinancialReports": {
          "progFinancialReportsCd": "1",
          "progFinancialReport": this.reportingSubALN.programFinancialReport
        }
      },
      "costSharing": {
        "subprogramId": {
          "fiscalYear": Number(this.createSubALN.fiscalYear),
          "agencyCd": Number(this.createSubALN.alnCode),
          "aln": this.createSubALN.alnNumber,
          "subprogramCd": "NW"
        },
        "paymentMethodCd": {
          "paymentMethodCd": paymentMethod.PAYMENT_METHOD_CD,
          "paymentMethod": paymentMethod.PAYMENT_METHOD,
          "validInd": "1"
        },
        "costShareRequired": this.costSharingSubAln.costShareRequired,
        "costSharePercentage": this.costSharingSubAln.costSharePercentage,
        "costShareAdjAllowed": this.costSharingSubAln.costShareAdjustmentAllowed,
        "costShareMethodCd": {
          "costShareMethodCd": this.costSharingSubAln.costShareMethod,
          "costSharing": this.costSharingSubAln.costShareMethod === 'CF' ? "Cost-Matching of the Federal Amount" : "Cost Sharing of total project cost",
          "validInd": "1"
        },
        "maxDrawdownPct1": this.costSharingSubAln.maximumDrawDownPercentageQ1,
        "maxDrawdownPct2": this.costSharingSubAln.maximumDrawDownPercentageQ2,
        "maxDrawdownPct3": this.costSharingSubAln.maximumDrawDownPercentageQ3,
        "maxDrawdownPct4": this.costSharingSubAln.maximumDrawDownPercentageQ4,
        "indirectCostAllowed": this.costSharingSubAln.indirectCostAllowed,
        "programIndirectCostType": {
          "programIndirectCostTypeCd": indirectCostType.INDIRECT_COST_TYPE_CD,
          "programIndirectCostType": indirectCostType.INDIRECT_COST_TYPE,
          "validInd": "1"
        },
        "programIndirectCostRate": "",
        "adminCostCap": this.costSharingSubAln.administrativeCostCap,
        "actionDateTime": new Date().toISOString(),
        "actionUserId": "",
        "actionTypeCode": {
          "actionTypeCd": "1",
          "actionType": "1",
          "validInd": "1"
        }
      },
      "law": {
        "subprogramId": {
          "fiscalYear": Number(this.createSubALN.fiscalYear),
          "agencyCd": Number(this.createSubALN.alnCode),
          "aln": this.createSubALN.alnNumber,
          "subprogramCd": "NW"
        },
        "lawName": this.lawSubAln.lawName,
        "lawPurpose": this.lawSubAln.lawPurpose,
        "latestPublicLaw": this.lawSubAln.latestPublicLaw,
        "title": this.lawSubAln.title,
        "section": this.lawSubAln.section,
        "cfrPart": this.lawSubAln.cfrPart,
        "actionDateTime": new Date().toISOString(),
        "actionUserId": "",
        "actionTypeCode": {
          "actionTypeCd": "1",
          "actionType": "1",
          "validInd": "1"
        }
      },
      "officeDetails": {
        "subprogramId": {
          "fiscalYear": Number(this.createSubALN.fiscalYear),
          "agencyCd": Number(this.createSubALN.alnCode),
          "aln": this.createSubALN.alnNumber,
          "subprogramCd": "NW"
        },
        "programOfficeCd": {
          "programOfficeCd": primaryProgramOffice.FED_OFFICE_CD,
          "programOfficeId": primaryProgramOffice.FED_OFFICE_ID,
          "programOfficeShortName": primaryProgramOffice.FED_OFFICE_SHORT_NM
        },
        "programOfficeDiv": {
          "programOfficeDivId": primaryProgramOfficeDiv.FED_OFFICE_DIV_ID,
          "programOfficeId": primaryProgramOfficeDiv.FED_OFFICE_ID,
          "programOfficeDivName": primaryProgramOfficeDiv.FED_OFFICE_NM,
          "programOfficeDivShortName": primaryProgramOfficeDiv.FED_OFFICE_DIV_SHORT_NM
        },
        "programContactId": this.programOfficeSubALN.subProgramContact,
        "programOfficeInd": "",
        "actionDateTime": new Date().toISOString(),
        "actionUserId": "",
        "actionTypeCode": {
          "actionTypeCd": "1",
          "actionType": "U",
          "validInd": ""
        }
      }
    }
    return this.httpClient.post<any>(
      'http://localhost:8080/subprogram/create',
      data
    );
  }

  /**
   * method to get div person
   */
  public getAllProgramOfficeNames(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/findAllDivPersons');
  }

   /**
   * method to get all sub alns
   */
   public getAllSubAlns(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:808/findAll');
  }
}
