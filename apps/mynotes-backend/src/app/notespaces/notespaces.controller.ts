import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { NoteEntity, NotespaceEntity } from '@mynotes/api-types';
import { NotespacesService } from './notespaces.service';
import { NotesService } from '../notes/notes.service';

@Controller('notespaces')
export class NotespacesController {
  constructor(
    private notespacesService: NotespacesService,
    private notesService: NotesService
  ) {}

  @Get('')
  async getNotespaces(): Promise<NotespaceEntity[]> {
    const notespaces = await this.notespacesService.getAll();
    return notespaces;
  }

  @Get('/:id')
  async getNotespace(
    @Param('id', ParseIntPipe) id: number
  ): Promise<NotespaceEntity> {
    const notespace = await this.notespacesService.get(id);
    return notespace;
  }

  @Get('/:id/available-notes')
  async getAvailableNotes(
    @Param('id', ParseIntPipe) id: number
  ): Promise<NoteEntity[]> {
    const notes = await this.notesService.getAll();
    const available = notes.filter(
      (note) => !note.notespaces || !note.notespaces.find((notespace) => notespace.id === id)
    );
    return available;
  }

  @Put('/:id/add-note')
  async addNote(
    @Param('id', ParseIntPipe) id: number,
    @Body() note: NoteEntity
  ): Promise<NoteEntity> {
    const notespace = await this.getNotespace(id);
    note.notespaces.push(notespace);
    return await this.notesService.save(note);
  }

  @Delete('/:notespaceId/:noteId')
  async removeNote(
    @Param('notespaceId', ParseIntPipe) notespaceId: number,
    @Param('noteId', ParseIntPipe) noteId: number,
  ): Promise<NoteEntity> {
    const note = await this.notesService.get(noteId);
    note.notespaces = note.notespaces.filter(ns => ns.id !== notespaceId);
    return await this.notesService.save(note);
  }

  @Put('')
  async saveNotespace(
    @Body() notespace: NotespaceEntity
  ): Promise<NotespaceEntity> {
    const newNotespace = await this.notespacesService.save(notespace);
    return newNotespace;
  }

  @Delete('/:id')
  async deleteNotespace(
    @Param('id', ParseIntPipe) id: number
  ): Promise<NotespaceEntity> {
    const deletedNotespace = await this.notespacesService.delete(id);
    return deletedNotespace;
  }
}
