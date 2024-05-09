import { Component } from '@angular/core';
import { ListAlnComponent } from '../list-aln/list-aln.component';
import { AlnService } from '../services/aln-service';

@Component({
  selector: 'app-delete-aln',
  templateUrl: './delete-aln.component.html',
  styleUrl: './delete-aln.component.scss',
})
export class DeleteAlnComponent {
  deleteAlnData: any;
  approvalDate = '';
  markActive = true;
  orderActive = true;
  comment = '';
  today = new Date();

  constructor(
    private alnService: AlnService,
    private listAln: ListAlnComponent
  ) {}

  ngOnInit() {
    this.deleteAlnData = this.alnService.deleteAlnData;
  }

  goBack() {
    this.alnService.isDeleting = false;
    this.listAln.sectionActive = 'list';
  }

  previous() {
    this.alnService.isDeleting = false;
    this.listAln.sectionActive = 'list';
  }

  continue() {
    this.listAln.sectionActive = 'delete-summary';
  }
}
