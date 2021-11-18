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

@Controller('notespaces')
export class NotespacesController {
  constructor(
    private notespacesService: NotespacesService,
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
    const available = this.notespacesService.getAvailableNotes(id);
    return available;
  }

  @Put('/:id/add-note')
  async addNote(
    @Param('id', ParseIntPipe) id: number,
    @Body() note: NoteEntity
  ): Promise<NoteEntity> {
    const addedNote = await this.notespacesService.addNote(id, note);
    return addedNote;
  }

  @Delete('/:notespaceId/:noteId')
  async removeNote(
    @Param('notespaceId', ParseIntPipe) notespaceId: number,
    @Param('noteId', ParseIntPipe) noteId: number
  ): Promise<NoteEntity> {
    const removed = await this.notespacesService.removeNote(
      notespaceId,
      noteId
    );
    return removed;
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
