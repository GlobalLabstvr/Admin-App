import { CourseModule } from './courses/course.module';
import {HttpClientModule} from '@angular/common/http';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {APP_EXTRA_OPTIONS, APP_ROUTES} from './app.routes';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import { SubjectModule } from './subjects/subject.module';
import {TopicModule} from './topics/topic.module';
import {PlaylistModule} from './playlists/playlist.module';
import {SiteModule} from './sites/site.module';
import {ProgramModule} from './programs/program.module';
import { DocumentModule } from './documents/document.module';
import { SlideModule } from './slides/slide.module';
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule,

    RouterModule.forRoot([...APP_ROUTES], {...APP_EXTRA_OPTIONS}),

    SubjectModule,
    TopicModule,
    PlaylistModule,
    SiteModule,
    ProgramModule,
    DocumentModule,
    SlideModule
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
