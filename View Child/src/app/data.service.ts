import { Injectable } from '@angular/core';
import{Observable,Subject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  private subject=new Subject();

  senddata(mes){
    this.subject.next({text:mes})
  }
  getdata(): Observable<any>{
    return this.subject.asObservable();
  }

  }

