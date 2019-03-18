import { Topic } from './topic';
import { TopicFilter } from './topic-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class TopicService {
    
    constructor(private http: HttpClient) {
    }

    topicList: Topic[] = [];
  
    findById(id: string): Observable<Topic> {
        let url = 'http://localhost:8080/topics/'+id; 
        //let params = { "id": id };
        let headers = new HttpHeaders()
                            .set('Accept', 'application/json');
        return this.http.get<Topic>(url, {headers});
    }
    
    load(filter: TopicFilter): void {
        this.find(filter).subscribe(
            result => {
                this.topicList = result;
            },
            err => {
                console.error('error loading', err);
            }
        )
    }

    find(filter: TopicFilter): Observable<Topic[]> {
        let url = 'http://localhost:8080/topics';
        let headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        let params = {
            "name": filter.name,
        };

        return this.http.get<Topic[]>(url, {params, headers});
    }

    create(entity: Topic): Observable<Topic> {
        let url = 'http://localhost:8080/topics/'+entity.subject.id;
        let headers = new HttpHeaders()
            .set('Accept', 'application/json');
        return this.http.post<Topic>(url, entity, {headers});
    }

    save(entity: Topic): Observable<Topic> {
        let url = 'http://localhost:8080/topics';
        let headers = new HttpHeaders()
            .set('Accept', 'application/json');
        return this.http.put<Topic>(url, entity, {headers});
    }

    getTopicList():Observable<Topic[]>{
        let filter:TopicFilter = {name:''};
        return this.find(filter);
    }
}

