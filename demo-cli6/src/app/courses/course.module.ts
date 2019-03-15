import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseService } from './course.service';
import { COURSE_ROUTES } from './course.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(COURSE_ROUTES)
  ],
  declarations: [
    CourseListComponent,
    CourseEditComponent
  ],
  providers: [
    CourseService
  ],
  exports: [
  ]
})
export class CourseModule { }
