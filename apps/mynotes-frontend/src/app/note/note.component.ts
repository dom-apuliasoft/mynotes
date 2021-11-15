import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Note } from '@mynotes/api-types';
import { NoteService } from '../note.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'mynotes-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  note?: Note;

  data: FormGroup = this.formBuilder.group({
    title: [''],
    content: [''],
  });

  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
    private location: Location,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getNote();
  }

  getNote(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.noteService.getNote(id).subscribe((data) => this.setFetchedNote(data));
  }

  private setFetchedNote(note: Note): void {
    this.note = note;
    this.data.patchValue(note);
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(): void {
    const newNote = this.data.value as Note;
    newNote.id = this.note?.id;
    if (this.note) this.noteService.patchNote(newNote).subscribe();
    this.goBack();
  }
}
