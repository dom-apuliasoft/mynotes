import { Component, Input, OnInit } from '@angular/core';

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

  showMobileMenu = false;

  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }
}
