import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';

import { NoteEntity } from '@mynotes/api-types';

@Component({
  selector: 'mynotes-note-dashboard',
  templateUrl: './note-dashboard.component.html',
  styleUrls: ['./note-dashboard.component.scss'],
})
export class NoteDashboardComponent implements OnInit {
  notes: NoteEntity[] = [];

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(): void {
    this.noteService.getNotes().subscribe((data) => {
      this.notes = data;
    });
  }

  deleteNote(note: NoteEntity): void {
    const id = note.id || -1;
    this.noteService
      .deleteNote(id)
      .subscribe((deletedNote) => this.removeNote(deletedNote));
  }

  private removeNote(note: NoteEntity) {
    const index = this.notes.findIndex((n) => {
      return n.id === note.id;
    });
    if (index !== -1) this.notes.splice(index, 1);
  }
}
