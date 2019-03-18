import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopicService } from '../topic.service';
import { Topic } from '../topic';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Subject } from 'src/app/subjects/subject';
import { SubjectService } from 'src/app/subjects/subject.service';

@Component({
    selector: 'topic-edit',
    templateUrl: './topic-edit.component.html'
})
export class TopicEditComponent implements OnInit {

    id: string;
    topic: Topic;
    errors: string;
    subjects: Subject[];

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
                    if (id === 'new') {
                        console.log('neewww');
                        this.subjectService.getSubjectList().subscribe(
                                result => {
                                this.subjects = result;
                            },
                               err => {
                                console.log(JSON.stringify(err));
                                console.error('error loading', err);
                            }
                        );
                        return of(new Topic());
                    }
                    else {
                        return this.topicService.findById(id);
                    }        
                })
            )
            .subscribe(
                    topic => {
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
}