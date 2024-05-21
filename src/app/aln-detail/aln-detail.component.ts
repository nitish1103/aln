import { Component } from '@angular/core';
import { ListAlnComponent } from '../list-aln/list-aln.component';
import { AlnService } from '../services/aln-service';

@Component({
  selector: 'app-aln-detail',
  templateUrl: './aln-detail.component.html',
  styleUrl: './aln-detail.component.scss',
})
export class AlnDetailComponent {
  alnData: any = {};

  constructor(
    private alnService: AlnService,
    private alnComponent: ListAlnComponent
  ) {}

  ngOnInit() {
    this.alnData = this.alnService.alnData;
  }

  cancel() {
    this.alnData = {};
    this.alnService.alnData = {};
    this.alnComponent.showAlnDetail = false;
  }
}
