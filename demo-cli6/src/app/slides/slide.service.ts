import { Slide } from './slide';
import { SlideFilter } from './slide-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class SlideService {
    
    constructor(private http: HttpClient) {
    }

    slideList: Slide[] = [];
  
    findById(id: string): Observable<Slide> {
        let url = 'http://localhost:8080/slides/'+id; 
       // let params = { "id": id };
        let headers = new HttpHeaders()
                            .set('Accept', 'application/json');
        return this.http.get<Slide>(url, { headers});
    }
    
    load(filter: SlideFilter): void {
        this.find(filter).subscribe(
            result => {
                this.slideList = result;
            },
            err => {
                console.error('error loading', err);
            }
        )
    }

    find(filter: SlideFilter): Observable<Slide[]> {
        let url = 'http://localhost:8080/slides/';
        let headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        let params = {
            "name": filter.name,
        };

        return this.http.get<Slide[]>(url, {params, headers});
    }
    
    create(entity: Slide): Observable<Slide> {
        console.log("en:"+JSON.stringify(entity));
        let url = 'http://localhost:8080/slides/'+entity.topic.id;
        let headers = new HttpHeaders()
            .set('Accept', 'application/json');
        return this.http.post<Slide>(url, entity, {headers});
    }

    save(entity: Slide): Observable<Slide> {
        let url = 'http://localhost:8080/slides/';
        let headers = new HttpHeaders()
            .set('Accept', 'application/json');
        return this.http.put<Slide>(url, entity, {headers});
    }
    getSlideList():Observable<Slide[]>{
        let filter:SlideFilter = {name:''};
        return this.find(filter);
    }
}

