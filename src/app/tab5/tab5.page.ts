import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { trophyOutline } from 'ionicons/icons';
import { MarksService } from '../services/marks.service';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonIcon]
})
export class Tab5Page implements OnInit {
  moyenneS9!: number
  moyenneS10!: number
  moyenneGenerale!: number
  constructor(private markService: MarksService) {
    addIcons({ trophyOutline });
  }

  ngOnInit() {
    this.moyenneS9 = this.markService.calculateS9AverageMark()
    this.moyenneS10 = this.markService.calculateS10AverageMark()
    this.moyenneGenerale = this.markService.calculateAverageMark()
  }

}
