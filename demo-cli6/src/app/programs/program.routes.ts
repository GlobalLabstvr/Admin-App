import { Routes } from '@angular/router';
import { ProgramListComponent } from './program-list/program-list.component';
import { ProgramEditComponent } from './program-edit/program-edit.component';

export const PROGRAM_ROUTES: Routes = [
  {
    path: 'program',
    component: ProgramListComponent
  },
  {
    path: 'program/:id',
    component: ProgramEditComponent
  }
]
