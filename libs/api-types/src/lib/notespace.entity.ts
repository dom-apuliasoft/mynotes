import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany } from 'typeorm';
import { NoteEntity } from '..';

@Entity()
export class NotespaceEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name?: string;

  @ManyToMany(() => NoteEntity, note => note.notespaces)
  notes?: NoteEntity[];

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
