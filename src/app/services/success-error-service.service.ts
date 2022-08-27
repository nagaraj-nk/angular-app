import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ResponseMessage } from '../model/response-message';

@Injectable({
  providedIn: 'root',
})
export class SuccessErrorServiceService {
  constructor() {}

  observer = new Subject();
  public subscriber$ = this.observer.asObservable();

  emitData(data: any) {
    console.log('emitting data: ' + data);

    this.observer.next(data);
  }
}
