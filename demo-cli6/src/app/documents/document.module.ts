import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DocumentListComponent } from './document-list/document-list.component';
import { DocumentEditComponent } from './document-edit/document-edit.component';
import { DocumentService } from './document.service';
import { DOCUMENT_ROUTES } from './document.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(DOCUMENT_ROUTES)
  ],
  declarations: [
    DocumentListComponent,
    DocumentEditComponent
  ],
  providers: [
    DocumentService
  ],
  exports: [
  ]
})
export class DocumentModule { }
