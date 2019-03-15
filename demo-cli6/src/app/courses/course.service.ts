import { Course } from './course';
import { CourseFilter } from './course-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class CourseService {
    
    constructor(private http: HttpClient) {
    }

    courseList: Course[] = [];
  
    findById(id: string): Observable<Course> {
        let url = 'http://localhost:8080/courses/'; 
        let params = { "id": id };
        let headers = new HttpHeaders()
                            .set('Accept', 'application/json');
        return this.http.get<Course>(url, {params, headers});
    }
    
    load(filter: CourseFilter): void {
        this.find(filter).subscribe(
            result => {
                this.courseList = result;
            },
            err => {
                console.error('error loading', err);
            }
        )
    }

    find(filter: CourseFilter): Observable<Course[]> {
        let url = 'http://localhost:8080/courses';
        let headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        let params = {
            "name": filter.name
        };

        return this.http.get<Course[]>(url, {params, headers});
    }

    save(entity: Course): Observable<Course> {
        let url = 'http://localhost:8080/courses';
        let headers = new HttpHeaders()
            .set('Accept', 'application/json');
        return this.http.post<Course>(url, entity, {headers});
    }
}

