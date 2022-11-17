import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ConsumerService} from "../consumer.service";
import {Consumer} from "../model/consumer";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, Subscription} from "rxjs";


@Component({
  selector: 'crm-consumer-form',
  templateUrl: './consumer-form.component.html',
  styleUrls: ['./consumer-form.component.scss']
})
export class ConsumerFormComponent implements OnInit, OnDestroy {
  consumerForm: FormGroup;
  public consumersObs?: Observable<Consumer>;
  private subs: Subscription[] = [];

  constructor(private service: ConsumerService, private router: Router, private route: ActivatedRoute,) {
    this.consumerForm = new FormGroup({
      id: new FormControl(),
      civility: new FormControl('', [Validators.required]),
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),

    })
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const idAsString = params.get('id');
        if (idAsString) {
          const id: number = parseInt(idAsString, 10);
          this.service.findConsumer(id).subscribe(
            (consumer: Consumer) => this.consumerForm.patchValue(consumer)
          )
        }
      },
      error: (error: Error) => {
        alert(error)
      },
      complete: () => {
      }
    })
  }

  cancel(): void {
    this.router.navigateByUrl('/consumer-list')
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  onSubmit(consumer: Consumer): void {
    if (consumer.id) {
      this.subs.push(this.service.update(consumer).subscribe({
        next: () => {
          this.router.navigateByUrl('/consumer-list');
        },
        error: (error: Error) => {
          alert(error)
        },
        complete: () => {
        }
      }))
    } else {
      this.subs.push(this.service.addConsumer(consumer).subscribe({
        next: () => {
          this.router.navigateByUrl('/consumer-list');
        },
        error: (error: Error) => {
          alert(error)
        },
        complete: () => {
        }
      }))
    }
  }

  errorCivility = {
    required: 'Valeur obligatoire',
    minlength: '3 caractères sont obligatoire'
  }
  errorLastname = {
    required: 'Valeur obligatoire',
    minlength: '3 caractères sont obligatoire'
  }
  errorFirstname = {
    required: 'Valeur obligatoire',
    minlength: '3 caractères sont obligatoire'
  }
  errorEmail = {
    required: 'Valeur obligatoire',
    email: 'L\'adresse mail n\'est pas valide'
  }
  errorPhone = {
    required: 'Valeur obligatoire',
    minlength: '3 caractères sont obligatoire'
  }
}

