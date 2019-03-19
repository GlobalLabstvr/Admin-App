import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaylistService } from '../playlist.service';
import { Playlist } from '../playlist';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Topic } from 'src/app/topics/topic';
import { TopicService } from 'src/app/topics/topic.service';
import { Subject } from 'src/app/subjects/subject';

@Component({
    selector: 'playlist-edit',
    templateUrl: './playlist-edit.component.html'
})
export class PlaylistEditComponent implements OnInit {

    id: string;
    playlist: Playlist;
    errors: string;
    topics: Topic[];
    flag : boolean;

    constructor(
        private route: ActivatedRoute,
        private topicService: TopicService,
        private playlistService: PlaylistService) {
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
                            
                            return of(new Playlist(new Topic()));
                    }
                    else {
                        this.flag = false;
                        return this.playlistService.findById(id);
                    }
                })
            )
             .subscribe(
                playlist => {
                    console.log("playlist:" + JSON.stringify(playlist));
                    this.playlist = playlist;
                    this.errors = '';
                },
                err => {
                    this.errors = 'Error loading';
                }
            );
    }

    create() {
        this.playlistService.create(this.playlist).subscribe(
            playlist => {
                this.playlist = playlist;
                this.errors = 'Save was successful!';
            },
            err => {
                this.errors = 'Error saving';
            }
        );
    }

    save() {
        this.playlistService.save(this.playlist).subscribe(
            playlist => {
                this.playlist = playlist;
                this.errors = 'Save was successful!';
            },
            err => {
                this.errors = 'Error saving';
            }
        );
    }
}