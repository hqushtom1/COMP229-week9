import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  user = {
    userName: "",
    password: ""
  }
  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    this.auth.login(this.user).subscribe((data) => {
      if (data.token) {
        this.auth.setToken(data.token);
      }
      this.router.navigate(["/user_list"])


    });
  }

}
