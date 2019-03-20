import { Routes } from '@angular/router';
import { SlideListComponent } from './slide-list/slide-list.component';
import { SlideEditComponent } from './slide-edit/slide-edit.component';

export const SLIDE_ROUTES: Routes = [
  {
    path: 'slide',
    component: SlideListComponent
  },
  {
    path: 'slide/:id',
    component: SlideEditComponent
  }
]
