
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class NoteEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  createdAt: string;
}
