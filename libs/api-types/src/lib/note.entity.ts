import { MaxLength, MinLength } from 'class-validator';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { NotespaceEntity } from '..';

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

  @Column({ default: false })
  isFavourite?: boolean;

  @ManyToMany((type) => NotespaceEntity, (notespace) => notespace.notes, {
    cascade: true,
  })
  @JoinTable()
  notespaces?: NotespaceEntity[];

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
