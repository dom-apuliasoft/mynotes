import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { NoteEntity } from "./notes/note.entity";
import { NotesController } from "./notes/notes.controller";
import { NotesService } from "./notes/notes.service";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "db.sqlite",
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([NoteEntity]),
  ],
  controllers: [AppController, NotesController],
  providers: [AppService, NotesService],
})
export class AppModule {}
