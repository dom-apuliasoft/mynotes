import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Note } from '@mynotes/api-types';
import { NoteService } from '../note.service';

@Component({
  selector: 'mynotes-node-creator',
  templateUrl: './note-creator.component.html',
  styleUrls: ['./note-creator.component.scss'],
})
export class NoteCreatorComponent {
  data: FormGroup = this.formBuilder.group({
    title: [''],
    content: [''],
  });

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder,
    private noteService: NoteService
  ) {}

  onSubmit(): void {
    const note = this.data.value as Note;
    this.noteService.createNote(note).subscribe();
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }
}
