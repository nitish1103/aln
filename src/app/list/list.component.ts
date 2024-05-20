import { Component, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { ListAlnComponent } from '../list-aln/list-aln.component';
import { AlnService } from '../services/aln-service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
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
  isLoading = false;

  constructor(
    private alnService: AlnService,
    public dialog: MatDialog,
    private alnComponent: ListAlnComponent
  ) {}

  async ngOnInit() {
    this.userRole = localStorage.getItem('role') ?? '';
    this.alnService.isRejecting = false;
    this.getALN();
  }

  getALN() {
    this.isLoading = true;
    this.alnService.getALNList().subscribe((response: any) => {
      this.ELEMENT_DATA = response;
      if (this.userRole === 'A89') {
        this.ELEMENT_DATA = this.ELEMENT_DATA.filter(
          (data) => data.status !== 'Draft'
        );
      }
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

  delete(selectedElement: any) {
    this.alnService.isDeleting = true;
    this.alnService.deleteAlnData = selectedElement;
    this.alnComponent.sectionActive = 'delete';
    this.alnComponent.isDeleting = true;
  }

  approve(selectedElement: any) {
    this.alnService.isApproving = false;
    this.alnService.approveAlnData = selectedElement;
    this.alnComponent.sectionActive = 'approve';
    this.alnComponent.isApproving = true;
  }

  edit(selectedElement: any) {
    this.alnService.isEditing = true;
    this.alnService.editAlnData = selectedElement;
    this.alnComponent.sectionActive = 'edit';
    this.alnComponent.isEditing = true;
  }
}
