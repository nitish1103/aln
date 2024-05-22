import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-sub-aln-program',
  templateUrl: './sub-aln-program.component.html',
  styleUrl: './sub-aln-program.component.scss',
})
export class SubAlnProgramComponent {
  @ViewChild('stepper') private stepper!: MatStepper;

  sectionActive = 'create';

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}
}
