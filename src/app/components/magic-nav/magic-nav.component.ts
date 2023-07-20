import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-magic-nav',
  templateUrl: './magic-nav.component.html',
  styleUrls: ['./magic-nav.component.scss']
})
export class MagicNavComponent {
  links = [
    { href: "/home", icon: "home-outline" },
    { href: "/profile", icon: "person-outline" },
    { href: "/settings", icon: "settings-outline" },
    { href: "/mail", icon: "mail-outline" },
    { href: "/videos", icon: "videocam-outline" },
    { href: "/keys", icon: "key-outline" },
    { href: "/games", icon: "game-controller-outline" },
    { href: "/photos", icon: "camera-outline" },
  ];

  constructor(private router: Router) {}

  isRouteActive(link: any) {
    return this.router.url === link.href ? "active" : "";
  }

  toggleMenu() {
    document.querySelector('.toggle')?.classList.toggle('active');
    document.querySelector('.menu')?.classList.toggle('active');
  }

}
