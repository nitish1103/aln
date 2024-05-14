import { Component, ViewChild } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { AlnService } from '../services/aln-service';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrl: './approve.component.scss',
})
export class ApproveComponent {
  @ViewChild('stepper') private stepper!: MatStepper;

  sectionActive = 'approve';

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  constructor(
    private _formBuilder: FormBuilder,
    private readonly alnService: AlnService
  ) {}

  ngOnInit() {}
}
