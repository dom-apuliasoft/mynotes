import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NoteEntity, NotespaceEntity } from '@mynotes/api-types';
import { NotesService } from '../notes/notes.service';

@Injectable()
export class NotespacesService {
  constructor(
    @InjectRepository(NotespaceEntity)
    private notespacesRepository: Repository<NotespaceEntity>,
    private notesService: NotesService
  ) {}

  async delete(id: number): Promise<NotespaceEntity> {
    const notespace = await this.notespacesRepository.findOne(id);
    const removedNotespace = await this.notespacesRepository.remove(notespace);
    return {
      ...removedNotespace,
      id,
    };
  }

  async get(id: number): Promise<NotespaceEntity> {
    const notespace = await this.notespacesRepository.findOne(id, {
      relations: ['notes'],
    });
    return notespace;
  }

  async getAll(): Promise<NotespaceEntity[]> {
    const notespaces = await this.notespacesRepository.find({
      relations: ['notes'],
    });
    return notespaces;
  }

  async save(notespace: NotespaceEntity): Promise<NotespaceEntity> {
    const savedNotespace = await this.notespacesRepository.save(notespace);
    return savedNotespace;
  }

  async addNote(notespaceId: number, note: NoteEntity): Promise<NoteEntity> {
    const notespace = await this.get(notespaceId);
    note.notespaces.push(notespace);
    return await this.notesService.save(note);
  }

  async removeNote(notespaceId: number, noteId: number) {
    const note = await this.notesService.get(noteId);
    note.notespaces = note.notespaces.filter((ns) => ns.id !== notespaceId);
    return await this.notesService.save(note);
  }

  async getAvailableNotes(id: number): Promise<NoteEntity[]> {
    const notes = await this.notesService.getAll();
    const available = notes.filter(
      (note) => !note.notespaces.find((notespace) => notespace.id === id)
    );
    return available;
  }
}
