import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TopicListComponent } from './topic-list/topic-list.component';
import { TopicEditComponent } from './topic-edit/topic-edit.component';
import { TopicService } from './topic.service';
import { TOPIC_ROUTES } from './topic.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(TOPIC_ROUTES)
  ],
  declarations: [
    TopicListComponent,
    TopicEditComponent
  ],
  providers: [
    TopicService
  ],
  exports: [
  ]
})
export class TopicModule { }
