import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubjectService } from '../subject.service';
import { Subject } from '../subject';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Course } from 'src/app/courses/course';
import { CourseService } from 'src/app/courses/course.service';

@Component({
    selector: 'subject-edit',
    templateUrl: './subject-edit.component.html'
})
export class SubjectEditComponent implements OnInit {

    id: string;
    subject: Subject;
    errors: string;
    courses: Course[];
    flag: boolean;

    constructor(
        private route: ActivatedRoute,
        private courseService: CourseService,
        private subjectService: SubjectService) {
    }

    ngOnInit() {
        this
            .route
            .params
            .pipe(
                map(p => p['id']),
                switchMap(id => {
                    this.courseService.getCourseList().subscribe(
                        result => {
                            this.courses = result;
                        },
                        err => {
                            console.log(JSON.stringify(err));
                            console.error('error loading', err);
                        }
                    );
                    if (id === 'new') {
                        this.flag = true;  
                        return of(new Subject(new Course()));
                    }
                    else {
                        this.flag = false;
                        return this.subjectService.findById(id);
                    }        
                })
            )
            .subscribe(
                    subject => {
                        console.log('subject:'+JSON.stringify(subject))
                        this.subject = subject;
                        this.errors = '';
                    },
                    err => {
                        this.errors = 'Error loading';
                    }
                );
    }

    create() {
        console.log("s:"+JSON.stringify(this.subject));
        this.subjectService.create(this.subject).subscribe(
            subject => {
                this.subject = subject;
                console.log('createsubject:'+JSON.stringify(subject))    
                this.errors = 'Save was successful!';
            },
            err => {
                this.errors = 'Error saving';
            }
        );
    }

    save() {
        this.subjectService.save(this.subject).subscribe(
            subject => {
                this.subject = subject;
                this.errors = 'Save was successful!';
            },
            err => {
                this.errors = 'Error saving';
            }
        );
    }
}