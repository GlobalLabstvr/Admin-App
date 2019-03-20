import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ProgramFilter } from '../program-filter';
import { ProgramService } from '../program.service';
import { Program } from '../program';

@Component({
    selector: 'program',
    templateUrl: 'program-list.component.html'
})
export class ProgramListComponent {

    filter = new ProgramFilter();
    selectedProgram: Program;

    get programList(): Program[] {
        return this.programService.programList;
    }

    constructor(private programService: ProgramService) {
    }

    ngOnInit() {
        this.search();
    }

    search(): void {
        this.programService.load(this.filter);
    }

    select(selected: Program): void {
        this.selectedProgram = selected;
    }

}
