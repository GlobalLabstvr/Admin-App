import { Routes } from '@angular/router';
import { PlaylistListComponent } from './playlist-list/playlist-list.component';
import { PlaylistEditComponent } from './playlist-edit/playlist-edit.component';

export const PLAYLIST_ROUTES: Routes = [
  {
    path: 'playlist',
    component: PlaylistListComponent
  },
  {
    path: 'playlist/:id',
    component: PlaylistEditComponent
  }
]
