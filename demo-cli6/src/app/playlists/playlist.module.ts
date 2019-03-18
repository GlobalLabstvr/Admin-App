import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PlaylistListComponent } from './playlist-list/playlist-list.component';
import { PlaylistEditComponent } from './playlist-edit/playlist-edit.component';
import { PlaylistService } from './playlist.service';
import { PLAYLIST_ROUTES } from './playlist.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(PLAYLIST_ROUTES)
  ],
  declarations: [
    PlaylistListComponent,
    PlaylistEditComponent
  ],
  providers: [
    PlaylistService
  ],
  exports: [
  ]
})
export class PlaylistModule { }
