import { Note } from '@mynotes/api-types';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class NotesService {
  private notes: Note[] = [
    {
      id: '1',
      title: 'Title 1',
      content: 'content 1',
    },
    {
      id: '2',
      title: 'Title 2',
      content: 'content 2',
    },
    {
      id: '3',
      title: 'Title 3',
      content: 'content 3',
    },
  ];

  create(note: Note) {
    note.id = uuidv4();
    note.createdAt = Date.now().toString();
    this.notes.push(note);
  }

  delete(id: string) {
    const index = this.notes.findIndex((note) => note.id === id);
    const element = this.notes[index];
    this.notes.splice(index, 1);
    return element;
  }

  get(id: string) {
    const index = this.notes.findIndex((note) => note.id === id);
    return this.notes[index];
  }

  getAll(): Note[] {
    return [...this.notes];
  }

  update(note: Note): Note {
    const index = this.notes.findIndex((n) => n.id === note.id);
    this.notes[index] = {
      ...this.notes[index],
      ...note
    }

    return this.notes[index];
  }
}
