import { Subject } from './subject';
import { SubjectFilter } from './subject-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { JSDocCommentStmt } from '@angular/compiler';

@Injectable()
export class SubjectService {
    /*getSubjectList(): any {
        throw new Error("Method not implemented.");
    }*/
    
    constructor(private http: HttpClient) {
    }

    subjectList: Subject[] = [];
  
    findById(id: string): Observable<Subject> {
        let url = 'http://localhost:8080/subjects/'+id; 
        //let params = { "id": id };
        let headers = new HttpHeaders()
                            .set('Accept', 'application/json');
        return this.http.get<Subject>(url, {headers});
    }
    
    load(filter: SubjectFilter): void {
        this.find(filter).subscribe(
            result => {
                console.log("subject:"+JSON.stringify(result))
                this.subjectList = result;
            },
            err => {
                console.error('error loading', err);
            }
        )
    }

    find(filter: SubjectFilter): Observable<Subject[]> {
        let url = 'http://localhost:8080/subjects';
        let headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        let params = {
            "name": filter.name,
        };

        return this.http.get<Subject[]>(url, {params, headers});
    }

    save(entity: Subject): Observable<Subject> {
        let url = 'http://localhost:8080/subjects';
        let headers = new HttpHeaders()
            .set('Accept', 'application/json');
        return this.http.put<Subject>(url, entity, {headers});
    }

    create(entity: Subject): Observable<Subject> {
        let url = 'http://localhost:8080/subjects/'+entity.course.id;
        let headers = new HttpHeaders()
            .set('Accept', 'application/json');
        return this.http.post<Subject>(url, entity, {headers});
    }

    getSubjectList():Observable<Subject[]>{
        let filter:SubjectFilter = {name:''};
        return this.find(filter);
    }
}

