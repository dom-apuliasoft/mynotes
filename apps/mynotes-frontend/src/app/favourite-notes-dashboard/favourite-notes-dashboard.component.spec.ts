import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteNotesDashboardComponent } from './favourite-notes-dashboard.component';

describe('FavouriteNotesDashboardComponent', () => {
  let component: FavouriteNotesDashboardComponent;
  let fixture: ComponentFixture<FavouriteNotesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteNotesDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteNotesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
