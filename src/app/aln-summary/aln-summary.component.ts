import { Component } from '@angular/core';
import { ListAlnComponent } from '../list-aln/list-aln.component';
import { AlnService } from '../services/aln-service';

@Component({
  selector: 'app-aln-summary',
  templateUrl: './aln-summary.component.html',
  styleUrl: './aln-summary.component.scss',
})
export class AlnSummaryComponent {
  createALN = {
    alnTitle: '',
    alnCode: '',
    purpose: '',
    programOfficeContact: '',
    descriptionDocument: '',
    executiveOrder: false,
  };

  constructor(
    private readonly alnService: AlnService,
    private readonly listALN: ListAlnComponent
  ) {}

  ngOnInit() {
    this.createALN.alnTitle = this.alnService.createALN.alnTitle;
    this.createALN.alnCode = this.alnService.createALN.alnCode;
    this.createALN.purpose = this.alnService.createALN.purpose;
    this.createALN.programOfficeContact =
      this.alnService.createALN.programOfficeContact;
    this.createALN.descriptionDocument =
      this.alnService.createALN.descriptionDocument;
    this.createALN.executiveOrder = this.alnService.createALN.executiveOrder;
  }

  goBack() {
    this.alnService.createALN.alnCode = '';
    this.alnService.createALN.alnTitle = '';
    this.alnService.createALN.executiveOrder = false;
    this.alnService.createALN.programOfficeContact = '';
    this.alnService.createALN.purpose = '';
    this.listALN.sectionActive = 'list';
  }

  previous() {
    this.listALN.sectionActive = 'create';
  }

  save() {
    let data = {
      title: this.alnService.createALN.alnTitle,
      purpose: this.alnService.createALN.purpose,
      agencyCode: this.alnService.createALN.alnCode,
      programContactId: this.alnService.createALN.programOfficeContact,
      executiveOrderIndicator: this.alnService.createALN.executiveOrder
        ? 'Y'
        : 'N',
    };
    this.alnService.createAln(data).subscribe(
      (response: any) => {
        console.log('===response', response);
        this.alnService.confirmALnResponse = response;
        this.alnService.createALN.alnCode = '';
        this.alnService.createALN.alnTitle = '';
        this.alnService.createALN.executiveOrder = false;
        this.alnService.createALN.programOfficeContact = '';
        this.alnService.createALN.purpose = '';
        this.listALN.sectionActive = 'confirmation';
      },
      (error: any) => {
        this.listALN.sectionActive = 'confirmation';
      }
    );
  }
}
