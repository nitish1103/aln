import { Component } from '@angular/core';

@Component({
  selector: 'app-create-aln',
  templateUrl: './create-aln.component.html',
  styleUrl: './create-aln.component.scss',
})
export class CreateAlnComponent {
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
}
