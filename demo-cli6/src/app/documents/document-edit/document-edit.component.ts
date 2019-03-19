import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentService } from '../document.service';
import { Document } from '../document';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Topic } from 'src/app/topics/topic';
import { TopicService } from 'src/app/topics/topic.service';

@Component({
    selector: 'document-edit',
    templateUrl: './document-edit.component.html'
})
export class DocumentEditComponent implements OnInit {

    id: string;
    document: Document;
    errors: string;
    topics: Topic[];
    flag : boolean;

    constructor(
        private route: ActivatedRoute,
        private topicService: TopicService,
        private documentService: DocumentService) {
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
                            
                            return of(new Document(new Topic()));
                    }
                    else {
                        this.flag = false;
                        return this.documentService.findById(id);
                    }
                })
            )
             .subscribe(
                document => {
                    console.log("document:" + JSON.stringify(document));
                    this.document = document;
                    this.errors = '';
                },
                err => {
                    this.errors = 'Error loading';
                }
            );
    }

    create() {
        this.documentService.create(this.document).subscribe(
            document => {
                this.document= document;
                this.errors = 'Save was successful!';
            },
            err => {
                this.errors = 'Error saving';
            }
        );
    }

    save() {
        this.documentService.save(this.document).subscribe(
            document => {
                this.document = document;
                this.errors = 'Save was successful!';
            },
            err => {
                this.errors = 'Error saving';
            }
        );
    }
}