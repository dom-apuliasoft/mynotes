import { Note, NoteCreationResponse } from '@mynotes/api-types';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Get('')
  async getNotes() {
    return this.notesService.getAll();
  }

  @Get('/:id')
  async getNote(@Param('id') id: string) {
    return this.notesService.get(id);
  }

  @Post('')
  async createNote(@Body() note: Note): Promise<NoteCreationResponse> {
    this.notesService.create(note);
    return { note };
  }

  @Patch('')
  async updateNote(@Body() note: Note) {
    return this.notesService.update(note);
  }

  @Delete('/:id')
  async deleteNote(@Param('id') id: string) {
    return this.notesService.delete(id);
  }
}
