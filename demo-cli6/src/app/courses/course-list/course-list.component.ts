import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CourseFilter } from '../course-filter';
import { CourseService } from '../course.service';
import { Course } from '../course';

@Component({
    selector: 'course',
    templateUrl: 'course-list.component.html'
})
export class CourseListComponent {

    filter = new CourseFilter();
    selectedCourse: Course;

    get courseList(): Course[] {
        return this.courseService.courseList;
    }

    constructor(private courseService: CourseService) {
    }

    ngOnInit() {
    }

    search(): void {
        this.courseService.load(this.filter);
    }

    select(selected: Course): void {
        this.selectedCourse = selected;
    }

}
