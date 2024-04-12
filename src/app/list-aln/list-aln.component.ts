import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-aln',
  templateUrl: './list-aln.component.html',
  styleUrl: './list-aln.component.scss',
})
export class ListAlnComponent {
  constructor(private readonly router: Router) {}

  ELEMENT_DATA: any[] = [
    {
      trackingNumber: 12345,
      alnNumber: 45,
      title: 'A',
      status: 'Submit For Approval',
      programContact: 'Manager',
      activeIndicator: '27',
      agencyCode: '125',
      dateCreated: '04/04/24',
      psuedoAln: '',
    },
    {
      trackingNumber: 12346,
      alnNumber: 46,
      title: 'B',
      status: 'Rejected',
      programContact: 'Manager',
      activeIndicator: '26',
      agencyCode: '125',
      dateCreated: '04/04/24',
      psuedoAln: '',
    },
    {
      trackingNumber: 12347,
      alnNumber: 47,
      title: 'C',
      status: 'Approved',
      programContact: 'Manager',
      activeIndicator: '27',
      agencyCode: '125',
      dateCreated: '04/04/24',
      psuedoAln: '',
    },
  ];
  searchQuery = '';
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  displayedColumns: string[] = [
    'trackingNumber',
    'alnNumber',
    'title',
    'status',
    'programContact',
    'activeIndicator',
    'agencyCode',
    'dateCreated',
    'psuedoAln',
    'action',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  myControl = new FormControl();

  filterUser() {}

  async ngOnInit() {
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

  createALN() {
    this.router.navigate(['/create-aln']);
  }
}
