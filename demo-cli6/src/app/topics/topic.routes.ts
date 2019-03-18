import { Routes } from '@angular/router';
import { TopicListComponent } from './topic-list/topic-list.component';
import { TopicEditComponent } from './topic-edit/topic-edit.component';

export const TOPIC_ROUTES: Routes = [
  {
    path: 'topic',
    component: TopicListComponent
  },
  {
    path: 'topic/:id',
    component: TopicEditComponent
  }
]
