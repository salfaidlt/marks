import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonSelectOption,
  IonSelect,
  IonButton,
  AlertController
} from '@ionic/angular/standalone';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Mark, MarkWithoutId } from '../models/mark';
import { isFormOK } from '../utils/utils';
import { MarksService } from '../services/marks.service';
import { Router } from '@angular/router';

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
  })

  constructor(
    private markService: MarksService,
    private router: Router,
    private alertController: AlertController
  ) {
    this.markForm.controls['score'].addValidators([Validators.required, Validators.min(0)])
    this.markForm.controls['course'].addValidators([Validators.required])
    this.markForm.controls['semester'].addValidators([Validators.required])
  }

  onSubmit() {
    const course: string= this.markForm.value.course!
    const semester: string= this.markForm.value.semester!
    const score: number= this.markForm.value.score!
  
    const tmpMark: Mark = {
      id: Date.now().toString(),
      course: course,
      score: score,
      semester: semester,
    }
    this.markService.addStudentMark(tmpMark)
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Ajouter une note',
      // subHeader: 'A Sub Header Is Optional',
      message: 'La note a été ajoutée avec succès',
      buttons: this.alertButtons,
    });

    await alert.present();
  }

  public alertButtons = [
    {
      text: 'Voir la liste',
      role: 'confirm',
      handler: () => {
        this.router.navigate(['/tabs/tab2'])
      },
    },
  ];
}
