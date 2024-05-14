import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { AlnService } from '../services/aln-service';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {
  @ViewChild('stepper') private stepper!: MatStepper;

  sectionActive = 'create';

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

  ngOnInit() {
    this.alnService.createALN.alnCode = '';
    this.alnService.createALN.alnTitle = '';
    this.alnService.createALN.executiveOrder = false;
    this.alnService.createALN.programOfficeContact = '';
    this.alnService.createALN.purpose = '';
  }
}
