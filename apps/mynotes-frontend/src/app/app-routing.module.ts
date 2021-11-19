import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteDashboardComponent } from './note-dashboard/note-dashboard.component';
import { NoteEditorComponent } from './note-editor/note-editor.component';
import { NotespaceDashboardComponent } from './notespace-dashboard/notespace-dashboard.component';
import { NotespaceEditorComponent } from './notespace-editor/notespace-editor.component';
import { NotespaceViewComponent } from './notespace-view/notespace-view.component';

const routes: Routes = [
  { path: 'notes', component: NoteDashboardComponent },
  {
    path: 'notes/edit',
    component: NoteEditorComponent,
    pathMatch: 'full',
  },
  { path: 'notes/:id', component: NoteEditorComponent },
  { path: 'notespaces', component: NotespaceDashboardComponent },
  {
    path: 'notespaces/edit',
    component: NotespaceEditorComponent,
  },
  { path: 'notespaces/:id', component: NotespaceViewComponent },
  { path: '', redirectTo: '/notes', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
