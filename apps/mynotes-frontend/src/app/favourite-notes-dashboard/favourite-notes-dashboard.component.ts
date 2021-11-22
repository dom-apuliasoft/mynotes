import { Component, OnInit } from '@angular/core';
import { NoteEntity } from '@mynotes/api-types';
import { NoteService } from '../note.service';

@Component({
  selector: 'mynotes-favourite-notes-dashboard',
  templateUrl: './favourite-notes-dashboard.component.html',
  styleUrls: ['./favourite-notes-dashboard.component.scss']
})
export class FavouriteNotesDashboardComponent implements OnInit {

  notes: NoteEntity[] = [];

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(): void {
    this.noteService.getFavourites().subscribe((data) => {
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
