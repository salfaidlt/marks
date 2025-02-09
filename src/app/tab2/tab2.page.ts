import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,
  IonList, IonItem, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,
  IonCardContent, IonIcon
 } from '@ionic/angular/standalone';
import {Mark} from '../models/mark';
import { MarksService } from '../services/marks.service';
import { addIcons } from 'ionicons';
import { statsChartOutline } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,
    IonList, IonItem, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,
    IonCardContent, IonIcon
   ]
})
export class Tab2Page {
  marks: Mark[] = []
  studentName: string = ''
  constructor(private markService: MarksService, private router: Router ) {
    addIcons({
      statsChartOutline
    })
  }

  ngOnInit() {
    this.marks = this.markService.getMarks()
  }

  modifierNote(id: string) {
    this.router.navigate(['/modifier', id])
  }

  supprimerNote(id: string) {
    this.markService.deleteStudentMark(id)
    window.location.reload()
  }
}
