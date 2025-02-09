import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,
  IonList, IonItem, IonLabel
 } from '@ionic/angular/standalone';
import {Mark} from '../models/mark';
import { MarksService } from '../services/marks.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,
    IonList, IonItem, IonLabel
   ]
})
export class Tab2Page {
  marks: Mark[] = []
  constructor(private markService: MarksService ) {}

  ngOnInit() {
    this.marks = this.markService.getMarks()
  }
}
