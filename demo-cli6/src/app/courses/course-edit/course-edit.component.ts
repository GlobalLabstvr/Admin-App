import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';
import { Course } from '../course';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'course-edit',
  templateUrl: './course-edit.component.html'
})
export class CourseEditComponent implements OnInit {

    id: string;
    course: Course;
    errors: string;

    constructor(
        private route: ActivatedRoute,
        private courseService: CourseService) { 
    }

    ngOnInit() {
        this
            .route
            .params
            .pipe(
                map(p => p['id']),
                switchMap(id => {
                    if (id === 'new') return of(new Course());
                    return this.courseService.findById(id)
                })
            )
            .subscribe(
                course => { 
                    this.course = course; 
                    this.errors = ''; 
                },
                err => { 
                    this.errors = 'Error loading'; 
                }
            );
    }

    save() {
        this.courseService.save(this.course).subscribe(
            course => { 
                this.course = course; 
                this.errors = 'Save was successful!'; 
            },
            err => { 
                this.errors = 'Error saving'; 
            }
        );
    }
}