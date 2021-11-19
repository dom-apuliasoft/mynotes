import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotespaceEditorComponent } from './notespace-editor.component';

describe('NotespaceEditorComponent', () => {
  let component: NotespaceEditorComponent;
  let fixture: ComponentFixture<NotespaceEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotespaceEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotespaceEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
