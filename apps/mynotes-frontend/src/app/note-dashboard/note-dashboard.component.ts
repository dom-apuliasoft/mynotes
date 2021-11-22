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
    this.noteService.getAll().subscribe((data) => {
      this.notes = data;
    });
  }

  deleteNote(note: NoteEntity): void {
    const id = note.id || -1;
    this.noteService
      .delete(id)
      .subscribe((deletedNote) => this.removeNote(deletedNote));
  }

  private removeNote(note: NoteEntity) {
    this.notes = this.notes.filter((n) => n.id !== note.id);
  }
}
