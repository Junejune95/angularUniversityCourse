import { Component } from '@angular/core';
import { Course } from 'src/app/model/course';
import { COURSES } from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = COURSES;

  startDate = new Date(2000, 0, 1);

  title=COURSES[0].description;
  
  price=9.99232424234234234;

  rate=0.67;

  course=COURSES[0];

  onCourseSelected(course: Course) {
    console.log("App component - button click.....", course);
  }

}
