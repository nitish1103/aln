import { Component, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AlnService } from '../services/aln-service';
import { AlnSubProgramService } from '../services/aln-sub-program.service';

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
      trackingNumber: 12345,
      alnNumber: 45,
      title: 'A',
      status: 'Draft',
      programContact: 'Manager',
      activeIndicator: 'Y',
      purpose: 'Training For Teacher',
      agencyCode: '84',
      createdDate: '04/04/24',
      executiveOrderIndicator: 'Y',
    },
    {
      trackingNumber: 12346,
      alnNumber: 46,
      title: 'B',
      status: 'Rejected',
      programContact: 'Manager',
      purpose: 'Training For Teacher',
      activeIndicator: 'N',
      agencyCode: '84',
      createdDate: '04/04/24',
      executiveOrderIndicator: 'Y',
    },
    {
      trackingNumber: 12347,
      alnNumber: 47,
      title: 'C',
      status: 'Approved',
      programContact: 'Manager',
      purpose: 'Training For Teacher',
      activeIndicator: 'N',
      agencyCode: '84',
      createdDate: '04/04/24',
      executiveOrderIndicator: 'Y',
    },
  ];
  TABLE_DATA: any[] = [];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  displayedColumns: string[] = [
    'trackingNumber',
    'alnNumber',
    'title',
    'status',
    'programContact',
    'activeIndicator',
    'agencyCode',
    'createdDate',
    'executiveOrderIndicator',
    'action',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private alnService: AlnService, public dialog: MatDialog, private subALnService: AlnSubProgramService) {}

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

}
