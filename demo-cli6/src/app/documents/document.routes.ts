import { Routes } from '@angular/router';
import { DocumentListComponent } from './document-list/document-list.component';
import { DocumentEditComponent } from './document-edit/document-edit.component';

export const DOCUMENT_ROUTES: Routes = [
  {
    path: 'document',
    component: DocumentListComponent
  },
  {
    path: 'document/:id',
    component: DocumentEditComponent
  }
]
