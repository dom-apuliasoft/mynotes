import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteEntity, NotespaceEntity } from '@mynotes/api-types';
import { NotespaceService } from '../notespace.service';

@Component({
  selector: 'mynotes-notespace-view',
  templateUrl: './notespace-view.component.html',
  styleUrls: ['./notespace-view.component.scss'],
})
export class NotespaceViewComponent implements OnInit {
  notespace?: NotespaceEntity;
  isShowingModal = false;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private notespaceService: NotespaceService
  ) {}

  ngOnInit(): void {
    this.getNotespace();
  }

  getNotespace(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.notespaceService
      .get(+id)
      .subscribe((notespace) => (this.notespace = notespace));
  }

  removeNote(note: NoteEntity) {
    if (!this.notespace) return;
    this.notespaceService
      .removeNote(this.notespace, note)
      .subscribe(
        (removed) =>
          this.notespace &&
          (this.notespace.notes = this.notespace.notes?.filter(
            (note) => note.id !== removed.id
          ))
      );
  }

  onAdd(note: NoteEntity) {
    this.notespace?.notes?.push(note);
  }
}
