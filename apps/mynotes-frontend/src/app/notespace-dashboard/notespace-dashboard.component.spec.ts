import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotespaceDashboardComponent } from './notespace-dashboard.component';

describe('NotespacesComponent', () => {
  let component: NotespaceDashboardComponent;
  let fixture: ComponentFixture<NotespaceDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotespaceDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotespaceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
