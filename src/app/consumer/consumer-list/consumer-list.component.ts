import {Component, OnInit} from '@angular/core';
import {ConsumerService} from "../consumer.service";
import {Observable} from "rxjs";
import {Consumer} from "../model/consumer";


let searchFilter = '';

@Component({
  selector: 'crm-consumer-list',
  templateUrl: './consumer-list.component.html',
  styleUrls: ['./consumer-list.component.scss']
})
export class ConsumerListComponent implements OnInit {

  searchCriteria?: string;
  consumers: Array<Consumer> = [];
  public consumersObs?: Observable<Consumer[]>;

  constructor(private consumerService: ConsumerService) {
  }

  ngOnInit(): void {
    this.consumersObs = this.consumerService.getAll();
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