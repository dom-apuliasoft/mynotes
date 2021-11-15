import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteDashboardComponent } from './note-dashboard.component';

describe('NoteDashboardComponent', () => {
  let component: NoteDashboardComponent;
  let fixture: ComponentFixture<NoteDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
