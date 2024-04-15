import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

export interface authenticateLayout {
  isAuthenticated: boolean;
}

@Injectable({ providedIn: 'root' })
export class SharedService {
  constructor() {}

  public authenticatedSubject = new Subject<authenticateLayout>();

  getAuthentication(): Observable<any> {
    return this.authenticatedSubject.asObservable();
  }

  updateAuthentication(isAuthenticated: boolean) {
    this.authenticatedSubject.next({ isAuthenticated: isAuthenticated });
  }
}
