import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HelpComponent} from './help.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {AppMaterialModule} from "../../app-material.module";

describe('HelpComponent', () => {
  let component: HelpComponent;
  let fixture: ComponentFixture<HelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppMaterialModule,
        NoopAnimationsModule,
        ReactiveFormsModule
      ],
      declarations: [HelpComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should disable login button on creation', () => {
    const element = fixture.nativeElement;
    expect(element.querySelector('button').disabled).toBeTrue();
  });
  it('should activate login button when form is valid', () => {
// getting the elements
    const buttonElement = fixture.nativeElement.querySelector('button');
    const loginElement = fixture.nativeElement.querySelector('input#login');
    const passwordElement = fixture.nativeElement.querySelector('input#password');
// setting a value
    loginElement.value = 'myLogin';
    passwordElement.value = 'password';
// trigger an event
    loginElement.dispatchEvent(new Event('input'));
    passwordElement.dispatchEvent(new Event('input'));
// Ask Angular to detect changes
    fixture.detectChanges();
    expect(buttonElement.disabled).toBeFalse();
  });
});
