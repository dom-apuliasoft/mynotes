import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotespaceComponent } from './notespace.component';

describe('NotespaceComponent', () => {
  let component: NotespaceComponent;
  let fixture: ComponentFixture<NotespaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotespaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotespaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
