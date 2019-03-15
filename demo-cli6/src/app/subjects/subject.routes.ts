import { Routes } from '@angular/router';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectEditComponent } from './subject-edit/subject-edit.component';

export const SUBJECT_ROUTES: Routes = [
  {
    path: 'subject',
    component: SubjectListComponent
  },
  {
    path: 'subject/:id',
    component: SubjectEditComponent
  }
]
