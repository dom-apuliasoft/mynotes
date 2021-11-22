import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NoteEntity, NotespaceEntity } from '@mynotes/api-types';
import { faHeart as faHeartRegular, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faExpandAlt, faPlus, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { NoteService } from '../note.service';

@Component({
  selector: 'mynotes-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent {
  @Input() note!: NoteEntity;
  @Output() delete = new EventEmitter<NoteEntity>();

  isShowingModal = false;

  constructor(private noteService: NoteService) {}

  heartIcon = {
    regular: faHeartRegular,
    solid: faHeartSolid,
  };

  deleteIcon = faTrashAlt;
  addIcon = faPlus;
  expandIcon = faExpandAlt;

  toggleFavourite(note: NoteEntity) {
    note.isFavourite = !note.isFavourite;
    this.noteService.save(note).subscribe();
  }

  onAdd(notespace: NotespaceEntity) {
    this.note.notespaces?.push(notespace);
  }
}
