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
  showFilter = false;
  defaultSearchOption = 'title';
  status = 'all';
  sectionActive = 'list';
  isApproving = false;
  isDeleting = false;
  isEditing = false;

  userRole = '';
  constructor(private readonly router: Router) {}

  ELEMENT_DATA: any[] = [];
  TABLE_DATA: any[] = [];
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
    this.userRole = localStorage.getItem('role') ?? '';
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
    if (this.searchQuery != '' && this.status != 'all') {
      this.ELEMENT_DATA = this.TABLE_DATA.filter(
        (data) =>
          data[this.defaultSearchOption].includes(this.searchQuery) &&
          data.status == this.status
      );
    } else if (this.searchQuery != '' && this.status == 'all') {
      this.ELEMENT_DATA = this.TABLE_DATA.filter((data) =>
        data[this.defaultSearchOption].includes(this.searchQuery)
      );
    } else if (this.searchQuery == '' && this.status !== 'all') {
      this.ELEMENT_DATA = this.TABLE_DATA.filter(
        (data) => data.status === this.status
      );
    }

    this.dataSource = new MatTableDataSource();
    this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
    setTimeout(() => {
      this.timeOutFunction();
    }, 50);
  }

  clear() {
    this.searchQuery = '';
    this.status = 'all';
    this.ELEMENT_DATA = this.TABLE_DATA;
    this.dataSource = new MatTableDataSource();
    this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
    setTimeout(() => {
      this.timeOutFunction();
    }, 50);
  }

  createALN() {
    this.router.navigate(['/create-aln']);
  }
}
