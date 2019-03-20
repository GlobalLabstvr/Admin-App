import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { SlideFilter } from '../slide-filter';
import { SlideService } from '../slide.service';
import { Slide } from '../slide';

@Component({
    selector: 'slide',
    templateUrl: 'slide-list.component.html'
})
export class SlideListComponent {

    filter = new SlideFilter();
    selectedSlide: Slide;

    get slideList(): Slide[] {
        return this.slideService.slideList;
    }

    constructor(private slideService: SlideService) {
    }

    ngOnInit() {
        this.search();
    }

    search(): void {
        this.slideService.load(this.filter);
    }

    select(selected: Slide): void {
        this.selectedSlide = selected;
    }

}
