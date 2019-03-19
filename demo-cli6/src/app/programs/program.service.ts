import { Program } from './program';
import { ProgramFilter } from './program-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class ProgramService {
    
    constructor(private http: HttpClient) {
    }

    programList: Program[] = [];
  
    findById(id: string): Observable<Program> {
        let url = 'http://localhost:8080/programs/'+id; 
        let headers = new HttpHeaders()
                            .set('Accept', 'application/json');
        return this.http.get<Program>(url, {headers});
    }
    
    load(filter: ProgramFilter): void {
        this.find(filter).subscribe(
            result => {
                this.programList = result;
            },
            err => {
                console.error('error loading', err);
            }
        )
    }

    find(filter: ProgramFilter): Observable<Program[]> {
        let url = 'http://localhost:8080/programs/';
        let headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        let params = {
            "name": filter.name,
        };

        return this.http.get<Program[]>(url, {params, headers});
    }

    create(entity: Program): Observable<Program> {
        let url = 'http://localhost:8080/programs/'+entity.topic.id;
        let headers = new HttpHeaders()
            .set('Accept', 'application/json');
        return this.http.post<Program>(url, entity, {headers});
    }

    save(entity: Program): Observable<Program> {
        let url = 'http://localhost:8080/programs/';
        let headers = new HttpHeaders()
            .set('Accept', 'application/json');
        return this.http.put<Program>(url, entity, {headers});
    }

    getProgramList():Observable<Program[]>{
        let filter:ProgramFilter = {name:''};
        return this.find(filter);
    }
}

