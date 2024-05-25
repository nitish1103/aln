import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

/**
 * This class is for creating services related to aln
 */
export class AlnSubProgramService {
  createSubALN = {
    fiscalYear: '',
    alnCode: '',
    alnNumber: '',
    subProgramId: '',
    awardType: '',
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
  };

  costSharingSubAln = {
    paymentMethod: '',
    costSharePercentage: '',
    costShareMethod: '',
    maximumDrawDownPercentageQ1: '',
    maximumDrawDownPercentageQ2: '',
    maximumDrawDownPercentageQ3: '',
    maximumDrawDownPercentageQ4: '',
    indirectCostAllowed: '',
    programIndirectCostRate: '',
    administrativeCostCap: '',
  };

  lawSubAln = {
    lawName: '',
    lawPurpose: '',
    latestPublicLaw: '',
    title: '',
    section: '',
    cfrPart: '',
  };

  constructor(private readonly httpClient: HttpClient) {}
}
