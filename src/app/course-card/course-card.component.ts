import { Component, Input, OnInit, EventEmitter, Output, ContentChild, ContentChildren, AfterViewInit, AfterContentInit, QueryList } from '@angular/core';
import { CourseImageComponent } from 'src/app/course-image/course-image.component';
import { Course } from 'src/app/model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit,AfterViewInit,AfterContentInit {
  @Input() course: Course;

  @Input() cardIndex: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  // @ContentChild(CourseImageComponent)
  // image:CourseImageComponent;

  @ContentChildren(CourseImageComponent)
  images:QueryList<CourseImageComponent>;

  constructor() { }

  ngAfterContentInit(): void {
    console.log(this.images);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    console.log(this.images);
  }

  isImageVisible() {
    return this.course.iconUrl ? true : false;
  }

  cardClasses() {
    // if(this.course.category=='BEGINNER'){
    //   return ['beginner'];
    // }
    return {
      'beginner': this.course.category == 'BEGINNER',
    }
  }

  cardStyles() {
    return {
      'background-image': 'url('+ this.course.iconUrl+')'
    }
  }

  onCourseViewed() {
    console.log("card component - button click.....");
    this.courseEmitter.emit(this.course);
  }
}
