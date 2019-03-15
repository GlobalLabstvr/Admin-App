import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectEditComponent } from './subject-edit/subject-edit.component';
import { SubjectService } from './subject.service';
import { SUBJECT_ROUTES } from './subject.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(SUBJECT_ROUTES)
  ],
  declarations: [
    SubjectListComponent,
    SubjectEditComponent
  ],
  providers: [
    SubjectService
  ],
  exports: [
  ]
})
export class SubjectModule { }
