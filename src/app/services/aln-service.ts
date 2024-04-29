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

  confirmALnResponse: any;

  constructor(private readonly httpClient: HttpClient) {}

  /**
   * method to create ALN
   */
  public createAln(postData: Object): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/create', postData);
  }

  /**
   * method to get ALN
   */
  public getALNList(): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/findall');
  }

  /**
   * method to delete ALN
   */
  public deleteALN(id: any): Observable<any> {
    return this.httpClient.delete<any>('http://localhost:8080/delete/' + id);
  }
}
