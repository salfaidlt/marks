import { Injectable } from '@angular/core';
import {Mark} from '../models/mark';

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

  deleteStudentMark(id: string): void {
    let marks = this.getStudentMarks();
    marks = marks.filter(mark => mark.id !== id);
    localStorage.setItem('studentMarks', JSON.stringify(marks));
  }

  calculateAverageMark(studentName: string): number {
    const marks = this.getStudentMarks();
    const studentMarks = marks.filter(mark => mark.studentName === studentName);
    if (studentMarks.length === 0) return 0;
  
    const totalMarks = studentMarks.reduce((sum, mark) => sum + mark.score, 0);
    return totalMarks / studentMarks.length;
  }
}
