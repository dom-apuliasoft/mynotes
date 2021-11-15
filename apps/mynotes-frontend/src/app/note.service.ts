import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Note } from '@mynotes/api-types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  baseUrl = 'http://localhost:3333/api';

  constructor(private httpClient: HttpClient) {}

  getNotes(): Observable<Note[]> {
    return this.httpClient.get<Note[]>(this.baseUrl + '/notes');
  }

  patchNote(note: Note): Observable<Note> {
    return this.httpClient.patch<Note>(this.baseUrl + '/notes', note);
  }

  deleteNote(id: string): Observable<Note> {
    return this.httpClient.delete<Note>(`${this.baseUrl}/notes/${id}`);
  }

  createNote(note: Note): Observable<Note> {
    return this.httpClient.post<Note>(this.baseUrl + '/notes', note);
  }

  getNote(id: string): Observable<Note> {
    return this.httpClient.get<Note>(`${this.baseUrl}/notes/${id}`);
  }
}
