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
import { Mark, MarkWithoutId } from '../models/mark';
import { isFormOK } from '../utils/utils';
import { MarksService } from '../services/marks.service';

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

  constructor(private markService: MarksService) {
    this.markForm.controls['score'].addValidators([Validators.required, Validators.min(0)])
    this.markForm.controls['course'].addValidators([Validators.required])
    this.markForm.controls['semester'].addValidators([Validators.required])
    this.markForm.controls['studentName'].addValidators([Validators.required])
  }

  onSubmit() {
    const course: string= this.markForm.value.course!
    const semester: string= this.markForm.value.semester!
    const score: number= this.markForm.value.score!
    const studentName: string= this.markForm.value.studentName!

    // const tmpMarkWithoutId = {
    //   course: course,
    //   score: score,
    //   studentName: studentName,
    //   semester: semester,
    // }
    // if (isFormOK(tmpMarkWithoutId)) {
      
    // }
    const tmpMark: Mark = {
      id: Date.now.toString(),
      course: course,
      score: score,
      studentName: studentName,
      semester: semester,
    }
    this.markService.addStudentMark(tmpMark)
  }
}
