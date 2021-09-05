import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import { HighlightDirective } from 'src/app/directives/highlight.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

    courses = COURSES;

    // @ViewChild(HighlightDirective)
    @ViewChild(CourseCardComponent,{read:HighlightDirective})
    highlighted:HighlightDirective;

    @ViewChildren(CourseCardComponent, {read: ElementRef})
    cards : QueryList<ElementRef>;


    constructor() {

    }

    ngAfterViewInit() {
      console.log(this.highlighted);
    }

    onToggle(isHighlighted:boolean){
      console.log(isHighlighted);
    }

    onCourseSelected(course:Course) {

    }

}
