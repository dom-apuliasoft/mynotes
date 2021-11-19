import { IsNotEmpty, Length } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany } from 'typeorm';
import { NoteEntity } from '..';

@Entity()
export class NotespaceEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  @IsNotEmpty()
  name?: string;

  @Column()
  @Length(3, 7, { message: 'Color must be valid'})
  color?: string;

  @ManyToMany(() => NoteEntity, note => note.notespaces)
  notes?: NoteEntity[];

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
