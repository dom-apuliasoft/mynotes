import { Test, TestingModule } from '@nestjs/testing';
import { NotespacesService } from './notespaces.service';

describe('NotespacesService', () => {
  let service: NotespacesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotespacesService],
    }).compile();

    service = module.get<NotespacesService>(NotespacesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
