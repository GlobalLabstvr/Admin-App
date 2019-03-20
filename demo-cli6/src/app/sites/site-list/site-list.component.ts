import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { SiteFilter } from '../site-filter';
import { SiteService } from '../site.service';
import { Site } from '../site';

@Component({
    selector: 'site',
    templateUrl: 'site-list.component.html'
})
export class SiteListComponent {

    filter = new SiteFilter();
    selectedSite: Site;

    get siteList(): Site[] {
        return this.siteService.siteList;
    }

    constructor(private siteService: SiteService) {
    }

    ngOnInit() {
        this.search();
    }

    search(): void {
        this.siteService.load(this.filter);
    }

    select(selected: Site): void {
        this.selectedSite = selected;
    }

}
