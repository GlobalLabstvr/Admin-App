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
    flag: boolean;

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
                  
                        
                        this.topicService.getTopicList().subscribe(
                                result => {
                                this.topics = result;
                            },
                               err => {
                                console.log(JSON.stringify(err));
                                console.error('error loading', err);
                            }
                        );
                    
                        if (id === 'new') {
                            this.flag = true;
                            
                            return of(new Program(new Topic()));
                        }
                    else
                     {
                        this.flag = false;
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
    create() {
        this.programService.create(this.program).subscribe(
            program => {
                this.program = program;
                this.errors = 'Save was successful!';
            },
            err => {
                this.errors = 'Error saving';
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