import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { PlaylistFilter } from '../playlist-filter';
import { PlaylistService } from '../playlist.service';
import { Playlist } from '../playlist';

@Component({
    selector: 'playlist',
    templateUrl: 'playlist-list.component.html'
})
export class PlaylistListComponent {

    filter = new PlaylistFilter();
    selectedPlaylist: Playlist;

    get playlistList(): Playlist[] {
        return this.playlistService.playlistList;
    }

    constructor(private playlistService: PlaylistService) {
    }

    ngOnInit() {
        this.search();
    }

    search(): void {
        this.playlistService.load(this.filter);
    }

    select(selected: Playlist): void {
        this.selectedPlaylist = selected;
    }

}
