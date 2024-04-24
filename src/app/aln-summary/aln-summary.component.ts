import { Component } from '@angular/core';
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

  constructor(private readonly alnService: AlnService) {}

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

  goBack() {}

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
    this.alnService.createAln(data).subscribe((response: any) => {
      console.log('===response', response);
    });
  }
}
