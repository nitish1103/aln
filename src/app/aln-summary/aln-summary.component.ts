import { Component, Input } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { CreateComponent } from '../create/create.component';
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

  isSaving = false;
  @Input() stepper!: MatStepper;

  constructor(
    private readonly alnService: AlnService,
    private readonly listALN: ListAlnComponent,
    private readonly createComponent: CreateComponent
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
    this.createComponent.sectionActive = 'create';
    this.stepper.previous();
  }

  save() {
    this.isSaving = true;
    let data = {
      title: this.alnService.createALN.alnTitle,
      purpose: this.alnService.createALN.purpose,
      agencyCode: this.alnService.createALN.alnCode,
      programContactId: this.alnService.createALN.programOfficeContact,
      document: this.alnService.createALN.descriptionDocument,
      status: 'Submitted for Approval',
      executiveOrderIndicator: this.alnService.createALN.executiveOrder
        ? 'Y'
        : 'N',
    };
    this.alnService.createAln(data).subscribe(
      (response: any) => {
        this.isSaving = false;
        this.alnService.confirmALnResponse = response;
        this.uploadFile(response.trackingNumber, this.alnService.createALN.descriptionDocument);
      },
      (error: any) => {
        this.isSaving = false;
        this.createComponent.sectionActive = 'confirm';
        this.stepper.next();
      }
    );
  }

  uploadFile(id: any, filename: string) {
    this.alnService.uploadDocument(id, filename).subscribe(
      (response: any) => {
        console.log('===response of upload', response);
        this.alnService.createALN.alnCode = '';
        this.alnService.createALN.alnTitle = '';
        this.alnService.createALN.executiveOrder = false;
        this.alnService.createALN.programOfficeContact = '';
        this.alnService.createALN.purpose = '';
        this.createComponent.sectionActive = 'confirm';
        this.stepper.next();
      },
      (error: any) => {}
    );
  }
}
