import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  isApproving = false;
  isRejecting = false;
  approveAlnData: any;
  editAlnData: any;
  deleteAlnData: any;
  alnData: any;
  approvalSubmissionDate = '';
  approvalComment = '';
  markActive = true;
  orderActive = true;
  isEditing = false;
  isDeleting = false;

  file!: File;

  confirmALnResponse: any;
  confirmApproveAlnResponse: any;

  constructor(private readonly httpClient: HttpClient) {}

  /**
   * method to create ALN
   */
  public createAln(postData: Object): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/create', postData);
  }

  /**
   * method to edit ALN
   */
  public editAln(postData: Object): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/update', postData);
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

  /**
   * method to approve ALN
   */
  public approveALN(id: any, comment: any, date: any): Observable<any> {
    let data = {
      statusComment: comment,
      OmbSubmissionDate: date,
    };
    return this.httpClient.post<any>(
      'http://localhost:8080/approve/' + id,
      data
    );
  }

  /**
   * method to reject ALN
   */
  public rejectALN(id: any): Observable<any> {
    return this.httpClient.post<any>('http://localhost:8080/reject/' + id, {});
  }

  /**
   * method to upload document
   */
  public uploadDocument(id: any): Observable<any> {
    let formData = new FormData();
    formData.append('file', this.file);

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    return this.httpClient.post<any>(
      'http://localhost:8080/file/upload',
      formData,
      {
        responseType: 'text' as 'json',
      }
    );
  }

  /**
   * method to login
   */
  public login(username: any, password: any): Observable<any> {
    let data = {
      username: username,
      password: password,
    };
    return this.httpClient.post<any>('http://localhost:8080/login', data, {
      responseType: 'text' as 'json',
    });
  }

  /**
   * method to create sub program ALN
   */
  public createSubAln(postData: Object): Observable<any> {
    return this.httpClient.post<any>(
      'http://localhost:8080/subprogram/create',
      postData
    );
  }
}
