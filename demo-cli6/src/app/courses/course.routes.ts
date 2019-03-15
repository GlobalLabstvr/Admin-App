import { Routes } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseEditComponent } from './course-edit/course-edit.component';

export const COURSE_ROUTES: Routes = [
  {
    path: 'course',
    component: CourseListComponent
  },
  {
    path: 'course/:id',
    component: CourseEditComponent
  }
]
