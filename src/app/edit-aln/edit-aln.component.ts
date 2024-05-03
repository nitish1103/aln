import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ListAlnComponent } from '../list-aln/list-aln.component';
import { AlnService } from '../services/aln-service';

@Component({
  selector: 'app-edit-aln',
  templateUrl: './edit-aln.component.html',
  styleUrl: './edit-aln.component.scss',
})
export class EditAlnComponent {
  selectedFile!: File;
  isSaving = false;
  editAlnData: any;
  approvalDate = '';
  markActive = true;
  orderActive = true;
  comment = '';
  today = new Date();

  editALNForm = new FormGroup({
    trackingNumber: new FormControl('', [Validators.required]),
    alnNumber: new FormControl('', [Validators.required]),
    alnTitle: new FormControl('', [Validators.required]),
    agencyCode: new FormControl('', [Validators.required]),
    purpose: new FormControl('', [Validators.required]),
    programContact: new FormControl('', [Validators.required]),
    descriptionDocument: new FormControl('', [Validators.required]),
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
    this.editAlnData = this.alnService.editAlnData;
    this.editALNForm.patchValue({
      trackingNumber: this.alnService.editAlnData.trackingNumber,
      alnNumber: this.alnService.editAlnData.alnNumber,
      alnTitle: this.alnService.editAlnData.title,
      agencyCode: this.alnService.editAlnData.agencyCode.toString(),
      purpose: this.alnService.editAlnData.purpose,
      programContact: this.alnService.editAlnData.programContact,
      descriptionDocument: this.alnService.editAlnData.descriptionDocument,
    });
  }

  save() {
    console.log('====in save');
    const {
      alnTitle,
      agencyCode,
      purpose,
      programContact,
      descriptionDocument,
    } = this.editALNForm.value;

    this.alnService.editAlnData.title = alnTitle;
    this.alnService.editAlnData.agencyCode = agencyCode;
    this.alnService.editAlnData.purpose = purpose;
    this.alnService.editAlnData.programContact = programContact;
    this.alnService.approvalComment = this.comment;
    this.alnService.approvalSubmissionDate = this.approvalDate;

    this.listAln.sectionActive = 'edit-summary';
  }

  selectFile(event: any) {
    this.selectedFile = event.target.files[0];
    this.alnService.file = this.selectedFile;
    this.editALNForm.patchValue({
      descriptionDocument: this.selectedFile.name,
    });
  }

  goBack() {
    this.alnService.isEditing = false;
    this.listAln.sectionActive = 'list';
  }

  previous() {
    this.alnService.isEditing = false;
    this.listAln.sectionActive = 'list';
  }
}
