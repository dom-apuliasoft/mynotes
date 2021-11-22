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
import { NotesService } from './notes.service';
import { NotespacesService } from '../notespaces/notespaces.service';

@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService, private notespacesService: NotespacesService) {}

  @Get('/favourites')
  async getFavouriteNotes(): Promise<NoteEntity[]> {
    const notes = await this.notesService.getFavourites();
    return notes;
  }

  @Get('/:id')
  async getNote(@Param('id', ParseIntPipe) id: number): Promise<NoteEntity> {
    const note = await this.notesService.get(id);
    return note;
  }

  @Get('/:id/available-notespaces')
  async getAvailableNotespaces(
    @Param('id', ParseIntPipe) id: number
  ): Promise<NotespaceEntity[]> {
    const availableNotespaces = await this.notespacesService.getAvailableForNote(
      id
    );
    return availableNotespaces;
  }

  @Get('')
  async getNotes(): Promise<NoteEntity[]> {
    const notes = await this.notesService.getAll();
    return notes;
  }

  @Put('')
  async saveNote(@Body() note: NoteEntity): Promise<NoteEntity> {
    const newNote = await this.notesService.save(note);
    return newNote;
  }

  @Delete('/:id')
  async deleteNote(@Param('id', ParseIntPipe) id: number): Promise<NoteEntity> {
    const deletedNote = await this.notesService.delete(id);
    return deletedNote;
  }
}
