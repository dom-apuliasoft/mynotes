import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { NoteEntity, NotespaceEntity } from '@mynotes/api-types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  baseUrl = 'http://localhost:3333/api';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<NoteEntity[]> {
    return this.httpClient.get<NoteEntity[]>(this.baseUrl + '/notes');
  }

  get(id: number): Observable<NoteEntity> {
    return this.httpClient.get<NoteEntity>(`${this.baseUrl}/notes/${id}`);
  }

  getFavourites(): Observable<NoteEntity[]> {
    return this.httpClient.get<NoteEntity[]>(`${this.baseUrl}/notes/favourites`);
  }

  getAvailableNotespaces(id: number): Observable<NotespaceEntity[]> {
    return this.httpClient.get<NotespaceEntity[]>(`${this.baseUrl}/notes/${id}/available-notespaces`);
  }

  delete(id: number): Observable<NoteEntity> {
    return this.httpClient.delete<NoteEntity>(`${this.baseUrl}/notes/${id}`);
  }

  save(note: NoteEntity): Observable<NoteEntity> {
    return this.httpClient.put<NoteEntity>(this.baseUrl + '/notes', note);
  }
}
