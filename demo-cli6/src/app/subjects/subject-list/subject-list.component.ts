import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { SubjectFilter } from '../subject-filter';
import { SubjectService } from '../subject.service';
import { Subject } from '../subject';

@Component({
    selector: 'subject',
    templateUrl: 'subject-list.component.html'
})
export class SubjectListComponent {

    filter = new SubjectFilter();
    selectedSubject: Subject;

    get subjectList(): Subject[] {
        return this.subjectService.subjectList;
    }

    constructor(private subjectService: SubjectService) {
    }

    ngOnInit() {
        this.search();
    }

    search(): void {
        this.subjectService.load(this.filter);
    }

    select(selected: Subject): void {
        this.selectedSubject = selected;
    }

}
