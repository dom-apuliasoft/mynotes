import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { NoteEntity, NotespaceEntity } from "@mynotes/api-types";
import { NotesController } from "./notes/notes.controller";
import { NotesService } from "./notes/notes.service";
import { NotespacesService } from "./notespaces/notespaces.service";
import { NotespacesController } from "./notespaces/notespaces.controller";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "db.sqlite",
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([NoteEntity, NotespaceEntity]),
  ],
  controllers: [AppController, NotesController, NotespacesController],
  providers: [AppService, NotesService, NotespacesService],
})
export class AppModule {}
