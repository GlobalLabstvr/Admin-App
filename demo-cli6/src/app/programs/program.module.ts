import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProgramListComponent } from './program-list/program-list.component';
import { ProgramEditComponent } from './program-edit/program-edit.component';
import { ProgramService } from './program.service';
import { PROGRAM_ROUTES } from './program.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(PROGRAM_ROUTES)
  ],
  declarations: [
    ProgramListComponent,
    ProgramEditComponent
  ],
  providers: [
    ProgramService
  ],
  exports: [
  ]
})
export class ProgramModule { }
