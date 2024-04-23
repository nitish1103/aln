import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-aln',
  templateUrl: './create-aln.component.html',
  styleUrl: './create-aln.component.scss',
})
export class CreateAlnComponent {
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

  createAln() {}
}
