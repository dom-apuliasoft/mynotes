import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';

import { Note } from '@mynotes/api-types';

@Component({
  selector: 'mynotes-note-dashboard',
  templateUrl: './note-dashboard.component.html',
  styleUrls: ['./note-dashboard.component.scss'],
})
export class NoteDashboardComponent implements OnInit {
  notes: Note[] = [];

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(): void {
    this.noteService.getNotes().subscribe((data) => {
      this.notes = data;
    });
  }

  deleteNote(note: Note): void {
    const id = note.id || 0;
    this.noteService.deleteNote(id).subscribe((note) => {
      const index = this.notes.findIndex(n => n.id === note.id);
      this.notes.splice(index, 1);
    });
  }
}
