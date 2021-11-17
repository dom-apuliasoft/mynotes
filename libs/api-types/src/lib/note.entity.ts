import { MaxLength, MinLength } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class NoteEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  @MaxLength(32, { message: 'Title must be less than 32 characters' })
  title?: string;

  @Column()
  @MinLength(8, { message: 'Content must be at least 8 characters' })
  content?: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
