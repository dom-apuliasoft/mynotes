import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteEntity, NotespaceEntity } from '@mynotes/api-types';
import { NoteService } from '../note.service';
import { NotespaceService } from '../notespace.service';

@Component({
  selector: 'mynotes-notespaces-modal',
  templateUrl: './notespaces-modal.component.html',
  styleUrls: ['./notespaces-modal.component.scss']
})
export class NotespacesModalComponent implements OnInit {

  @Input() note!: NoteEntity;
  @Output() added = new EventEmitter<NotespaceEntity>();
  @Output() closed = new EventEmitter();

  availableNotespaces?: NotespaceEntity[];

  constructor(private noteService: NoteService, private notespaceService: NotespaceService) {}

  ngOnInit(): void {
    this.getAvailableNotespaces();
  }

  getAvailableNotespaces() {
    this.noteService
      .getAvailableNotespaces(this.note.id || -1)
      .subscribe((notespaces) => (this.availableNotespaces = notespaces));
  }

  addToNotespace(notespace: NotespaceEntity) {
    this.notespaceService.addNote(notespace, this.note).subscribe(() => {
      this.added.emit(notespace);
      this.close();
    });
  }

  close() {
    this.closed.emit();
  }

}
