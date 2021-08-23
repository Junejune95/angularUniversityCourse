import { Component } from '@angular/core';
import { Course } from 'src/app/model/course';
import {COURSES} from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses=COURSES;


  onCourseSelected(course:Course){
    console.log("App component - button click.....",course);
  }

}
