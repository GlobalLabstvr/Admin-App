import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SlideService } from '../slide.service';
import { Slide } from '../slide';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Topic } from 'src/app/topics/topic';
import { TopicService } from 'src/app/topics/topic.service';
import { PlaylistService } from 'src/app/playlists/playlist.service';
import { ProgramService } from 'src/app/programs/program.service';
import { DocumentService } from 'src/app/documents/document.service';
import { Playlist } from 'src/app/playlists/playlist';
import { Program } from 'src/app/programs/program';
import { Site } from 'src/app/sites/site';
import { Document } from 'src/app/documents/document';
import { SiteService } from 'src/app/sites/site.service';

@Component({
    selector: 'slide-edit',
    templateUrl: './slide-edit.component.html'
})
export class SlideEditComponent implements OnInit {

    id: string;
    slide: Slide;
    errors: string;
    topics: Topic[];
    playlists: Playlist[];
    programs: Program[];
    sites: Site[];
    documents: Document[];
    
    flag: boolean;

    constructor(
        private route: ActivatedRoute,
        private topicService: TopicService,
        private slideService: SlideService,
        private playlistService: PlaylistService,
        private programService: ProgramService,
        private documentService: DocumentService,
        private siteService: SiteService) {
    }

    ngOnInit() {
        this
            .route
            .params
            .pipe(
                map(p => p['id']),
                switchMap(id => {
                    this.getTopicList();
                    this.getPlayList();
                    this.getDocumentList();
                    this.getSiteList();
                    this.getProgramList();
                    if (id === 'new') {
                        this.flag = true;

                        return of(new Slide(new Topic()));
                    }
                    else {
                        this.flag = false;
                        return this.slideService.findById(id);
                    }
                })
            )
            .subscribe(
                slide => {
                    console.log("slide:" + JSON.stringify(slide));
                    this.slide = slide;
                    this.errors = '';
                },
                err => {
                    this.errors = 'Error loading';
                }
            );
    }

    create() {
        this.slideService.create(this.slide).subscribe(
            slide => {
                this.slide = slide;
                this.errors = 'Save was successful!';
            },
            err => {
                this.errors = 'Error saving';
            }
        );
    }

    save() {
        this.slideService.save(this.slide).subscribe(
            slide => {
                this.slide = slide;
                this.errors = 'Save was successful!';
            },
            err => {
                this.errors = 'Error saving';
            }
        );
    }

    getTopicList() {
        this.topicService.getTopicList().subscribe(
        result => {
            this.topics = result;
        },
        err => {
            console.log(JSON.stringify(err));
            console.error('error loading', err);
        }
        );
    }

    getPlayList() {
        this.playlistService.getPlaylistList().subscribe(
        result => {
            this.playlists = result;
        },
        err => {
            console.log(JSON.stringify(err));
            console.error('error loading', err);
        }
        );
    }

    getSiteList() {
        this.siteService.getSiteList().subscribe(
        result => {
            this.sites = result;
        },
        err => {
            console.log(JSON.stringify(err));
            console.error('error loading', err);
        }
        );
    }

    getDocumentList() {
        this.documentService.getDocumentList().subscribe(
        result => {
            this.documents = result;
        },
        err => {
            console.log(JSON.stringify(err));
            console.error('error loading', err);
        }
        );
    }

    getProgramList() {
        this.programService.getProgramList().subscribe(
        result => {
            this.programs = result;
        },
        err => {
            console.log(JSON.stringify(err));
            console.error('error loading', err);
        }
        );
    }
}