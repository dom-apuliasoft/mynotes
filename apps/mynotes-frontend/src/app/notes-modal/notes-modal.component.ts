import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteEntity, NotespaceEntity } from '@mynotes/api-types';
import { NotespaceService } from '../notespace.service';

@Component({
  selector: 'mynotes-notes-modal',
  templateUrl: './notes-modal.component.html',
  styleUrls: ['./notes-modal.component.scss'],
})
export class NotesModalComponent implements OnInit {
  @Input() notespace!: NotespaceEntity;
  @Output() added = new EventEmitter<NoteEntity>();
  @Output() closed = new EventEmitter();

  availableNotes?: NoteEntity[];

  constructor(private notespaceService: NotespaceService) {}

  ngOnInit(): void {
    this.getAvailableNotes();
  }

  getAvailableNotes() {
    this.notespaceService
      .getAvailableNotes(this.notespace.id || -1)
      .subscribe((notes) => (this.availableNotes = notes));
  }

  addNote(note: NoteEntity) {
    this.notespaceService.addNote(this.notespace, note).subscribe((note) => {
      this.added.emit(note);
      this.close();
    });
  }

  close() {
    this.closed.emit();
  }
}
