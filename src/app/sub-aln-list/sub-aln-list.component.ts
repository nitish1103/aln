import { Component, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AlnService } from '../services/aln-service';

@Component({
  selector: 'app-sub-aln-list',
  templateUrl: './sub-aln-list.component.html',
  styleUrl: './sub-aln-list.component.scss',
})
export class SubAlnListComponent {
  @Input() searchQuery!: string;

  userRole = '';

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

  constructor(private alnService: AlnService, public dialog: MatDialog) {}

  async ngOnInit() {}

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
    this.dataSource = new MatTableDataSource();
    this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
    setTimeout(() => {
      this.timeOutFunction();
    }, 50);
  }

  clear() {
    this.searchQuery = '';
    this.ELEMENT_DATA = this.TABLE_DATA;
    this.dataSource = new MatTableDataSource();
    this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
    setTimeout(() => {
      this.timeOutFunction();
    }, 50);
  }
}