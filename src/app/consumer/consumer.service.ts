import {Injectable} from '@angular/core';
import { Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Consumer} from "./model/consumer";

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Consumer[]> {
    return this.http.get<Consumer[]>('/api/consumers')
  }

  findForCriteria(criteria?: string): Observable<Consumer[]> {
    return this.http.get<Consumer[]>(`/api/consumers?q=${criteria}`);
  }

  addConsumer(consumer:Consumer): Observable<Consumer>{
    return this.http.post<Consumer>(`/api/consumers`, consumer);
  }

}
