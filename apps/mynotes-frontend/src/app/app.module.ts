import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NoteDashboardComponent } from './note-dashboard/note-dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { NoteComponent } from './note/note.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NoteCreatorComponent } from './note-creator/note-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteDashboardComponent,
    NoteComponent,
    NoteCreatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
