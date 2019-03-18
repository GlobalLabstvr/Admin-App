import { Playlist } from './playlist';
import { PlaylistFilter } from './playlist-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class PlaylistService {
    
    constructor(private http: HttpClient) {
    }

    playlistList: Playlist[] = [];
  
    findById(id: string): Observable<Playlist> {
        let url = 'http://localhost:8080/playlists'; 
        let params = { "id": id };
        let headers = new HttpHeaders()
                            .set('Accept', 'application/json');
        return this.http.get<Playlist>(url, {params, headers});
    }
    
    load(filter: PlaylistFilter): void {
        this.find(filter).subscribe(
            result => {
                this.playlistList = result;
            },
            err => {
                console.error('error loading', err);
            }
        )
    }

    find(filter: PlaylistFilter): Observable<Playlist[]> {
        let url = 'http://localhost:8080/playlists';
        let headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        let params = {
            "name": filter.name,
        };

        return this.http.get<Playlist[]>(url, {params, headers});
    }

    save(entity: Playlist): Observable<Playlist> {
        let url = 'http://localhost:8080/playlists/'+entity.topicId;
        let headers = new HttpHeaders()
            .set('Accept', 'application/json');
        return this.http.post<Playlist>(url, entity, {headers});
    }
}

