import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { DocumentFilter } from '../document-filter';
import { DocumentService } from '../document.service';
import { Document } from '../document';

@Component({
    selector: 'document',
    templateUrl: 'document-list.component.html'
})
export class DocumentListComponent {

    filter = new DocumentFilter();
    selectedDocument: Document;

    get documentList(): Document[] {
        return this.documentService.documentList;
    }

    constructor(private documentService: DocumentService) {
    }

    ngOnInit() {
        this.search();
    }

    search(): void {
        this.documentService.load(this.filter);
    }

    select(selected: Document): void {
        this.selectedDocument = selected;
    }

}
