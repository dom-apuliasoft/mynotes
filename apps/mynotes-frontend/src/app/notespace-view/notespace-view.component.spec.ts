import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotespaceViewComponent } from './notespace-view.component';

describe('NotespaceViewComponent', () => {
  let component: NotespaceViewComponent;
  let fixture: ComponentFixture<NotespaceViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotespaceViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotespaceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
