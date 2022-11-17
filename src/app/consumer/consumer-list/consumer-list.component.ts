import {Component, OnInit} from '@angular/core';
import {ConsumerService} from "../consumer.service";
import {Observable, Subscription} from "rxjs";
import {Consumer} from "../model/consumer";

@Component({
  selector: 'crm-consumer-list',
  templateUrl: './consumer-list.component.html',
  styleUrls: ['./consumer-list.component.scss']
})
export class ConsumerListComponent implements OnInit {

  searchCriteria?: string;
  consumers: Array<Consumer> = [];
  public consumersObs?: Observable<Consumer[]>;
  private subs: Subscription[] = [];

  constructor(private consumerService: ConsumerService) {
  }

  ngOnInit(): void {
    this.consumersObs = this.consumerService.getAll();
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  search(): void {
    this.consumersObs = this.consumerService.findForCriteria(this.searchCriteria!);
    console.log(this.searchCriteria);
  }

  delete(id: number): void {
    this.consumerService.delete(id).subscribe({
        next: () => {
          this.search();
        },
        error: (error: Error) => {
          alert(error)
        },
        complete: () => {
        }
      }
    )
  }
}
