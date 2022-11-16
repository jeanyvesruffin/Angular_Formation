import {Component, OnInit} from '@angular/core';
import {DemoObservableService} from "../common/demo-observable.service";
import {map, Subscriber, Subscription, take} from "rxjs";

@Component({
  selector: 'crm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private subs: Subscription[] = [];
  phoneNumber = '1234567890';

  constructor(private demoObservable: DemoObservableService) {
  }

  ngOnInit(): void {
  }

  testObservable(): void {
    const subscriber = {
      next: (data: number) => {
        console.log(data)
      },
      error: (error: Error) => {
        console.error(error)
      },
      complete: () => {
        console.log('Complete')
      },
    }
    const subscription = this.demoObservable.testObservable().pipe(
      map(x => x * 10),
      take(2)
    ).subscribe(subscriber);
    this.subs.push(subscription)
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
    console.log('observable destroy');
  }
}
