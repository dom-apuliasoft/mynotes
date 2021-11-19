import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotespaceEntity } from '@mynotes/api-types';
import { NotespaceService } from '../notespace.service';

@Component({
  selector: 'mynotes-notespace-editor',
  templateUrl: './notespace-editor.component.html',
  styleUrls: ['./notespace-editor.component.scss'],
})
export class NotespaceEditorComponent implements OnInit {
  notespace?: NotespaceEntity;

  data: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(32)]],
    color: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(7)]],
  });

  constructor(
    private route: ActivatedRoute,
    private notespaceService: NotespaceService,
    private location: Location,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getNotespace();
  }

  getNotespace(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

    this.notespaceService
      .get(+id)
      .subscribe((data) => this.setFetchedNotespace(data));
  }

  private setFetchedNotespace(notespace: NotespaceEntity): void {
    this.notespace = notespace;
    this.data.patchValue(notespace);
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(): void {
    const newContent = this.data.value as NotespaceEntity;

    this.notespace = {
      ...this.notespace,
      ...newContent,
    };

    this.notespaceService.save(this.notespace).subscribe(
      () => this.goBack(),
      (err) => alert(err.error.message)
    );
  }
}
