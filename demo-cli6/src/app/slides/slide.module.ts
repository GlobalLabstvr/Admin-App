import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SlideListComponent } from './slide-list/slide-list.component';
import { SlideEditComponent } from './slide-edit/slide-edit.component';
import { SlideService } from './slide.service';
import { SLIDE_ROUTES } from './slide.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(SLIDE_ROUTES)
  ],
  declarations: [
    SlideListComponent,
    SlideEditComponent
  ],
  providers: [
    SlideService
  ],
  exports: [
  ]
})
export class SlideModule { }
