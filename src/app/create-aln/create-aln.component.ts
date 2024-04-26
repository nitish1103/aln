import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListAlnComponent } from '../list-aln/list-aln.component';
import { AlnService } from '../services/aln-service';

@Component({
  selector: 'app-create-aln',
  templateUrl: './create-aln.component.html',
  styleUrl: './create-aln.component.scss',
})
export class CreateAlnComponent {
  selectedFile!: File;

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
    private readonly listAln: ListAlnComponent
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

    this.listAln.sectionActive = 'summary';
  }

  selectFile(event: any) {
    this.selectedFile = event.target.files[0];
    this.createALNForm.patchValue({
      descriptionDocument: this.selectedFile.name,
    });
  }

  saveasDraft() {
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
  }

  goBack() {
    this.listAln.sectionActive = 'list';
  }

  previous() {
    this.listAln.sectionActive = 'list';
  }
}
