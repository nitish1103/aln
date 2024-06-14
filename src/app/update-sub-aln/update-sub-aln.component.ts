import { Component, ViewChild } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-update-sub-aln',
  templateUrl: './update-sub-aln.component.html',
  styleUrl: './update-sub-aln.component.scss'
})
export class UpdateSubAlnComponent {
  @ViewChild('stepper') private stepper!: MatStepper;

  sectionActive = 'update';

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}
}
