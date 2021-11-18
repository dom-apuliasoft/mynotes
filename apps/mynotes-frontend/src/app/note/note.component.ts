import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NoteEntity } from '@mynotes/api-types';

@Component({
  selector: 'mynotes-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {

  @Input() note!: NoteEntity;
  @Output() delete = new EventEmitter<NoteEntity>();

}
