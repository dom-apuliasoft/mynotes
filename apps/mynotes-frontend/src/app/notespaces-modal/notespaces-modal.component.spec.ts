import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotespacesModalComponent } from './notespaces-modal.component';

describe('NotespacesModalComponent', () => {
  let component: NotespacesModalComponent;
  let fixture: ComponentFixture<NotespacesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotespacesModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotespacesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
