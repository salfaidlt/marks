import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonSelectOption,
  IonSelect,
  IonButton,
  IonButtons,
  IonBackButton,
  AlertController
} from '@ionic/angular/standalone';
import { MarksService } from '../services/marks.service';
import { Mark } from '../models/mark';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.page.html',
  styleUrls: ['./modifier.page.scss'],
  standalone: true,
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
    IonButtons,
    IonBackButton,
  ]
})
export class ModifierPage implements OnInit {

  markForm = new FormGroup({
    score: new FormControl(0),
    course: new FormControl(''),
    semester: new FormControl(''),
  })

  mark!: Mark
  id!: string

  constructor(
    private markService: MarksService, 
    private route: ActivatedRoute,
    private alertController: AlertController,
    private router: Router
  ) {
    this.markForm.controls['score'].addValidators([Validators.required, Validators.min(0)])
    this.markForm.controls['course'].addValidators([Validators.required])
    this.markForm.controls['semester'].addValidators([Validators.required])
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id')!
    });
    this.mark = this.markService.getOneMark(this.id)!
    this.markForm.setValue({
      course: this.mark.course,
      score: this.mark.score,
      semester: this.mark.semester
    })
  }

  onSubmit() {
    const course: string = this.markForm.value.course!
    const semester: string = this.markForm.value.semester!
    const score: number = this.markForm.value.score!

    const tmpMark: Mark = {
      id: this.id,
      course: course,
      score: score,
      semester: semester,
    }
    this.markService.updateStudentMark(tmpMark)
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Modifier une note',
      // subHeader: 'A Sub Header Is Optional',
      message: 'La note a été modifée avec succès',
      buttons: this.alertButtons,
    });

    await alert.present();
  }

  public alertButtons = [
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        this.router.navigate(['/tabs/tab2'])
      },
    },
  ];
}
