import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CourseCardComponent } from 'src/app/course-card/course-card.component';
import { Course } from 'src/app/model/course';
import { COURSES } from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  courses = COURSES;

  startDate = new Date(2000, 0, 1);

  title = COURSES[0].description;

  price = 9.99232424234234234;

  rate = 0.67;

  course = COURSES[0];

  @ViewChild('cardRef', { read: ElementRef })
  card: CourseCardComponent;

  @ViewChild('container')
  container: ElementRef;

  // @ViewChildren(CourseCardComponent)
  // cards: QueryList<CourseCardComponent>;

  @ViewChildren(CourseCardComponent, { read: ElementRef })
  cards: QueryList<ElementRef>;

  constructor() {
    console.log('container', this.container);
  }
  ngAfterViewInit(): void {
    // console.log('container',this.container);
    // this.cards.changes.subscribe(
    //   cards => console.log(cards)
    // )
    console.log(this.cards);
  }

  onCourseEdited() {
    this.courses.push(
      {
        id: 2,
        description: "RxJs In Practice Course",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png',
        longDescription: "Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples",
        category: 'BEGINNER',
        lessonsCount: 10
      },
    );
  }

  onCourseSelected(course: Course) {
    console.log('container', this.container)
    console.log("App component - button click.....", course);
  }

}
