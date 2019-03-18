import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SiteListComponent } from './site-list/site-list.component';
import { SiteEditComponent } from './site-edit/site-edit.component';
import { SiteService } from './site.service';
import { SITE_ROUTES } from './site.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(SITE_ROUTES)
  ],
  declarations: [
    SiteListComponent,
    SiteEditComponent
  ],
  providers: [
    SiteService
  ],
  exports: [
  ]
})
export class SiteModule { }
