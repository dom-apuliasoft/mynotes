import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NoteEntity } from '@mynotes/api-types';
import { NoteService } from '../note.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mynotes-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.scss'],
})
export class NoteEditorComponent implements OnInit {
  note?: NoteEntity;

  data: FormGroup = this.formBuilder.group({
    title: ['', [Validators.required, Validators.maxLength(32)]],
    content: ['', [Validators.required, Validators.minLength(8)]],
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
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.noteService.get(+id).subscribe((data) => this.setFetchedNote(data));
  }

  private setFetchedNote(note: NoteEntity): void {
    this.note = note;
    this.data.patchValue(note);
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(): void {
    const newContent = this.data.value as NoteEntity;

    this.note = {
      ...this.note,
      ...newContent,
    };

    this.noteService.save(this.note).subscribe(
      () => this.goBack(),
      (err) => alert(err.error.message)
    );
  }
}
