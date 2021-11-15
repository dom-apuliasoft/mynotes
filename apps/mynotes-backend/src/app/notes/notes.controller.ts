import { Note, NoteCreationResponse } from '@mynotes/api-types';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Get('')
  getNotes(): Note[] {
    return this.notesService.getAll();
  }

  @Get('/:id')
  getNote(@Param('id') id: string): Note {
    return this.notesService.get(id);
  }

  @Post('')
  createNote(@Body() note: Note): NoteCreationResponse {
    this.notesService.create(note);
    return { note };
  }

  @Patch('')
  updateNote(@Body() note: Note): Note {
    return this.notesService.update(note);
  }

  @Delete('/:id')
  deleteNote(@Param('id') id: string): Note {
    return this.notesService.delete(id);
  }
}
