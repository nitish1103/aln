import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

/**
 * This class is for creating services related to aln
 */
export class AlnService {
  createALN = {
    alnTitle: '',
    alnCode: '',
    purpose: '',
    programOfficeContact: '',
    descriptionDocument: '',
    executiveOrder: false,
  };

  constructor(private readonly httpClient: HttpClient) {}

  /**
   * method to create ALN
   */
  public createAln(postData: Object): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/create', postData);
  }
}
