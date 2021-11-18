import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NoteEntity, NotespaceEntity } from '@mynotes/api-types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotespaceService {
  baseUrl = 'http://localhost:3333/api';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<NotespaceEntity[]> {
    return this.httpClient.get<NotespaceEntity[]>(this.baseUrl + '/notespaces');
  }

  delete(id: number): Observable<NotespaceEntity> {
    return this.httpClient.delete<NotespaceEntity>(
      `${this.baseUrl}/notespaces/${id}`
    );
  }

  save(notespace: NotespaceEntity): Observable<NotespaceEntity> {
    return this.httpClient.put<NotespaceEntity>(
      this.baseUrl + '/notespaces',
      notespace
    );
  }

  get(id: number): Observable<NotespaceEntity> {
    return this.httpClient.get<NotespaceEntity>(
      `${this.baseUrl}/notespaces/${id}`
    );
  }

  getAvailableNotes(id: number): Observable<NoteEntity[]> {
    return this.httpClient.get<NoteEntity[]>(
      `${this.baseUrl}/notespaces/${id}/available-notes`
    );
  }

  addNote(notespace: NotespaceEntity, note: NoteEntity): Observable<NoteEntity> {
    return this.httpClient.put<NoteEntity>(
      `${this.baseUrl}/notespaces/${notespace.id}/add-note`,
      note
    );
  }

  removeNote(notespace: NotespaceEntity, note: NoteEntity): Observable<NoteEntity> {
    return this.httpClient.delete<NoteEntity>(
      `${this.baseUrl}/notespaces/${notespace.id}/${note.id}`
    );
  }
}
