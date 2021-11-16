import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { NoteEntity } from '@mynotes/api-types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  baseUrl = 'http://localhost:3333/api';

  constructor(private httpClient: HttpClient) {}

  getNotes(): Observable<NoteEntity[]> {
    return this.httpClient.get<NoteEntity[]>(this.baseUrl + '/notes');
  }

  deleteNote(id: number): Observable<NoteEntity> {
    return this.httpClient.delete<NoteEntity>(`${this.baseUrl}/notes/${id}`);
  }

  saveNote(note: NoteEntity): Observable<NoteEntity> {
    return this.httpClient.put<NoteEntity>(this.baseUrl + '/notes', note);
  }

  getNote(id: number): Observable<NoteEntity> {
    return this.httpClient.get<NoteEntity>(`${this.baseUrl}/notes/${id}`);
  }
}
