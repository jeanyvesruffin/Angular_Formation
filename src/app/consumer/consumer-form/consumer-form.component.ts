import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ConsumerService} from "../consumer.service";
import {Consumer} from "../model/consumer";
import {Router} from "@angular/router";


@Component({
  selector: 'crm-consumer-form',
  templateUrl: './consumer-form.component.html',
  styleUrls: ['./consumer-form.component.scss']
})
export class ConsumerFormComponent implements OnInit {
  consumerForm: FormGroup;

  constructor(private service: ConsumerService, private router: Router) {
    this.consumerForm = new FormGroup({
      civility: new FormControl('', [Validators.required]),
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),

    })
  }

  ngOnInit(): void {
  }

  add(consumer: Consumer): void {
    this.service.addConsumer(consumer).subscribe({
      next: (consumer: Consumer) => {
        this.router.navigateByUrl('/consumer-list');
      },
      error: (error: Error) => {
        alert(error)
      },
      complete: () => {
      }
    })
    console.log(this.consumerForm.value);

  }
}
