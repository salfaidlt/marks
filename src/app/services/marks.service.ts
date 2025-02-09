import { Injectable } from '@angular/core';
import { Mark } from '../models/mark';

@Injectable({
  providedIn: 'root'
})
export class MarksService {

  marks: Mark[] = []

  constructor() {
    this.marks = this.getStudentMarks()
  }

  getMarks() {
    return this.marks
  }

  addStudentMark(mark: Mark): void {
    const marks = this.getStudentMarks();
    marks.push(mark);
    localStorage.setItem('studentMarks', JSON.stringify(marks));
    console.log('====================================');
    console.log('added');
    console.log('====================================');
  }

  getStudentMarks(): Mark[] {
    const data = localStorage.getItem('studentMarks');
    return data ? JSON.parse(data) : [];
  }

  updateStudentMark(updatedMark: Mark): void {
    const marks = this.getStudentMarks();
    const index = marks.findIndex(mark => mark.id === updatedMark.id);
    if (index !== -1) {
      marks[index] = updatedMark;
      localStorage.setItem('studentMarks', JSON.stringify(marks));
    }
  }

  getOneMark(id: string): Mark | undefined {
    const marks = this.getStudentMarks();
    return marks.find(mark => mark.id === id);
  }

  deleteStudentMark(id: string): void {
    let marks = this.getStudentMarks();
    marks = marks.filter(mark => mark.id !== id);
    localStorage.setItem('studentMarks', JSON.stringify(marks));
  }

  calculateS9AverageMark () {
    const marks = this.getStudentMarks();
    if (marks.length === 0) return 0;
    const semester9Marks = marks.filter(mark => mark.semester === "semestre 9");
    if (semester9Marks.length === 0) return 0;

    const semester9Total = semester9Marks.reduce((sum, mark) => sum + mark.score, 0);
    const semester9Average = semester9Total / semester9Marks.length
    return semester9Average
  }

  calculateS10AverageMark () {
    const marks = this.getStudentMarks();
    if (marks.length === 0) return 0;
    const semester10Marks = marks.filter(mark => mark.semester === "semestre 10");
    if (semester10Marks.length === 0) return 0;

    const semester10Total = semester10Marks.reduce((sum, mark) => sum + mark.score, 0);
    const semester10Average = semester10Total / semester10Marks.length
    return semester10Average
  }

  calculateAverageMark() {
    const marks = this.getStudentMarks();
    if (marks.length === 0) return 0;

    const totalMarks = marks.reduce((sum, mark) => sum + mark.score, 0);
    const totalMarksAverage = totalMarks / marks.length;

    return totalMarksAverage
  }
}
