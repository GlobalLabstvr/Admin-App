import { Document } from './document';
import { DocumentFilter } from './document-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class DocumentService {
    
    constructor(private http: HttpClient) {
    }

    documentList: Document[] = [];
  
    findById(id: string): Observable<Document> {
        let url = 'http://localhost:8080/documents/'+id; 
       // let params = { "id": id };
        let headers = new HttpHeaders()
                            .set('Accept', 'application/json');
        return this.http.get<Document>(url, { headers});
    }
    
    load(filter: DocumentFilter): void {
        this.find(filter).subscribe(
            result => {
                this.documentList = result;
            },
            err => {
                console.error('error loading', err);
            }
        )
    }

    find(filter: DocumentFilter): Observable<Document[]> {
        let url = 'http://localhost:8080/documents/';
        let headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        let params = {
            "name": filter.name,
        };

        return this.http.get<Document[]>(url, {params, headers});
    }
    
    create(entity: Document): Observable<Document> {
        let url = 'http://localhost:8080/documents/'+entity.topic.id;
        let headers = new HttpHeaders()
            .set('Accept', 'application/json');
        return this.http.post<Document>(url, entity, {headers});
    }

    save(entity: Document): Observable<Document> {
        let url = 'http://localhost:8080/documents/';
        let headers = new HttpHeaders()
            .set('Accept', 'application/json');
        return this.http.put<Document>(url, entity, {headers});
    }
    getDocumentList():Observable<Document[]>{
        let filter:DocumentFilter = {name:''};
        return this.find(filter);
    }
}

