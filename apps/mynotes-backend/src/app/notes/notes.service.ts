import { Note } from "@mynotes/api-types";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { v4 as uuidv4 } from "uuid";
import { NoteEntity } from "./note.entity";

@Injectable()
export class NotesService {
  /* private notes: Note[] = [
    {
      id: 1,
      title: "Title 1",
      content: "content 1",
    },
    {
      id: 2,
      title: "Title 2",
      content: "content 2",
    },
    {
      id: 3,
      title: "Title 3",
      content: "content 3",
    },
  ]; */

  constructor(
    @InjectRepository(NoteEntity)
    private notesRepository: Repository<NoteEntity>
  ) {}

  async create(note: Note) {
    note.createdAt = Date.now().toString();
    await this.notesRepository.insert(note);

    /* note.id = uuidv4();
    note.createdAt = Date.now().toString();
    this.notes.push(note); */
  }

  async delete(id: string) {
    const note = await this.notesRepository.findOne(id);
    await this.notesRepository.delete(note);
    return note;
    
    /* const index = this.notes.findIndex((note) => note.id === id);
    const element = this.notes[index];
    this.notes.splice(index, 1);
    return element; */
  }

  get(id: string) {
    return this.notesRepository.findOne(id);
    
    /* const index = this.notes.findIndex((note) => note.id === id);
    return this.notes[index]; */
  }

  getAll() {
    return this.notesRepository.find();
    // return [...this.notes];
  }

  async update(note: Note) {
    const savedNote = await this.notesRepository.findOne(note.id);
    savedNote.title = note.title;
    savedNote.content = note.content;
    await this.notesRepository.save(savedNote);

    /*const index = this.notes.findIndex((n) => n.id === note.id);
    this.notes[index] = {
      ...this.notes[index],
      ...note,
    };

    return this.notes[index];*/
  }
}
