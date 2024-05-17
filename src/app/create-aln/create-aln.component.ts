import { Component, Input, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { CreateComponent } from '../create/create.component';
import { ListAlnComponent } from '../list-aln/list-aln.component';
import { AlnService } from '../services/aln-service';

@Component({
  selector: 'app-create-aln',
  templateUrl: './create-aln.component.html',
  styleUrl: './create-aln.component.scss',
})
export class CreateAlnComponent {
  @Input() stepper!: MatStepper;

  selectedFile!: File;
  isSaving = false;
  isDraft = false;
  trackingNumber = '';
  submitted = false;

  createALNForm = new FormGroup({
    alnTitle: new FormControl('', [Validators.required]),
    alnCode: new FormControl('', [Validators.required]),
    purpose: new FormControl('', [Validators.required]),
    programOfficeContact: new FormControl('', [Validators.required]),
    descriptionDocument: new FormControl('', [Validators.required]),
    executiveOrder: new FormControl(false),
  });

  selectedDesignatorCode = '84';
  agencyDesignatorCodes = [
    '10',
    '11',
    '15',
    '16',
    '17',
    '23',
    '45',
    '47',
    '84',
    '93',
  ];

  constructor(
    private readonly alnService: AlnService,
    private readonly listAln: ListAlnComponent,
    private readonly createAln: CreateComponent,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.createALNForm.patchValue({
      alnTitle: this.alnService.createALN.alnTitle,
      alnCode: this.alnService.createALN.alnCode,
      purpose: this.alnService.createALN.purpose,
      programOfficeContact: this.alnService.createALN.programOfficeContact,
      descriptionDocument: this.alnService.createALN.descriptionDocument,
      executiveOrder: this.alnService.createALN.executiveOrder,
    });
  }

  save() {
    this.submitted = true;
    const {
      alnTitle,
      alnCode,
      purpose,
      programOfficeContact,
      descriptionDocument,
      executiveOrder,
    } = this.createALNForm.value;

    this.alnService.createALN.alnTitle = alnTitle ?? '';
    this.alnService.createALN.alnCode = alnCode ?? '';
    this.alnService.createALN.purpose = purpose ?? '';
    this.alnService.createALN.programOfficeContact = programOfficeContact ?? '';
    this.alnService.createALN.descriptionDocument = descriptionDocument ?? '';
    this.alnService.createALN.executiveOrder = executiveOrder ?? false;
    this.createAln.sectionActive = 'summary';
    this.stepper.next();
  }

  selectFile(event: any) {
    this.selectedFile = event.target.files[0];
    this.alnService.file = this.selectedFile;
    this.createALNForm.patchValue({
      descriptionDocument: this.selectedFile.name,
    });
  }

  saveasDraft() {
    this.isSaving = true;
    const {
      alnTitle,
      alnCode,
      purpose,
      programOfficeContact,
      descriptionDocument,
      executiveOrder,
    } = this.createALNForm.value;

    let data = {
      title: alnTitle,
      purpose: purpose,
      agencyCode: alnCode,
      programContactId: programOfficeContact,
      document: descriptionDocument,
      status: 'Draft',
      executiveOrderIndicator: executiveOrder ? 'Y' : 'N',
    };

    this.alnService.createAln(data).subscribe(
      (response: any) => {
        this.isSaving = false;
        this.isDraft = true;
        console.log('===response', response);
        this.trackingNumber = response.trackingNumber;
        this.dialog.open(ConfirmModalComponent, {
          panelClass: 'custom-dialog-container',
          autoFocus: false,
          restoreFocus: false,
          data: { trackingNumber: this.trackingNumber },
        });
      },
      (error: any) => {
        this.isSaving = false;
      }
    );
  }

  goBack() {
    this.listAln.sectionActive = 'list';
  }

  previous() {
    this.listAln.sectionActive = 'list';
  }
}
