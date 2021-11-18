import { Component, OnInit } from '@angular/core';
import { NotespaceEntity } from '@mynotes/api-types';
import { NotespaceService } from '../notespace.service';

@Component({
  selector: 'mynotes-notespaces',
  templateUrl: './notespace-dashboard.component.html',
  styleUrls: ['./notespace-dashboard.component.scss'],
})
export class NotespaceDashboardComponent implements OnInit {
  notespaces: NotespaceEntity[] = [];

  constructor(private notespaceService: NotespaceService) {}

  ngOnInit(): void {
    this.getNotespaces();
  }

  createNotespace(): void {
    const notespace: NotespaceEntity = { name: 'New notespace' };
    this.notespaceService.save(notespace).subscribe((data) => {
      this.notespaces.push(data);
    });
  }

  getNotespaces(): void {
    this.notespaceService.getAll().subscribe((data) => {
      this.notespaces = data;
    });
  }

  deleteNotespace(notespace: NotespaceEntity): void {
    const id = notespace.id || -1;
    this.notespaceService
      .delete(id)
      .subscribe((deletedNotespace) => this.removeNotespace(deletedNotespace));
  }

  private removeNotespace(notespace: NotespaceEntity) {
    const index = this.notespaces.findIndex((n) => {
      return n.id === notespace.id;
    });
    if (index !== -1) this.notespaces.splice(index, 1);
  }
}
