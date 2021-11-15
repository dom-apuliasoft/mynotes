import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteCreatorComponent } from './note-creator/note-creator.component';
import { NoteDashboardComponent } from './note-dashboard/note-dashboard.component';
import { NoteComponent } from './note/note.component';

const routes: Routes = [
  { path: 'notes', component: NoteDashboardComponent },
  { path: 'notes/create-new', component: NoteCreatorComponent, pathMatch: 'full' },
  { path: 'notes/:id', component: NoteComponent },
  { path: '', redirectTo: '/notes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
