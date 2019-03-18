import { Routes } from '@angular/router';
import { SiteListComponent } from './site-list/site-list.component';
import { SiteEditComponent } from './site-edit/site-edit.component';

export const SITE_ROUTES: Routes = [
  {
    path: 'site',
    component: SiteListComponent
  },
  {
    path: 'site/:id',
    component: SiteEditComponent
  }
]
