import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SiteService } from '../site.service';
import { Site } from '../site';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Topic } from 'src/app/topics/topic';
import { TopicService } from 'src/app/topics/topic.service';

@Component({
    selector: 'site-edit',
    templateUrl: './site-edit.component.html'
})
export class SiteEditComponent implements OnInit {

    id: string;
    site: Site;
    errors: string;
    topics: Topic[];

    constructor(
        private route: ActivatedRoute,
        private topicService: TopicService,
        private siteService: SiteService) {
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
                        return of(new Site());
                    }
                    else {
                        return this.siteService.findById(id);
                    }        
                })
            )
            .subscribe(
                    site => {
                        this.site = site;
                        this.errors = '';
                    },
                    err => {
                        this.errors = 'Error loading';
                    }
                );
    }

    save() {
        this.siteService.save(this.site).subscribe(
            site => {
                this.site = site;
                this.errors = 'Save was successful!';
            },
            err => {
                this.errors = 'Error saving';
            }
        );
    }
}