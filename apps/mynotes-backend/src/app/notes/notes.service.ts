import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NoteEntity } from '@mynotes/api-types';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(NoteEntity)
    private notesRepository: Repository<NoteEntity>
  ) {}

  async delete(id: number): Promise<NoteEntity> {
    const note = await this.notesRepository.findOne(id);
    const removedNote = await this.notesRepository.remove(note);
    return {
      ...removedNote,
      id,
    };
  }

  async get(id: number): Promise<NoteEntity> {
    const note = await this.notesRepository.findOne(id, {
      relations: ['notespaces'],
    });
    return note;
  }

  async getAll(): Promise<NoteEntity[]> {
    const notes = await this.notesRepository.find({
      relations: ['notespaces'],
      order: {
        isFavourite: 'DESC',
        updatedAt: 'DESC',
      },
    });
    return notes;
  }

  async getFavourites(): Promise<NoteEntity[]> {
    const notes = await this.notesRepository.find({
      relations: ['notespaces'],
      where: {
        isFavourite: true,
      },
    });

    return notes;
  }

  async save(note: NoteEntity): Promise<NoteEntity> {
    const savedNote = await this.notesRepository.save(note);
    return savedNote;
  }
}
