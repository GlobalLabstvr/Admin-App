import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopicService } from '../topic.service';
import { Topic } from '../topic';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Subject } from 'src/app/subjects/subject';
import { SubjectService } from 'src/app/subjects/subject.service';
import { Course } from 'src/app/courses/course';

@Component({
    selector: 'topic-edit',
    templateUrl: './topic-edit.component.html'
})
export class TopicEditComponent implements OnInit {

    id: string;
    topic: Topic;
    errors: string;
    subjects: Subject[];
    flag: boolean;

    constructor(
        private route: ActivatedRoute,
        private subjectService: SubjectService,
        private topicService: TopicService) {
    }

    ngOnInit() {
        this
            .route
            .params
            .pipe(
                map(p => p['id']),
                switchMap(id => {
                    this.subjectService.getSubjectList().subscribe(
                        result => {
                            this.subjects = result;
                        },
                        err => {
                            console.log(JSON.stringify(err));
                            console.error('error loading', err);
                        }
                    );
                    if (id === 'new') {
                        this.flag = true;

                        return of(new Topic(new Subject()));
                    }
                    else {
                        this.flag = false;
                        return this.topicService.findById(id);
                    }
                })
            )
            .subscribe(
                topic => {
                    console.log("topic:" + JSON.stringify(topic));
                    this.topic = topic;
                    this.errors = '';
                },
                err => {
                    this.errors = 'Error loading';
                }
            );
    }

    save() {
        this.topicService.save(this.topic).subscribe(
            topic => {
                this.topic = topic;
                this.errors = 'Save was successful!';
            },
            err => {
                this.errors = 'Error saving';
            }
        );
    }

    create() {
        this.topicService.create(this.topic).subscribe(
            topic => {
                this.topic = topic;
                this.errors = 'Save was successful!';
            },
            err => {
                this.errors = 'Error saving';
            }
        );
    }
}