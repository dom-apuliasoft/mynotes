import { Component } from '@angular/core';
import { AnchorRoute } from './navbar/navbar.component';

@Component({
  selector: 'mynotes-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mynotes-frontend';
  navbarRoutes: AnchorRoute[] = [
    { name: 'Home', route: '/' },
    { name: 'Notespaces', route: '/notespaces' },
  ];
}
