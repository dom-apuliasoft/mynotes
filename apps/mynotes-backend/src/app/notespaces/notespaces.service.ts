import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotespaceEntity } from '@mynotes/api-types';

@Injectable()
export class NotespacesService {
  constructor(
    @InjectRepository(NotespaceEntity)
    private notespacesRepository: Repository<NotespaceEntity>
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
}
