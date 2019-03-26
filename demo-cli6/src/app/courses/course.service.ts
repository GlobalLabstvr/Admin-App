import { Course } from './course';
import { CourseFilter } from './course-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { find } from 'rxjs/operators';

@Injectable()
export class CourseService {
    
    constructor(private http: HttpClient) {
    }

    courseList: Course[] = [];
  
    findById(id: string): Observable<Course> {
        let url = 'http://localhost:8080/courses/'+id; 
        //let params = { "id": id };
        let headers = new HttpHeaders()
                            .set('Accept', 'application/json');
                            console.log(url);
        return this.http.get<Course>(url, {headers});
    }
    
    load(filter: CourseFilter): void {
        this.find(filter).subscribe(
            result => {
                console.log('clist:'+JSON.stringify(result));
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
        console.log('params:'+JSON.stringify(params));
        return this.http.get<Course[]>(url, {params, headers});
    }

    create(entity: Course): Observable<Course> {
        let url = 'http://localhost:8080/courses';
        let headers = new HttpHeaders()
            .set('Accept', 'application/json');
        return this.http.post<Course>(url, entity, {headers});
    }
    
    save(entity: Course): Observable<Course> {
        let url = 'http://localhost:8080/courses';
        let headers = new HttpHeaders()
            .set('Accept', 'application/json');
        return this.http.put<Course>(url, entity, {headers});
    }

    getCourseList():Observable<Course[]>{
        let filter:CourseFilter = {name:''};
        return this.find(filter);
    }
}

