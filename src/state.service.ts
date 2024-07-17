import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private isFinishedSubject = new BehaviorSubject<boolean>(true);
  isFinished$ = this.isFinishedSubject.asObservable();

  setFinishedState(state: boolean) {
    this.isFinishedSubject.next(state);
  }
}
