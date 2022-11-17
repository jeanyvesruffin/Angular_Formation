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
    return this.http.get<Consumer[]>('/api/consumers');
  }

  findForCriteria(criteria?: string): Observable<Consumer[]> {
    return this.http.get<Consumer[]>(`/api/consumers?q=${criteria}`);
  }

  addConsumer(consumer:Consumer): Observable<Consumer>{
    return this.http.post<Consumer>(`/api/consumers`, consumer);
  }

  findConsumer(id:number): Observable<Consumer>{
    return this.http.get<Consumer>(`/api/consumers/${id}`);
  }

  update(consumer:Consumer):Observable<void>{
    return this.http.put<void>(`/api/consumers/${consumer.id}`, consumer);
  }

  delete(id:number):Observable<void>{
    return this.http.delete<void>(`/api/consumers/${id}`);
  }

}
