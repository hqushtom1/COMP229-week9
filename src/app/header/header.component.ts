import { Component, OnInit } from '@angular/core';
import { NavigationStart, Event, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  login_status: any;

  constructor(private auth: AuthService, private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.login_status = this.auth.isAuthenticated();
      }
    })

  }

  logout() {
    this.auth.removeToken("access_token");
    this.router.navigate(["/"]);
  }

  ngOnInit(): void {
  }

}
