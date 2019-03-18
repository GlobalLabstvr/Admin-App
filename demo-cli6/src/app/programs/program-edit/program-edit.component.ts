import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgramService } from '../program.service';
import { Program } from '../program';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Topic } from 'src/app/topics/topic';
import { TopicService } from 'src/app/topics/topic.service';

@Component({
    selector: 'program-edit',
    templateUrl: './program-edit.component.html'
})
export class ProgramEditComponent implements OnInit {

    id: string;
    program: Program;
    errors: string;
    topics: Topic[];

    constructor(
        private route: ActivatedRoute,
        private topicService: TopicService,
        private programService: ProgramService) {
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
                        this.topicService.getTopicList().subscribe(
                                result => {
                                this.topics = result;
                            },
                               err => {
                                console.log(JSON.stringify(err));
                                console.error('error loading', err);
                            }
                        );
                        return of(new Program());
                    }
                    else {
                        return this.programService.findById(id);
                    }        
                })
            )
            .subscribe(
                    program => {
                        this.program = program;
                        this.errors = '';
                    },
                    err => {
                        this.errors = 'Error loading';
                    }
                );
    }

    save() {
        this.programService.save(this.program).subscribe(
            program => {
                this.program = program;
                this.errors = 'Save was successful!';
            },
            err => {
                this.errors = 'Error saving';
            }
        );
    }
}