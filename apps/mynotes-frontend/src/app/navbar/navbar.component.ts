import { Component, Input } from '@angular/core';
import { faStickyNote } from '@fortawesome/free-regular-svg-icons';

export type AnchorRoute = {
  name: string;
  route: string;
};

@Component({
  selector: 'mynotes-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() routes: AnchorRoute[] = [];

  noteIcon = faStickyNote;

  showMobileMenu = false;

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }
}
