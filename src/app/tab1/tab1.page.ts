import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonSelectOption,
  IonSelect,
  IonButton
} from '@ionic/angular/standalone';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import {Mark, MarkWithoutId} from '../models/mark';
import { isFormOK } from '../utils/utils';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ReactiveFormsModule,
    IonInput,
    IonSelectOption,
    IonSelect,
    IonButton,
  ],
})
export class Tab1Page {

  markForm = new FormGroup({
    score: new FormControl(0),
    course: new FormControl(''),
    semester: new FormControl(''),
    studentName: new FormControl(''),
  })

  constructor() { }

  onSubmit() {
    const formValues: MarkWithoutId | null = this.markForm.value
    if (isFormOK(formValues)) {
      
    }
  }
}
