import { Site } from './site';
import { SiteFilter } from './site-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class SiteService {
    
    constructor(private http: HttpClient) {
    }

    siteList: Site[] = [];
  
    findById(id: string): Observable<Site> {
        let url = 'http://localhost:8080/sites/'+id; 
       // let params = { "id": id };
        let headers = new HttpHeaders()
                            .set('Accept', 'application/json');
        return this.http.get<Site>(url, { headers});
    }
    
    load(filter: SiteFilter): void {
        this.find(filter).subscribe(
            result => {
                this.siteList = result;
            },
            err => {
                console.error('error loading', err);
            }
        )
    }

    find(filter: SiteFilter): Observable<Site[]> {
        let url = 'http://localhost:8080/sites/';
        let headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        let params = {
            "name": filter.name,
        };

        return this.http.get<Site[]>(url, {params, headers});
    }
    
    create(entity: Site): Observable<Site> {
        let url = 'http://localhost:8080/sites/'+entity.topic.id;
        let headers = new HttpHeaders()
            .set('Accept', 'application/json');
        return this.http.post<Site>(url, entity, {headers});
    }

    save(entity: Site): Observable<Site> {
        let url = 'http://localhost:8080/sites/';
        let headers = new HttpHeaders()
            .set('Accept', 'application/json');
        return this.http.put<Site>(url, entity, {headers});
    }
    getSiteList():Observable<Site[]>{
        let filter:SiteFilter = {name:''};
        return this.find(filter);
    }
}

