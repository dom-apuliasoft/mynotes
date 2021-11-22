import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NoteDashboardComponent } from './note-dashboard/note-dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { NoteEditorComponent } from './note-editor/note-editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormErrorComponent } from './form-error/form-error.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotespaceDashboardComponent } from './notespace-dashboard/notespace-dashboard.component';
import { NoteComponent } from './note/note.component';
import { NotespaceComponent } from './notespace/notespace.component';
import { NotespaceViewComponent } from './notespace-view/notespace-view.component';
import { NotesModalComponent } from './notes-modal/notes-modal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardComponent } from './card/card.component';
import { NotespaceEditorComponent } from './notespace-editor/notespace-editor.component';
import { ModalComponent } from './modal/modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FavouriteNotesDashboardComponent } from './favourite-notes-dashboard/favourite-notes-dashboard.component';
import { NotespacesModalComponent } from './notespaces-modal/notespaces-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteDashboardComponent,
    NoteEditorComponent,
    FormErrorComponent,
    NavbarComponent,
    NotespaceDashboardComponent,
    NoteComponent,
    NotespaceComponent,
    NotespaceViewComponent,
    NotesModalComponent,
    DashboardComponent,
    CardComponent,
    NotespaceEditorComponent,
    ModalComponent,
    FavouriteNotesDashboardComponent,
    NotespacesModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
