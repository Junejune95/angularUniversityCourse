import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';
import { Course } from 'src/app/model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  @Input() course:Course;
  
  @Input() cardIndex;

  @Output('courseSelected')
  courseEmitter=new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }

  isImageVisible(){
    return this.course.iconUrl ? true : false;
  }

  cardClasses(){
    // retrun 
  }

  onCourseViewed(){
    console.log("card component - button click.....");
    this.courseEmitter.emit(this.course);
  }
}
