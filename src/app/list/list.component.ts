import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AlnService } from '../services/aln-service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Input() searchQuery!: string;

  ELEMENT_DATA: any[] = [];
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
    'dateCreated',
    'executiveOrderIndicator',
    'action',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private alnService: AlnService) {}

  async ngOnInit() {
    this.getALN();
    this.TABLE_DATA = this.ELEMENT_DATA;
    this.dataSource = new MatTableDataSource();
    this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
    setTimeout(() => {
      this.timeOutFunction();
    }, 50);
  }

  getALN() {
    this.alnService.getALNList().subscribe((response: any) => {
      console.log('===response', response);
      this.ELEMENT_DATA = response;
      this.TABLE_DATA = this.ELEMENT_DATA;
      this.dataSource = new MatTableDataSource();
      this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
      setTimeout(() => {
        this.timeOutFunction();
      }, 50);
    });
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
